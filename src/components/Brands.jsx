import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindows, faXbox, faPlaystation,faApple, faAndroid, } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faGamepad } from "@fortawesome/free-solid-svg-icons";


export default function Brands ({game}){
    return (
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
    );
}