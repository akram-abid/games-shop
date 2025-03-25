import React from 'react';
import './styles/IntroMain.css'
import Header from './Header';
import { ShoppingCart } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { categories } from '../data/data';

export default function IntroMain() {
    const navigate = useNavigate();

    const handleCategoryNavigation = (categoryName) => {
        navigate(`/shop/${categoryName}`, { 
            state: { 
                shopState: { 
                    title: categoryName,
                    url: getCategoryUrl(categoryName)
                } 
            } 
        });
    };

    // Helper function to get URL for a specific category
    const getCategoryUrl = (categoryName) => {
        const category = categories.find(cat => cat.name === categoryName);
        return category ? category.url : "https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a";
    };

    return(
        <>
          {/* <Header /> */}
          <div className="mainBody">
            <div className="mainContent">
              <div className="intro">
                  <div className="intro-title">
                    <div className='heading'>
                      <h1>Golay Store</h1>
                      <img src="/images/without_text.png" alt="website-logo" className="logo" />
                    </div>
                    <p>It's just a personal project. The games cannot be bought and the prices are fake, generated to imitate a real shop.</p>
                    <h2>Enjoy the virtual shopping 😉</h2>
                    <Link className='shop' to="shop">
                      <ShoppingCart size={30} color="white"/>
                      <h2>Shop Now</h2>
                    </Link>
                  </div>  
                  <div className="contact">
                    <a className='contactTag' href='https://github.com/akram-abid'>
                      <p>akram-abid</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                      </svg>
                    </a>
                    <a className='contactTag' href='https://github.com/Suryakumar-Selvakumar'>
                      <p>design from ssuryakumar</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-github">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
                      </svg>
                    </a>
                  </div>
              </div>
            </div>
            <div className="fastNavigation">
              <h2>Navigation shortcut</h2>
              {categories.map((value) => (
                <div 
                  key={value.name} 
                  className="categorie" 
                  onClick={() => handleCategoryNavigation(value.name)}
                >
                  <FontAwesomeIcon icon={value.icon} size='2x' />
                  <h2>{ value.name }</h2>
                </div>
              ))}
            </div>
          </div>
        </>
    );
}