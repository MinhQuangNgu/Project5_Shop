import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Detail from "../foodDetail/Detail";
import Home from "../home/Home";
export const publicRouter = [
    {
        element: Home,
        path: "/",
        defaultLayout: DefaultLayout,
    },
    {
        element: Detail,
        path: "/:slug",
        defaultLayout: DefaultLayout,
    },
];
