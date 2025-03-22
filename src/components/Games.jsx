import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faXbox, faPlaystation,faApple, faAndroid, } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Games({ loading, setLoading, pageNumber, maxPageNumber, setMaxPageNumber , url}) {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${url}&page=${pageNumber}`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                console.log("Fetched page", response);
                setMaxPageNumber(Math.ceil(response.count/20))
                console.log("this is th max", maxPageNumber)
                setData(response.results);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [pageNumber, maxPageNumber, url]);

    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;

    return (
        <>
            <div className="games">
                {data.map((game) => (
                    <div className="game" key={game.id}>
                        <div className="game-content">
                            <img src={game.background_image} alt={game.name} className="game-bg" />
                            <div className="infos">
                                <div className="cart">
                                    <button className="addToCart">Add to cart +</button>
                                    <h3>{hashStringToNumber(game.name) + " $"}</h3>
                                </div>
                                <div className="save">
                                    <div className="brands">
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'pc'
                                        ) && <FontAwesomeIcon icon={faWindows} />}
                                        
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'playstation'
                                        ) && <FontAwesomeIcon icon={faPlaystation} />}
                                        
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'xbox'
                                        ) && <FontAwesomeIcon icon={faXbox} />}
                                        
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'ios' || platform.platform.slug === 'mac'
                                        ) && <FontAwesomeIcon icon={faApple} />}
                                        
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'android'
                                        ) && <FontAwesomeIcon icon={faAndroid} />}
                                        
                                        {game.parent_platforms && game.parent_platforms.some(platform => 
                                            platform.platform.slug === 'nintendo'
                                        ) && <FontAwesomeIcon icon={faGamepad} />}
                                    </div>
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
