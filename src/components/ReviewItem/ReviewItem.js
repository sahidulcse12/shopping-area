import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReviewItem = (props) => {
    const { product, handleRemoveToProduct } = props;
    const { name, img, seller, ratings, price, quantity } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>{name}</h5>
            <div className='product-info'>
                <p>Price: ${price}</p>
                <p>Rating: {ratings}</p>
                <p>Quantity: {quantity}</p>
                <p>Seller: {seller}</p>
            </div>
            <button onClick={() => handleRemoveToProduct()} className='btn-cart'>
                <p className='btn-text'>Delete</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default ReviewItem;