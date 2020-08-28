import React from 'react';
import './Product.css'
const Product = (props) => {

    const {title,instructor,price,img} = props.info; //Using destructor to collect the object property
    
    return (
        <div className="product">
            <div>
                <img src={img} style={{width:'200px',marginRight:'30px'}} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{title}</h4>
                <p><small>Instructor: {instructor}</small></p>
                <p>${price}</p>
                <button className="product-btn" onClick={() => props.handleAddProduct(props.info)}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Product;