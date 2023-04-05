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

const users = [];
const accounts = [];
let userIdCount = 0;
let accountIdCount = 0;

app.post('/users', (req, res) => {

    const user = req.body.user;
    user.id = userIdCount++;

    users.push(user);

    accounts.push({
        id: accountIdCount++,
        userId: user.id,
        balance: req.body.initialDeposit,

    })
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
        console.log({ token });
        res.json({ token });

    } else {
        res.send('error');
    }

});

app.get('/me/accounts', (req, res) => {

    const headers = req.headers;
    const authHeader = headers.authorization;

    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET, (err, userName) => {

        if (err) {
            res.sendStatut(403);
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