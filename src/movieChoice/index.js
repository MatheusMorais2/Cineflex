import './style.css';
import axios from 'axios';
import { useEffect } from 'react';
import MoviePoster from '../moviePoster';


export default function MovieChoice() {
    const [movies, setMovies] = useEffect(null);
    useEffect( () => {
        const requisition = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        requisition.then( response => setMovies(response.data));
        requisition.catch( alert('Deu merda mane'));
    }, [setMovies]);
    console.log(movies);

    return (
        <>
            <div id='choose-movie'> Selecione o filme </div>
            <div id='container-movies'>
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
                <MoviePoster height='209' width='145' />
            </div>
        </>
    )
}