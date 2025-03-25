import './styles/cart.css';

export default function Cart({ toggleCart }) {
    return (
        <>
            <div className="cart-backdrop" onClick={toggleCart}></div>
            <div className="cart-overlay">
                <button className="close-btn" onClick={toggleCart}>✖</button>
                <h1>My Cart</h1>
                <div className="items">
                    <div className="game-item">
                        <div className="item-img"></div>
                        <div className="item-infos">
                            <h3>Game 1</h3>
                            <h4>$19.99</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
