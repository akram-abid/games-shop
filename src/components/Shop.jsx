import './styles/shop.css'
import { useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import Games from './Games';
import { categories, genres } from '../data/data';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function Shop(){
    const { categorie } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [title, setTitle] = useState(() => {
        const locationState = location.state?.shopState?.title;
        const storedTitle = localStorage.getItem('shopTitle');
        return locationState || storedTitle || "All Games";
    });

    const [pageNumber, setPageNumber] = useState(() => {
        const locationState = location.state?.shopState?.pageNumber;
        const storedPageNumber = localStorage.getItem('shopPageNumber');
        return locationState || parseInt(storedPageNumber) || 1;
    });

    const [maxPageNumber, setMaxPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    
    const [url, setUrl] = useState(() => {
        const locationState = location.state?.shopState?.url;
        const storedUrl = localStorage.getItem('shopUrl');
        
        if (locationState) return locationState;
        if (storedUrl) return storedUrl;

        if (categorie) {
            const categoryObj = getCategoryByName(categorie);
            if (categoryObj) {
                return categoryObj.url;
            }
        }
        return "https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a";
    });
    
    useEffect(() => {
        localStorage.setItem('shopTitle', title);
        localStorage.setItem('shopPageNumber', pageNumber.toString());
        localStorage.setItem('shopUrl', url);
    
        const urlSafeTitle = title.toLowerCase().replace(/\s+/g, '-');
        navigate(`/shop/${urlSafeTitle}`, { replace: true });
    
        const clearStorage = () => localStorage.removeItem('shopPageNumber');
        window.addEventListener("beforeunload", clearStorage);
    
        return () => {
            window.removeEventListener("beforeunload", clearStorage);
        };
    }, [title, pageNumber, url, navigate]);

    useEffect(() => {
        const storedPageNumber = localStorage.getItem('shopPageNumber');
        if (storedPageNumber) {
            setPageNumber(parseInt(storedPageNumber));
        }
    }, []);
    
    
    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        
        fetch(`${url}&page=${pageNumber}`, { mode: "cors" })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((response) => {
                if (isMounted) {
                    setMaxPageNumber(Math.ceil(response.count/20));
                    setData(response.results);
                }
            })
            .catch((error) => {
                if (isMounted) {
                    setError(error);
                }
            })
            .finally(() => {
                if (isMounted) {
                    setLoading(false);
                }
            });
            
        return () => {
            isMounted = false;
        };
    }, [pageNumber, url]);

    const navigateToGame = (gameId, price) => {
        navigate(`/game/${gameId}`, { 
            state: { 
                shopState: { 
                    title, 
                    pageNumber, 
                    url,
                    price 
                } 
            } 
        });
    };

    const handleNextPage = () => {
        setPageNumber((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const updateShopContent = (newTitle, newUrl) => {
        setTitle(newTitle);
        setUrl(newUrl);
        setPageNumber(1);
    };

    if (error) return <p>A network error was encountered</p>;

    return( 
        <>
            {/* <Header /> */}
            <div className="shop-content">
                <div className="nav-bar">
                    <div className="categs-section">
                        { categories.map( value => { return (
                            <div 
                                className="categ" key={value.name} onClick={ () => updateShopContent(value.name, value.url) }>
                                <FontAwesomeIcon icon={value.icon} size='2x'/>
                                <h2>{ value.name }</h2>
                            </div>
                        )}) }
                    </div>
                    <div className="genres-section">
                        <h3>Genres</h3>
                        <div className="genres">
                            {genres.map((value) => {
                                return(
                                <div 
                                    className="gener" 
                                    key={value.name} 
                                    onClick={ () => updateShopContent(value.name, value.url) }
                                >
                                    <FontAwesomeIcon icon={value.icon} size='2x'/>
                                    <h2>{ value.name }</h2>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="games-layout">
                    {loading ? (
                        <div className="spinner"></div>
                    ) : (
                        <>
                            <h1>{title}</h1>
                            <Games 
                                url={url} 
                                loading={loading} 
                                maxPageNumber={maxPageNumber} 
                                pageNumber={pageNumber} 
                                setLoading={setLoading} 
                                setMaxPageNumber={setMaxPageNumber} 
                                data={data} 
                                error={error} 
                                onGameClick={navigateToGame}
                                onAddToCartClick={addItemToCart}
                                onRemoveFromCart={onRemoveFromCart}
                            />
                            <div className="page">
                                <button onClick={handlePrevPage} disabled={pageNumber === 1} >
                                    <FontAwesomeIcon icon={faLeftLong} />
                                </button>
                                <h3>{pageNumber} / {maxPageNumber}</h3>
                                <button onClick={handleNextPage} disabled={pageNumber === maxPageNumber}>
                                    <FontAwesomeIcon icon={faRightLong} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

function getCategoryByName(name) {
    return [...categories, ...genres].find(category => 
        category.name.toLowerCase().replace(/\s+/g, '-') === name
    );
}

export const addItemToCart = (id, name, price, imageUrl) => {
    console.log("trying to read this ", JSON.parse(localStorage.getItem("cart3")));

    let oldArray = JSON.parse(localStorage.getItem("cart3")) || [];

    const exists = oldArray.some(item => item.id === id);

    if (exists) {
        console.log("Item already exists, doing nothing.");
        return;
    }

    oldArray.push({ id, name, price, image: imageUrl });

    localStorage.setItem("cart3", JSON.stringify(oldArray));

    console.log("after editing ", JSON.parse(localStorage.getItem("cart3")));
};

export const onRemoveFromCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cart3")) || [];

    // Filter out the item with the given ID
    const updatedCart = cartItems.filter(item => item.id !== id);

    // Update localStorage
    localStorage.setItem("cart3", JSON.stringify(updatedCart));

    console.log("after removing item", JSON.parse(localStorage.getItem("cart3")));
};

