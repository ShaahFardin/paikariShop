import React from 'react';
import {  } from 'react-router-dom';

const AddProducts = () => {
    const handleAddProducts = e => {
        e.preventDefault();
        const products = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
        }

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    alert("Product added successfully")
                }else{
                    alert(data.error)
                }
            })
            .catch(error => {

            })
        }
        return (
            <div>
                <h1 className='text-5xl'>Add Products</h1>
                <div className='mx-auto w-3/5 border mt-14 p-5'>
                    <form onSubmit={handleAddProducts}>
                        <div className='p-2 block '>
                            <label className='text-left text-xl '>Products Name</label> <br />
                            <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                                placeholder='Products Name' type='name' name='name'></input>
                        </div>
                        <div className='p-2 block'>
                            <label className='text-left text-xl '>Price</label> <br />
                            <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                                placeholder='price' type='text' name='price'></input>
                        </div>
                        <div className='p-2 block'>
                            <label className='text-left text-xl '>Image</label> <br />
                            <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                                placeholder='image url' type='text' name='image'></input>
                        </div>
                        <div>
                            <button type='submit' className='bg-blue-500 text-white w-3/6 
                             p-2 font-semibold tracking-wide mt-5 rounded-xl hover:bg-blue-600'>ADD</button>
                        </div>
                    </form>
                </div >
            </div>
            
        );
    };
export default AddProducts;