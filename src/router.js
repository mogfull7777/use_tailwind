import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Movies from "./pages/Movies";
import MoviesDetail from "./pages/MoviesDetail";

const Router = createBrowserRouter([
    {
        path : "/",
        element : <Movies />
    },
    {
        path : "/movies/:moviesid",
        element : <MoviesDetail />
    }
])

export default Router;