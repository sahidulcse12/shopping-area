import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveToProduct = () => { }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}>
                        handleRemoveToProduct={handleRemoveToProduct}
                    </ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;