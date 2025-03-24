import './styles/shop.css'
import Header from './Header';
import { useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong,} from "@fortawesome/free-solid-svg-icons";
import Games from './Games';
import { categories, genres } from '../data/data';
import GamePage from './GamePage';

export default function Shop(){

    const [title, setTitle] = useState("All Games");
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const[url , setUrl] = useState (`https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&page=${pageNumber}`)
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
                console.log("the original data is ", response)
                setMaxPageNumber(Math.ceil(response.count/20))
                setData(response.results);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [pageNumber, maxPageNumber, url] );


    const handleNextPage = () => {
        setLoading(true)
        setPageNumber((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        setLoading(true)
        setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
    };

    if (loading) return <div className="spinner"></div>;
    if (error) return <p>A network error was encountered</p>;

    // return(
    //     <GamePage gameID={data[16].id} gameScreenShots={data[16].short_screenshots}/>
    // );

    return( 
        <>
            { <Header /> }
            <div className="shop-content">
                <div className="nav-bar">
                    <div className="categs-section">
                        { categories.map( value => { return (
                            <div className="categ" key={value.name} onClick={ () => {
                                setLoading(true)
                                setPageNumber(1)
                                setTitle(value.name)
                                setUrl(`${value.url}`)
                                } }>
                                <FontAwesomeIcon icon={value.icon} size='2x'/>
                                <h2>{ value.name }</h2>
                            </div>
                        )}) }
                    </div>
                    <div className="genres-section">
                        <h3>Genrs</h3>
                        <div className="genres">
                            {genres.map((value) => {
                                return(
                                <div className="gener" key={value.name} onClick={ () => {
                                    setLoading(true)
                                    setUrl(`${value.url}`)
                                    setTitle(value.name)
                                    setPageNumber(1)
                                    } }>
                                    <FontAwesomeIcon icon={value.icon} size='2x'/>
                                    <h2>{ value.name }</h2>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="games-layout">
                    <h1>{title}</h1>
                    <Games url={url} loading={loading} maxPageNumber={maxPageNumber} pageNumber={pageNumber} setLoading={setLoading} setMaxPageNumber={setMaxPageNumber} data={data} error={error} />
                    <div className="page">
                        <button onClick={handlePrevPage} disabled={pageNumber === 1} >
                            <FontAwesomeIcon icon={faLeftLong} />
                        </button>
                        <h3>{pageNumber} / {maxPageNumber}</h3>
                        <button onClick={handleNextPage}>
                            <FontAwesomeIcon icon={faRightLong} disabled={pageNumber === maxPageNumber} />
                        </button>
                     </div>
                </div>
            </div>
        </>
    );
}