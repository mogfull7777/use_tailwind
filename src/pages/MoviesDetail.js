import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const MoviesDetail = () => {

    const {moviesid} = useParams();

    const [movies, setMovies] = useState({});

    const getMoviesInfo = async () => {

        const address = `https://api.themoviedb.org/3/movie/${moviesid}?api_key=082f2526d129a66e53e595b94fce8985`;

        try {

            const res = await axios.get(address);

            setMovies(res.data)

        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        getMoviesInfo()
    }, [])

    return (
        <div>
            <h1>{movies.original_title}</h1>
            <h2>{movies.overview}</h2>
        </div>
    );
};

export default MoviesDetail;