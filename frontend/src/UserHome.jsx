import getCookie from "./getCookie";
import Button from "./Button";
import getAccount from "./getAccount";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const UserHome = () => {
    const name = getCookie('gylin-bank-name');
    const [message, setMessage] = useState(`Welcome ${name}, what do you wish to do today?`)
    const navigate = useNavigate();
    const setIsLoggedIn = useOutletContext();

    const quickBalance = () => {

        getAccount((account) => {
            setMessage(`You have $${account.balance} in your account`)
        })

    }

    const logOut = () => {
        document.cookie = "gylin-bank-jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "gylin-bank-name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsLoggedIn(false);
        navigate('/');
    };

    return (

        <div className="flex flex-col justify-center items-center w-full h-full">
            <h2 className="text-3xl">{message}</h2>

            <div className="flex flex-col border  bg-white shadow-lg rounded-lg gap-3 p-4 w-5/6 my-6">


                <Button title="Quick Balance Check" callback={quickBalance} />
                <Button title="Account History" link='/account' />
                <Button title="Deposit" link='/deposit' />
                <Button title="Withdraw" link='/withdraw' />
                <Button title="Log Out" callback={logOut} />

            </div>

        </div>

    )

}

export default UserHome;