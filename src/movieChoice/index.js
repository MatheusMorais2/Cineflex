import './style.css';
import MoviePoster from '../moviePoster';

export default function MovieChoice() {
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