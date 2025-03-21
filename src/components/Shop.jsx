import Header from './Header';
import './styles/shop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faFire, faStar, faFlagCheckered, faMeteor} from "@fortawesome/free-solid-svg-icons";
import Games from './Games';


export default function Shop(){
    return( 
        <>
            { <Header /> }
            <div className="shop-content">
                <div className="nav-bar">
                <div className="categ">
                  <FontAwesomeIcon icon={faChartSimple} size='2x' />
                    <h2>Most Popular</h2>
                  </div>
                  <div className="categ">
                      <FontAwesomeIcon icon={faFire} size='2x' />
                      <h2>Trending</h2>
                  </div>
                  <div className="categ">
                  <FontAwesomeIcon icon={faStar} size='2x' />
                      <h2>Top Rated</h2>
                  </div>
                  <div className="categ">
                  <FontAwesomeIcon icon={faFlagCheckered} size='2x' />
                      <h2>Recently Released</h2>
                  </div>
                  <div className="categ">
                      <FontAwesomeIcon icon={faMeteor} size='2x' />
                      <h2>Upcoming Games</h2>
                  </div>
                </div>
                <div className="games-layout">
                    <Games />
                </div>
                
            </div>
        </>
    );
}