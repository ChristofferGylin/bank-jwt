import { useRef } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';

const Menu = ({ isLoggedIn, setIsLoggedIn }) => {

    const userName = useRef(null);
    const password = useRef(null);

    const logIn = () => {

        setIsLoggedIn(true);

    }
    const logOut = () => {

        setIsLoggedIn(false);

    }

    let menuItems;

    if (isLoggedIn) {

        menuItems = (
            <div className='flex gap-5 text-lg font-semibold'>

                <Link className='hover:underline' to='/balance'>Check Balance</Link>
                <Button title='Log out' link='/' callback={logOut} />
            </div>
        )

    } else {

        menuItems = (
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <input placeholder='User Name' className='w-full border border-pink-500 rounded-lg px-2 py-1' type="text" ref={userName} />
                    <input placeholder='Password' className='w-full border border-pink-500 rounded-lg px-2 py-1' type="password" ref={password} />
                </div>
                <ul className='grid grid-cols-2 gap-2 font-semibold'>
                    <Button title='Log in' link='/home' callback={logIn} />
                    <Button title='New account' link='/register' callback={logIn} />

                </ul>
            </div>

        )

    }

    return (
        <header className="flex justify-between items-center w-full h-36 bg-pink-400 text-pink-100 p-4">

            <h1 className="text-6xl drop-shadow-xl">
                Piggy Bank
            </h1>


            {menuItems}
        </header>
    )

}

export default Menu;