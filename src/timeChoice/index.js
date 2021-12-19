import { useState, useEffect } from 'react';
import Header from '../header';
import MovieFooter from '../movieFooter';
import Time from '../time';
import axios from 'axios';
import './style.css';
import { useParams } from 'react-router-dom';

export default function TimeChoice() {
    const { idMovie } = useParams();
    console.log('Destructured idSession: ',idMovie);
    const [infoMovie, setInfoMovie] = useState(null);

    useEffect( () => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);
        requisition.then( response => {
            setInfoMovie(response.data)
            
        });
        requisition.catch( () => alert('requisiçao de sessoes deu merda'));
    }, [] );

    if (infoMovie) console.log('infoMovie: ', infoMovie);

    return (
        <>
            <Header/>
            <div id='choose-time'>Selecione o horário</div>
            <div id='available-times'>
                {infoMovie 
                    ? infoMovie.days.map( elem => <Time key={elem.id} day={elem.date} weekday={elem.weekday} sessions={elem.showtimes}/>)
                    : 'Carregando'
                }
            </div>
            <MovieFooter/>
        </>
    )
}