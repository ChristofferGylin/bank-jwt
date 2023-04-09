import getCookie from "./getCookie";
import Button from "./Button";
import getAccount from "./getAccount";
import { useState } from "react";

const UserHome = () => {
    const name = getCookie('gylin-bank-name');
    const [message, setMessage] = useState(`Welcome ${name}, what do you wish to do today?`)

    const quickBalance = () => {

        getAccount((account) => {
            setMessage(`Account Balance: ${account.balance}`)
        })

    }

    return (

        <div className="flex flex-col justify-center items-center w-full h-full">
            <h2 className="text-3xl">{message}</h2>

            <div className="flex flex-col border  bg-white shadow-lg rounded-lg gap-3 p-4 w-5/6 my-6">


                <Button title="Quick Balance Check" callback={quickBalance} />
                <Button title="Account History" />
                <Button title="Deposit" link='/deposit' />
                <Button title="Withdraw" link='/withdraw' />
                <Button title="Log Out" />

            </div>

        </div>

    )

}

export default UserHome;