import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Movies = () => {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        const address = "https://api.themoviedb.org/3/discover/movie?api_key=082f2526d129a66e53e595b94fce8985&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"

        try {

            const {data} = await axios.get(address);

            setMovies(data.results);

        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getMovies()
    }, [])

    return (





        <div class="grid gap-4 grid-cols-3">
            {movies && movies.map(m => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg py-5 m-8 mt-2">
                    <img className="w-full" src="https://marketplace.canva.com/EAFH3gODxw4/1/0/1131w/canva-black-%26-white-modern-mystery-forest-movie-poster-rLty9dwhGG4.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{m.title}</div>
                        <p className="text-gray-700 text-base">
                            {m.overview}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                    </div>

                </div>
            ))}





            {/*{movies && movies.map(m => (*/}
            {/*    <div className="max-w-sm rounded overflow-hidden shadow-lg">*/}
            {/*        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">*/}
            {/*            <div className="px-6 py-4">*/}
            {/*                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>*/}
            {/*                <p className="text-gray-700 text-base">*/}
            {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!*/}
            {/*                    Maiores et perferendis eaque, exercitationem praesentium nihil.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <div className="px-6 pt-4 pb-2">*/}
            {/*                <span*/}
            {/*                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>*/}
            {/*                <span*/}
            {/*                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>*/}
            {/*                <span*/}
            {/*                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>*/}
            {/*            </div>*/}
            {/*    </div>*/}
            {/*))}*/}

        </div>


);
};

export default Movies;