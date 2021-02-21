import DefaultLayout from "./layouts/Default";

import HomePage from "./components/HomePage";
import SearchPage from './components/SearchPage';
import BookPage from './components/BookPage';

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
    },
    {
        path: "/books/:book",
        exact: true,
        layout: DefaultLayout,
        component: BookPage,
        alias : "Book",
    }
];

export default routes;
