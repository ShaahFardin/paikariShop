import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

    
    // To get the id which the user are clicking
    const router = useParams();
    const {id} = router;

    const [product, setProduct] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setProduct(data.data)
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error.message))
    }, [refresh, id]);


    const handleAddProducts = e =>{
        e.preventDefault();
        const product ={
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
        }
        fetch(`http://localhost:5000/product/${id}`, {
            method:'PATCH',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                alert(data.message);
                navigate('/products')
            }else{
               alert(data.error);
            }
        })
        .catch(error=>{
            console.log(error.message);
        })
        
    }

    

    return (
        <div>
        <h1 className='text-5xl'>Edit Products</h1>
        <div className='mx-auto w-3/5 border mt-14 p-5'>
            <form onSubmit={handleAddProducts}>
                <div className='p-2 block '>
                    <label className='text-left text-xl '>Products Name</label> <br />
                    <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                        placeholder='Products Name' type='name' name='name' defaultValue={product.name}></input>
                </div>
                <div className='p-2 block'>
                    <label className='text-left text-xl '>Price</label> <br />
                    <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                        placeholder='price' type='text' name='price' 
                        defaultValue={product.price}></input>
                </div>
                <div className='p-2 block'>
                    <label className='text-left text-xl '>Image</label> <br />
                    <input className='bg-gray-200 w-3/6 h-10 rounded-md'
                        placeholder='image url' type='text' name='image' defaultValue={product.price}></input>
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

export default EditProduct;