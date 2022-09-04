import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(p => p.id === selectedProduct.id);
        //console.log(exists);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(c => c.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Products key={product.id} product={product} handleAddToCart={handleAddToCart} ></Products>)
                }
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