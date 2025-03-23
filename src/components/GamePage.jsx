import { useEffect, useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import './styles/gamePage.css'
import Brands from './Brands';

export default function GamePage({gameID, gameScreenShots}) {
        
    const [imageURL, setImageURL] = useState("")
    const [game, setGame] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [contentVisible, setContentVisible] = useState(true)

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
                setImageURL(response.background_image)
                console.log("i wil set this image ", imageURL, response.background_image)
                setGame(response)
                setLoading(false)
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, [gameID])

    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;
        
    const onShotClick = (imageUrl) => {
        const mainImage = document.querySelector('.content > img');
        
        if (imageURL !== imageUrl) {
            mainImage.classList.add('image-changing');
            
            setTimeout(() => {
                setImageURL(imageUrl);
                
                const tempImg = new Image();
                tempImg.src = imageUrl;
                
                tempImg.onload = () => {
                    setTimeout(() => {
                        mainImage.classList.remove('image-changing');
                    }, 50);
                };
                
                setTimeout(() => {
                    mainImage.classList.remove('image-changing');
                }, 100);
            }, 400);
        }
    };

    const toggleContentVisibility = () => {
        setContentVisible(!contentVisible);
    };

    return(
        <>
            <div className="game-page">
                <Header />
                <img src={imageURL} alt="" />
                <div className="blur-layer"></div>
                <div className="faded"></div>
                <div className="content-container">
                    <div className="content">
                        <img src={imageURL} alt="" />
                        <div className="horizontall-fade">
                            <div className={`game-infos ${contentVisible ? 'visible' : 'hidden'}`}>
                                <div className='genres-tags'>
                                    {game.genres.map((value) => {
                                        return(
                                            <h4 key={value.name}>{value.name}</h4>
                                        );
                                    })}
                                </div>
                                <h1 className='game-title'>{game.name}</h1>
                                <Brands game={game}/>
                                <p className='game-discribtion'>{ getFirstParagraph(game.description_raw) }</p>
                                <div className="game-rating">
                                    <FontAwesomeIcon icon={faStar} color='yellow' size='2x'/>
                                    <div className='rating'>
                                        <h3>Rating</h3>
                                        <h2>{game.rating} /5</h2>
                                    </div>
                                </div>
                                <div className="add-to">
                                    <button className='wish'>Add to wish list</button>
                                    <button className='cart-btn'>Add to cart</button>
                                </div>
                            </div>
                            <div className="gameplay-shots">
                                <div className="shots-header">
                                    <h2>Gameplay Shots</h2>
                                    <button 
                                        className={`visibility-toggle ${!contentVisible ? 'active' : ''}`} 
                                        onClick={toggleContentVisibility}
                                    >
                                        <FontAwesomeIcon 
                                            icon={contentVisible ? faEye : faEyeSlash} 
                                            color={contentVisible ? 'white' : '#ff002bd3'} 
                                            size='lg'
                                        />
                                    </button>
                                </div>
                                <div className={`shots ${contentVisible ? 'visible' : 'hidden'}`}>
                                    {gameScreenShots.map((value) => {
                                        return(
                                            <div className="shot" key={value.id} onClick={() => onShotClick(value.image)}>
                                                <img src={value.image} alt="shot" />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
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