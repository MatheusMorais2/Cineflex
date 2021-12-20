import './style.css';
import Session from '../session';

export default function Time(props) {
    const { day, sessions, setSession } = props;
    return (
        <>
            <p className="session-day">
                {day}
            </p>
            <span className="sessions">
                {sessions.map(elem => <Session setSession={setSession} key={elem.id} id={elem.id} name={elem.name}/>)}
            </span>
            
        </>
    )
}