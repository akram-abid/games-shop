import { faChartSimple, faFire, faStar, faFlagCheckered, faMeteor, faGlobe} from "@fortawesome/free-solid-svg-icons";


export const categories = [
    { name: "All Games", icon: faGlobe , url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a`},
    { name: "Most Popular", icon: faChartSimple, url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a`},
    { name: "Trending", icon: faFire, url :`https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&orderinghttps://api.rawg.io/api/games/lists/main?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-relevance`}, 
    { name: "Top Rated", icon: faStar, url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-rating`}, 
    { name: "Recently Released", icon: faFlagCheckered , url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-released`},
    { name: "Upcoming Games", icon: faMeteor, url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-added&dates=2024-03-21,2025-12-31`},
]