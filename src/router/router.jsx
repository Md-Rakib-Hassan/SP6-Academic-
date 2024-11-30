import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../pages/Layout";
import Users from "../pages/Users";
import Srs from "../pages/Srs";
import Update from "../pages/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <App></App>,
            },
            {
                path: "/all-users",
                element: <Users></Users>,
            },
            {
                path: "/srs",
                element: <Srs></Srs>,
            },
            {
                path: "/login",
                element:<Login></Login>
            },
            {
                path: "/update",
                element:<Update></Update>
            },
            {
                path: "/signup",
                element:<Signup></Signup>
            }
        ]
    },
    

]);

    export default router;