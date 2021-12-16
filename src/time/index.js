import './style.css';

export default function Time({day, sessions}) {
    return (
        <>
            <p className="session-day">
                {day}
            </p>
            <span className="sessions">
                {sessions.map(elem => <div className="session">{elem}</div>)}
            </span>
            
        </>
    )
}