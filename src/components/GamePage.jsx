import { useEffect, useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './styles/gamePage.css'

export default function GamePage({gameID}) {

    const [game, setGame] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(( ) => {
        fetch(`https://api.rawg.io/api/games/${gameID}?key=c81c9ad475874d0694d4bd9a64b5bb6a`, {mode: 'cors'})
            .then((response) => { 
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json()
            })
            .then((response) => {
                console.log("the data of the game ", response)
                setGame(response)
                setLoading(false)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, [gameID])

    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;
        
    let image = game.background_image

    return(
        <>
            <div className="game-page">
            <Header />
                <img src={image} alt="" />
                <div className="blur-layer"></div>
                <div className="faded"></div>
                <div className="content-container">
                    <div className="content">
                        <img src={image} alt="" />
                        <div className="horizontall-fade">
                            <div className="game-infos">
                                <h1 className='game-title'>{game.name}</h1>
                                <p className='game-discribtion'>{ getFirstParagraph(game.description_raw) }</p>
                                <div className="game-rating">
                                    <FontAwesomeIcon icon={faStar} color='yellow' size='2x'/>
                                    <div className='rating'>
                                        <h3>Rating</h3>
                                        <h2>{game.rating}/5</h2>
                                    </div>
                                </div>
                                <div className="add-to">
                                    <button className='wish'>add to wish list</button>
                                    <button className='cart-btn'>add to cart</button>
                                </div>
                            </div>
                            <div className="gameplay-shots"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function getFirstParagraph(text) {
    return text.split("\n")[0];
  }