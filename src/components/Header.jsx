import './styles/header.css'
import { Search, ShoppingCart} from 'lucide-react';

export default function Header(){
    return (
        <div className="header">
        <img src="/images/golay-01.png" alt="website-logo" className="logo" />
        <div className="searchBar">
          <input type="text" className='search-input'placeholder='Search about a game'/>
          <Search size={25} color={"#FFFFFF"} className='search-icon'/>
        </div>
        <ShoppingCart size={30} color="white"/>
      </div>
    );
}