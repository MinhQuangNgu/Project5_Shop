import Login from "../auth/Login";
import Cart from "../cart/Cart";
import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Detail from "../foodDetail/Detail";
import Home from "../home/Home";
import Searching from "../searching/Searching";
export const publicRouter = [
    {
        element: Home,
        path: "/",
        defaultLayout: DefaultLayout,
    },
    {
        element: Cart,
        path: "/cart",
        defaultLayout: DefaultLayout,
    },
    {
        element: Searching,
        path: "/tim-kiem",
        defaultLayout: DefaultLayout,
    },
    {
        element: Login,
        path: "/login",
    },
    {
        element: Detail,
        path: "/:slug",
        defaultLayout: DefaultLayout,
    },
];
