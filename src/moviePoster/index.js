import './style.css';
import { Link } from 'react-router-dom';

export default function MoviePoster ({idMovie, title, img, height, width}) {

    return (
        <Link to={'/sessoes/'+idMovie}>
            <div className='movie-poster' style={{height: `${height}px`, width: `${width}px`}}>
                <img src={img} alt={title}></img>
            </div>
        </Link>
    );
}