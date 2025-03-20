import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faXbox, faPlaystation} from '@fortawesome/free-brands-svg-icons';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Games( ) {

    const [title, setTitle] = useState("Most Popular");
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&page_size=50&platforms=1", { mode: "cors" })
          .then((response) => {
            if (response.status >= 400) {
              throw new Error("server error");
            }
            return response.json();
          })
          .then((response) =>{ 
            console.log("hi there", response)
            setData(response.results)
            })
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
      }, []);
    
    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;

    return(
        <>
            <h1>{title}</h1>
            <div className="games">
                { data.map((value) => {
                    return(
                        <div className="game" key={value.id}>
                            <div className="game-content">
                                <img src={value.background_image} alt={value.name} className="game-bg"/>
                                <div className="infos">
                                    <div className="cart">
                                        <button className="addToCart">Add to cart +</button>
                                        <h3>{ hashStringToNumber(value.name) + " $"}</h3>
                                    </div>
                                    <div className="save">
                                        <div className="brands">
                                            <FontAwesomeIcon icon={faWindows} />
                                            <FontAwesomeIcon icon={faPlaystation} />
                                            <FontAwesomeIcon icon={faXbox} />
                                        </div>
                                        <FontAwesomeIcon icon={faBookmark}/>
                                    </div>
                                    <h2>{value.name}</h2>
                                </div>
                            </div>
                        </div>
                    );
                })}
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
    let result = min + (hash % (max - min)) + (hash / 1000 % 1); // Adds a decimal part

    return result.toFixed(2);
}