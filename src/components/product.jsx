import './product.css';


const Product = ({ product, onAddToCart, onRemoveFromCart, isInCart }) => {
    return (
        <div className="card">
            <img src='https://dummyimage.com/450x300/dee2e6/6c757d.jpg' alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-rating">{product.rating}</p>
                <p className="card-text">{product.price}</p>
                {isInCart ? (
                    <button onClick={() => onRemoveFromCart(product.id)} className="btn btn-danger">
                        Remove from Cart
                    </button>
                ) : (
                    <button onClick={() => onAddToCart(product.id)} className="btn btn-primary">
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
};

export default Product;


