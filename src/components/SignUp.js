import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider/AuthProvider';

const SignUp = () => {

    const { createNewUserManually, setLoading } = useContext(AuthContext);

    const handleManualUserCreation = event => {
        event.preventDefault();
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createNewUserManually(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(false)
                
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='mx-auto w-3/5 border mt-14 p-5'>
            <form onSubmit={handleManualUserCreation}>
                <div className='p-2 block '>
                    <label className='text-left text-xl '>Your Name</label> <br />
                    <input className='bg-gray-200 w-3/4 h-10 rounded-md'
                        placeholder='Full Name' type='name' name='name'></input>
                </div>
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
                    <p className='text-start pt-5'>Already an user? <Link to='/login'>Login</Link></p>
                </div>
                <div>
                    <button type='submit' className='bg-blue-500 text-white w-3/4 p-2 font-semibold
                     tracking-wide mt-5 rounded-xl hover:bg-blue-600'>REGISTER</button>
                </div>
            </form>

        </div >
    );
};

export default SignUp;





// eslint-disable-next-line no-lone-blocks
{/* <form className=''>
            <h1 className='text-3xl text-blue-600 p-5 '>Please SignUp</h1>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-1/2 md:w-1/2 px-3 mb-6 md:mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 
                    text-xs font-bold mb-2" for="grid-first-name">
                        First Name
                    </label>
                    <input class="appearance-none block w-3/4 bg-gray-200
                     text-gray-700 border border-red-500 rounded py-3 px-4 mb-3
                      leading-tight focus:outline-none focus:bg-white"
                       id="grid-first-name" type="text" placeholder="Jane" />
                    <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                </div> 
                <div class="w-full md:w-1/2 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 
                    text-xs font-bold mb-2">
                        Last Name
                    </label>
                    <input class="appearance-none block w-1/2 bg-gray-200
                     text-gray-700 border border-gray-200 rounded py-3 px-4 
                     leading-tight focus:outline-none focus:bg-white
                      focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-3/4 px-3">
                    <label class="block uppercase tracking-wide
                     text-gray-700 text-xs font-bold mb-2" for="grid-password">
                        Email
                    </label>
                    <input class="appearance-none block w-full bg-gray-200
                     text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
                     leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-password" type="password" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
                <div class="w-3/4 px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs 
                    font-bold mb-2" for="grid-password">
                        Password
                    </label>
                    <input class="appearance-none block w-full bg-gray-200 text-gray-700 border
                     border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none
                      focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                </div>
            </div>
            
        </form> */}