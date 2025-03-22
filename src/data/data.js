import {
    faChartSimple,
    faFire,
    faStar,
    faFlagCheckered,
    faMeteor,
    faGlobe,
    faHandFist,
    faPuzzlePiece,
    faGamepad,
    faSmile,
    faUsers,
    faBookOpen,
    faChessBoard,
    faBolt,
    faHatWizard,
    faDragon,
    faCrosshairs,
    faCar,
    faFutbol,
    faChess,
    faGhost,
    faHeart,
    faHouseUser
} from "@fortawesome/free-solid-svg-icons";

export const categories = [
    {
        name: "All Games",
        icon: faGlobe,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a`,
    },
    {
        name: "Most Popular",
        icon: faChartSimple,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a`,
    },
    {
        name: "Trending",
        icon: faFire,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&orderinghttps://api.rawg.io/api/games/lists/main?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-relevance`,
    },
    {
        name: "Top Rated",
        icon: faStar,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-rating`,
    },
    {
        name: "Recently Released",
        icon: faFlagCheckered,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&ordering=-released`,
    },
    {
        name: "Upcoming Games",
        icon: faMeteor,
        url: `https://api.rawg.io/api/games?key=c81c9ad475874d0694d4bd9a64b5bb6a&dates=2024-12-30,2025-12-31&ordering=-added`,
    },
];

const API_KEY = "c81c9ad475874d0694d4bd9a64b5bb6a";

export const genres = [
    { name: "Action", icon: faBolt, url: `https://api.rawg.io/api/games?genres=action&key=${API_KEY}` },
    { name: "Adventure", icon: faHatWizard, url: `https://api.rawg.io/api/games?genres=adventure&key=${API_KEY}` },
    { name: "RPG", icon: faDragon, url: `https://api.rawg.io/api/games?genres=rpg&key=${API_KEY}` },
    { name: "Shooter", icon: faCrosshairs, url: `https://api.rawg.io/api/games?genres=shooter&key=${API_KEY}` },
    { name: "Puzzle", icon: faPuzzlePiece, url: `https://api.rawg.io/api/games?genres=puzzle&key=${API_KEY}` },
    { name: "Platformer", icon: faGamepad, url: `https://api.rawg.io/api/games?genres=platformer&key=${API_KEY}` },
    { name: "Racing", icon: faCar, url: `https://api.rawg.io/api/games?genres=racing&key=${API_KEY}` },
    { name: "Sports", icon: faFutbol, url: `https://api.rawg.io/api/games?genres=sports&key=${API_KEY}` },
    { name: "Fighting", icon: faHandFist, url: `https://api.rawg.io/api/games?genres=fighting&key=${API_KEY}` },
    { name: "Strategy", icon: faChess, url: `https://api.rawg.io/api/games?genres=strategy&key=${API_KEY}` },
    { name: "Arcade", icon: faGhost, url: `https://api.rawg.io/api/games?genres=arcade&key=${API_KEY}` },
    { name: "Casual", icon: faSmile, url: `https://api.rawg.io/api/games?genres=casual&key=${API_KEY}` },
    { name: "Multiplayer", icon: faUsers, url: `https://api.rawg.io/api/games?genres=multiplayer&key=${API_KEY}` },
    { name: "Educational", icon: faBookOpen, url: `https://api.rawg.io/api/games?genres=educational&key=${API_KEY}` },
    { name: "Card", icon: faHeart, url: `https://api.rawg.io/api/games?genres=card&key=${API_KEY}` },
    { name: "Board Games", icon: faChessBoard, url: `https://api.rawg.io/api/games?genres=board-games&key=${API_KEY}` },
    { name: "Family", icon: faHouseUser, url: `https://api.rawg.io/api/games?genres=family&key=${API_KEY}` }
];