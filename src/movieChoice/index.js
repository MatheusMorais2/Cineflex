import './style.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MoviePoster from '../moviePoster';


export default function MovieChoice() {

    const [movies, setMovies] = useState(null);

    useEffect( () => {
        const requisition = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        requisition.then( response => setMovies(response.data) );
    }, []);


    return (
        <>
            <div id='choose-movie'> Selecione o filme </div>
            <div id='container-movies'>
                {movies 
                    ? movies.map(elem => <MoviePoster idMovie={elem.id} key={elem.id} title={elem.title} img={elem.posterURL} height='209' width='145'/>)
                    : ''}
            </div>
        </>
    )
}