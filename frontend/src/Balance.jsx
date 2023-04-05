import { useEffect, useState } from "react";

const Balance = () => {

    const [account, setAccount] = useState({ balance: '' });

    const getAccount = async () => {

        const cookies = document.cookie.split(' ');
        const token = cookies.find(cookie => cookie.includes('gylin-bank-jwt')).split('=')[1];

        console.log('cookie token:', token)

        const response = await fetch('http://localhost:5000/me/accounts', {
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });

        if (response.ok) {
            const data = await response.json()
            console.log(data)
            setAccount(data)

        }

    }

    useEffect(() => {

        getAccount();

    }, [])



    return (
        <div>
            <h1 className="text-5xl">Balance</h1>
            <h2 className="text-3xl">{account.balance}</h2>
        </div>
    )

}

export default Balance;