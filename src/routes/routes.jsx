import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <p>not found</p>,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
])