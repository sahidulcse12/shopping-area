import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [pagesCount, setPagesCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPagesCount(pages);
            })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(p => p._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(c => c._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}>
                    </Products>)
                }
                <div className="pagination">
                    {
                        [...Array(pagesCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="9" selected>9</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="card-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>
                            review order
                        </button>
                    </Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;