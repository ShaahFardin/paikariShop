import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const Login = () => {

    const { login, loading, setLoading } = useContext(AuthContext);

    const handleUserLogin = event => {
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                form.reset();
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className='mx-auto w-3/5 border mt-20 p-5'>
                <form onSubmit={handleUserLogin}>
                    <div className='p-2 block'>
                        <label className='text-left text-xl '>Your Email</label> <br />
                        <input className='bg-gray-200 w-3/4 h-10 rounded-md'
                            placeholder='your@gmail.com' type='email' name='email'></input>
                    </div>
                    <div className='p-2 block'>
                        <label className='text-left text-xl '>Password</label> <br />
                        <input className='bg-gray-200 w-3/4 h-10 rounded-md'
                            placeholder='your password' type='password' name='password'></input>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <p className='text-start pt-5'>Not an user yet? <Link to='/signup'>Signup</Link></p>
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-500 text-white w-3/4 p-2 font-semibold
                         tracking-wide mt-5 rounded-xl hover:bg-blue-600'>LOGIN</button>
                    </div>
                </form>

            </div >
        </div>
    );
};

export default Login;