const deposit = (account, amount) => {

    account.balance += parseInt(amount);

    let note;

    if (amount > 0) {

        note = 'Deposited';

    } else {

        note = 'Withdrawn';

    }

    const log = {
        time: Date.now(),
        note,
        amount,
        balance: account.balance

    };

    account.transactions.unshift(log);

}

export default deposit;