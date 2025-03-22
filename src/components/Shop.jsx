import Header from './Header';
import './styles/shop.css'
import { useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong,} from "@fortawesome/free-solid-svg-icons";
import Games from './Games';
import { categories, genres } from '../data/data';


export default function Shop(){

    const [title, setTitle] = useState("All Games");
    const [pageNumber, setPageNumber] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const[url , setUrl] = useState (`https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&page=${pageNumber}`)

    const handleNextPage = () => {
        setLoading(true)
        setPageNumber((prev) => prev + 1);
    };

    const handlePrevPage = () => {
        setLoading(true)
        setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return( 
        <>
            { <Header /> }
            <div className="shop-content">
                <div className="nav-bar">
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
                <div className="games-layout">
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
                    <h1>{title}</h1>
                    <Games url={url} loading={loading} maxPageNumber={maxPageNumber} pageNumber={pageNumber} setLoading={setLoading} setMaxPageNumber={setMaxPageNumber} />
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