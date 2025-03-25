import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import Brands from "./Brands";

export default function Games({ error, data, loading, onGameClick }) {
    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <div className="games">
                {data.map((game) => (
                    <div 
                        className="game" 
                        key={game.id} 
                        onClick={() => onGameClick(game.id, hashStringToNumber(game.name))}
                    >
                        <div className="game-content">
                            <img src={game.background_image} alt={game.name} className="game-bg" />
                            <div className="infos">
                                <div className="cart">
                                    <button className="addToCart">Add to cart +</button>
                                    <h3>{hashStringToNumber(game.name) + " $"}</h3>
                                </div>
                                <div className="save">
                                    <Brands game={game} />
                                    <FontAwesomeIcon icon={faBookmark} />
                                </div>
                                <h2>{game.name}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

function hashStringToNumber(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i) * (i + 1);
    }
    let min = 30, max = 100;
    let result = min + (hash % (max - min)) + (hash / 1000 % 1);
    return result.toFixed(2);
}