import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";

const routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "shop",
        element: <Shop />
    },
]

export default routes;