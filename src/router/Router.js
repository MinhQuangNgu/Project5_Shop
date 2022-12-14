import DefaultLayout from "../components/defaultLayout/DefaultLayout";
import Home from "../home/Home";
export const publicRouter = [
    {
        element: Home,
        path: "/",
        defaultLayout: DefaultLayout,
    },
];
