import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Books from "../pages/Books";
import Dashboard from "../pages/Dashboard";
import BookDetails from "../components/BookDetails";
import ListedBook from "../pages/ListedBook"
const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <p>not found</p>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/listedBook",
                element: <ListedBook />
            },
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/book/:bookId",
                element: <BookDetails />,
                loader: () => fetch("../booksData.json")
            }
        ]
    }
])

export default routes