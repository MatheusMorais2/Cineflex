import MoviePoster from '../moviePoster';
import './style.css';

export default function MovieFooter({poster, movie, session, day}) {
    return (
        <footer>
            <MoviePoster img={poster} height='89' width='64'/>
            <span>
                <p>{movie}</p>
                {day ? <p>{`${day} - ${session}`}</p> : ''}
            </span>
        </footer>
    )
}