import './style.css';
import MovieFooter from '../movieFooter';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Seat from '../seat';

export default function SeatChoice() {
    const { idSession } = useParams();
    console.log('idSession: ',idSession);
    const [arraySeats, setarraySeats] = useState(null);

    useEffect( () => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);
        requisition.then(response => {
            console.log(response.data.seats);
            setarraySeats(response.data.seats);
            console.log('arraySeats: ', arraySeats);
        });
    }, []);
    
    return ( 
        <Container>
            <SelectSeats>Selecione o(s) assento(s)</SelectSeats>
            <SeatsContainer>
                {arraySeats ? arraySeats.map( (elem, index) => <Seat isAvailable={elem.isAvailable} isChoosen={false} index={index} id={elem.id}/>) : 'Carregando...' }
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
            <InputContainer>
                Nome do comprador:
                <Input placeholder='Digite seu nome...'/>
            </InputContainer>
            <InputContainer>
                CPF do comprador:
                <Input placeholder='Digite seu CPF...' />
            </InputContainer>

            {/* <inputCPF></inputCPF>
            <ReserveButton></ReserveButton> */}
            <MovieFooter></MovieFooter>
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

const InputContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-style: 'Regular';
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 7px;
    color:#293845;

`;

const Input = styled.input`
    width: 100%;
    height: 50px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    padding: 0 18px;
`;
