import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
        total = total + product.price * quantity;
        shipping = shipping + product.shipping;
    }

    let tax = (total * .1).toFixed(2);
    const gTotal = total + parseFloat(tax);

    return (
        <div className='cart-container'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Grand Total: {gTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;