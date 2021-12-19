import './style.css';
import Session from '../session';

export default function Time(props) {
    const { day, sessions, weekday } = props;
    return (
        <>
            <p className="session-day">
                {day}
            </p>
            <span className="sessions">
                {sessions.map(elem => <Session key={elem.id} id={elem.id} name={elem.name}/>)}
            </span>
            
        </>
    )
}