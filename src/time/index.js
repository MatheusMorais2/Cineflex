import './style.css';

export default function Time({day, sessions, weekday}) {
    return (
        <>
            <p className="session-day">
                {day}
            </p>
            <span className="sessions">
                {/* {sessions.map(elem => <div key={elem.id} className="session">{elem.name}</div>)} */}
            </span>
            
        </>
    )
}