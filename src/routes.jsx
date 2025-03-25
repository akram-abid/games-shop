import App from "./App";
import Shop from "./components/Shop";
import GamePage from "./components/GamePage";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "shop",
        element: <Shop />
    },
    {
        path: "shop/:categorie",
        element: <Shop />
    },
    {
        path: "game/:gameID",
        element: <GamePage />
    }
]

export default routes;