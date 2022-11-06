import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {

    const { user, logout, setLoading } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(()=>{
                setLoading(false)
            })
            .catch()
    }

    return (
        <div className='flex justify-around p-5 bg-slate-100 items-center' >
            <p className='text-3xl'>PaikariShop</p>
            <ul>
                <Link to='/home' className='mr-5 '>Home</Link>
                <Link to='/products' className='mr-5'>Products</Link>
                <Link to='/addProducts' className='mr-5'>Add Products</Link>
                <Link to='/product/edit/:id' className='mr-5'>Edit Products</Link>

            </ul>
            <ul>
                {
                    user?.email ?

                        <Link to='/orders' className='mr-5'>{user?.email}</Link>
                        :
                        <Link>{user?.email}</Link>
                }
                {
                    user?.email ?
                        <Link to='/signup'>
                            <button onClick={handleLogout} className='bg-red-500 text-white px-7 py-1 font-semibold rounded-lg'>Signout</button>
                        </Link>
                        :

                        <Link to='/signup'>
                            <button className='bg-green-500 text-white px-7 py-1 font-semibold rounded-lg'>Signup</button>
                        </Link>
                }
            </ul>
        </div>
    );
};

export default Header;

<Link to='/signup'>
    <button className='bg-green-500 text-white px-7 py-1 font-semibold rounded-lg'>Signup</button>
</Link> 