import React, { useState } from 'react';
import './BuyCourse.css'
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const BuyCourse = () => {
    const data = fakeData
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product)=>{ //Add handler function

        if(product.doubleCheck === 0) //Check if the course is re enrolled
        {
            const newCart = [...cart, product];
            setCart(newCart);
            product.doubleCheck = 1;
        }
        else
        {
            alert('This course is already enrolled') //Show alert message if we try to enroll in a already enrolled course
        }
    }
    
    return (
        <div className="course-container">
            <div className="product-container">
                {
                    products.map((product,x) => <Product //Passing props to the Product component
                    handleAddProduct={handleAddProduct}
                    info={product} key={x}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart> 
            </div>
        </div>
    );
};

export default BuyCourse;