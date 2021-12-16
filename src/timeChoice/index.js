import Header from '../header';
import MovieFooter from '../movieFooter';
import Time from '../time';
import './style.css';

export default function TimeChoice() {
    const times = [{day: 'Quinta-feira - 24/06/2021', sessions: ['15:00', '19:00'] },
        { day: 'Sexta-feira - 25/06/2021', sessions: ['15:00', '19:00'] }];
    return (
        <>
            <Header/>
            <div id='choose-time'>Selecione o horário</div>
            <div id='available-times'>
                {times.map( elem => <Time day={elem.day} sessions={elem.sessions}/>)}
            </div>
            <MovieFooter/>
        </>
    )
    
}