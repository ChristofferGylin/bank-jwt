import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const PORT = 5000;
const SECRET = 'iu1sdfhnfvxl576nhbiofhdx367sdfjoixfvhn2252xuy';
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const users = [{ id: 0, username: 'chris', password: '1234' }];
const accounts = [{ id: 0, userId: 0, balance: 100, transactions: [] }];
let userIdCount = 1;
let accountIdCount = 1;

app.post('/users', (req, res) => {

    const user = req.body.user;
    user.id = userIdCount++;

    users.push(user);

    accounts.push({
        id: accountIdCount++,
        userId: user.id,
        balance: req.body.initialDeposit,
        transactions: []
    });
    console.log('users:', users);
    console.log('accounts:', accounts);
    res.send('ok');

});


app.post('/sessions', (req, res) => {

    const user = req.body;
    const dbUser = users.find(userElement => userElement.username === user.username);

    console.log('dBUser:', dbUser);

    if (dbUser.password === user.password) {


        const token = jwt.sign(dbUser.username, SECRET);
        console.log('heyoo');
        console.log('token:', token)
        res.cookie('gylin-bank-jwt', token, { maxAge: 90000000, httpOnly: false });
        res.json(token);


    } else {
        res.send('error');
    }

});

app.get('/me/accounts', (req, res) => {

    const headers = req.headers;

    console.log('headers:', headers);
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];

    console.log('token form accounts:', token)

    jwt.verify(token, SECRET, (err, userName) => {

        if (err) {
            res.sendStatus(403);
            return;
        }
        const user = users.find(userElement => userElement.username === userName)
        const account = accounts.find(acc => acc.id === user.id)

        console.log('userId:', user.id);
        res.send(account);

    });

});

app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});