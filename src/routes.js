import DefaultLayout from "./layouts/Default";

import HomePage from "./components/HomePage";

const routes = [
    {
        path: "/",
        exact: true,
        layout: DefaultLayout,
        component: HomePage,
        alias : "Home"
    },
];

export default routes;
