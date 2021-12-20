import { useState, useEffect } from 'react';
import Header from '../header';
import MovieFooter from '../movieFooter';
import Time from '../time';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';

export default function TimeChoice({setSession}) {
    const { idMovie } = useParams();
    const [infoMovie, setInfoMovie] = useState(null);

    useEffect( () => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);
        requisition.then( response => {
            setInfoMovie(response.data)
            
        });
        requisition.catch( () => alert('requisiçao de sessoes falhou'));
    }, [] );

    if (infoMovie) console.log('infoMovie: ', infoMovie);

    return (
        <>
            <Header/>
            <div id='choose-time'>Selecione o horário</div>
            <div id='available-times'>
                {infoMovie 
                    ? infoMovie.days.map( elem => <Time key={elem.id} setSession={setSession} day={elem.date} weekday={elem.weekday} sessions={elem.showtimes}/>)
                    : 'Carregando'
                }
            </div>
            {infoMovie 
                ? <MovieFooter poster={infoMovie.posterURL} movie={infoMovie.title} /> 
                : 'Carregando'
            }
        </>
    )
}