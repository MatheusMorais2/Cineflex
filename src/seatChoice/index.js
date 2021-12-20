import './style.css';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import MovieFooter from '../movieFooter';
import Seat from '../seat';
import InputContainer from '../InputContainer';

export default function SeatChoice({name, setName, cpf, setCpf, choosenSeats, setchoosenSeats}) {
    const { idSession } = useParams();
    const [arraySeats, setarraySeats] = useState(null);
    const [infoMovie, setInfoMovie] = useState(null);

    useEffect( () => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);
        requisition.then(response => {
            setarraySeats(response.data.seats);
            setInfoMovie(response.data);
            console.log('infoMovie: ', infoMovie);
        });
    }, []);
    
    let orderInfo= {ids: choosenSeats, name: name, cpf: cpf};

    return ( 
        <Container>

            <SelectSeats>Selecione o(s) assento(s)</SelectSeats>

            <SeatsContainer>
                {arraySeats 
                    ? arraySeats.map( (elem, index) => <Seat key={index} isAvailable={elem.isAvailable} isChoosen={false} choosenSeats={choosenSeats} setchoosenSeats={setchoosenSeats} index={index} id={elem.id}/>) 
                    : 'Carregando...' 
                }
            </SeatsContainer>

            <AvailabilityContainer>
                <Availability>
                    <Seat noNumber={true} isAvailable={false} isChoosen={true} index={null} />
                    Selecionado
                </Availability>
                    
                <Availability>
                    <Seat noNumber={true} isAvailable={true} isChoosen={false} index={null} />
                    Disponível
                </Availability>

                <Availability>
                    <Seat noNumber={true} isAvailable={false} isChoosen={false} index={null} />
                    Indisponível
                </Availability>
            </AvailabilityContainer>

            <InputContainer text='Nome do comprador:' placeholder='Digite seu nome...' setState={setName}/>
            <InputContainer text='CPF do comprador:' placeholder='Digite seu CPF...' setState={setCpf} />
            
            <Link to='/sucesso'>
                <ReserveButton onClick={() => {
                    const req = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', orderInfo);
                }}>
                    Reservar assento(s)
                </ReserveButton>
            </Link>

            
            {infoMovie 
                ? <MovieFooter poster={infoMovie.movie.posterURL} movie={infoMovie.movie.title} session={infoMovie.name} day={infoMovie.day.weekday} /> 
                : 'Carregando...'
            }
        </Container>
    );
}

const Container = styled.div`
    padding: 0 24px;
`

const SelectSeats = styled.div`
    width: 100%;
    height: 110px;
    margin-top: 67px;

    display:flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
`;

const SeatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 18px 7px;
    margin-bottom: 16px;
`;


const AvailabilityContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-family: 'Roboto';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.013em;
    text-align: left;
    color: #4E5A65;
    margin-bottom: 40px;
`;

const Availability = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ReserveButton = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: #fff;
    border-radius: 3px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: calc(50% - 112px);
    margin-top: 10px;
`;
