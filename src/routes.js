import DefaultLayout from "./layouts/Default";

import HomePage from "./components/HomePage";
import SearchPage from './components/SearchPage';

const routes = [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: HomePage,
        alias : "Home"
    },
    {
        path: "/search/:query",
        exact: true,
        layout: DefaultLayout,
        component: SearchPage,
        alias : "Search",
    }
];

export default routes;
