import React from 'react';
import './Orders.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link, useNavigate } from 'react-router-dom';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    let navigate = useNavigate();

    const handleRemoveProduct = product => {
        const productId = product.id;
        const rest = cart.filter(product => product.id !== productId);
        setCart(rest);
        removeFromDb(productId);
    }

    return (
        <div className="shop-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}>
                    </ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>proceed shipment</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;