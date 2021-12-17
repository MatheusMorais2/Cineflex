import './style.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Link to='/'>
            <div id='logo'>
                CINEFLEX
            </div>
        </Link>

        
    )
}