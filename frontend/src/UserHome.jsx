import getCookie from "./getCookie";
import Button from "./Button";

const UserHome = () => {

    const name = getCookie('gylin-bank-name');

    return (

        <div className="flex flex-col justify-center items-center w-full h-full">
            <h2 className="text-3xl">Welcome {name}, what do you wish to do today?</h2>

            <div className="flex flex-col border  bg-white shadow-lg rounded-lg gap-3 p-4 w-5/6 my-6">


                <Button title="Quick Balance Check" />
                <Button title="Account History" />
                <Button title="Deposit" />
                <Button title="Withdraw" />
                <Button title="Log Out" />

            </div>

        </div>

    )

}

export default UserHome;