import './styles/cart.css';

export default function Cart({ toggleCart }) {
    // Retrieve cart items safely
    let cartItems = JSON.parse(localStorage.getItem("cart3")) || [];

    
    const removeFromCart = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        localStorage.setItem("cart3", JSON.stringify(updatedCart));
        
        window.location.reload();
    };

    console.log("just see this ", Array.isArray(cartItems));

    return (
        <>
            <div className="cart-backdrop" onClick={toggleCart}></div>
            <div className="cart-overlay">
                <button className="close-btn" onClick={toggleCart}>✖</button>
                <h1>My Cart</h1>
                <div className="items">
                    {cartItems.map((value, index) => (
                        <div className="game-item" key={index}>
                            <div className="item-img">
                                <img src={value.image} alt={value.name} />
                            </div>
                            <div className="item-infos">
                                <h3>{value.name}</h3>
                                <h4>${value.price}</h4>
                            </div>
                            <button className="remove-btn" onClick={() => removeFromCart(value.id)}>
                                remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
