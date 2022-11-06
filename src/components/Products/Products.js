import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Products = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [refresh, setRefresh] = useState(false)
    
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setProducts(data.data)
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error.message))
    }, [refresh])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: "DELETE",

        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("successfully deleted");
                    setRefresh(!refresh)
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error.message))
    }

    const handleUpdate = (id) => {
        navigate(`/product/edit/${id}`)
    }

    return (
        <div>
            <h1 className='text-5xl'>Products : {products.length}</h1>
            {
                products.map(product =>
                    <p key={product._id} className='border m-5 w-3/12 mx-auto'>
                        <>{product?.name}</>
                        <button onClick={() => handleDelete(product._id)} className='bg-red-500 p-2 ml-2'>Delete</button>
                        <button onClick={() => handleUpdate(product._id)} className='bg-green-500 p-2 ml-2'>update</button>
                    </p>)
            }

        </div>
    );
};

export default Products;