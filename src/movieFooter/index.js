import MoviePoster from '../moviePoster';
import './style.css';

export default function MovieFooter() {
    return (
        <footer>
            <MoviePoster height='89' width='64'/>
            <span>
                <p>2067</p>
                <p>Quinta-feira</p>
            </span>
        </footer>
    )
}