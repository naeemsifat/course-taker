import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,pd) => total + pd.price,0);//Counting the total price by reduce method
    const formatNumber = num =>{ //A user defined function to show the number to two decimal point
        const precise = num.toFixed(2);
        return Number(precise);
    }
    return (
        <div className="cart-center">
            <h4>Purchase Ordered:{cart.length} </h4>
            <h4>Total Price: ${formatNumber(totalPrice)}</h4>
        </div>
    );
};

export default Cart;