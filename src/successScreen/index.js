import axios from "axios";
import styled from "styled-components";
import Header from '../header';
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SuccessScreen({ name, cpf, idSession, choosenSeats }) {
    let session;
    console.log(choosenSeats);

    console.log('idSession: ', idSession);
    const [infoMovie, setInfoMovie] = useState(null);

    useEffect(() => {
        const requisition = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);
        requisition.then(response => {
            setInfoMovie(response.data);
            console.log('infoMovie: ', infoMovie);
        });
        requisition.catch(() => alert('requisiçao de showtimes na tela de sucesso falhou'));
    }, []);
    let aux = [];

    if (infoMovie) {
        choosenSeats.map(elem => aux.push(infoMovie.seats.find(e => e.id === elem)));
        
        return (
            <Container>
                <Header />
                <Confirmation>Pedido feito com sucesso!</Confirmation>
                <Information>
                    <Title>Filme e sessão</Title>
                    <p>{infoMovie.movie.title}</p>
                    <p>{infoMovie.day.date} - {infoMovie.name}</p>
                </Information>
                <Information>
                    <Title>Ingressos</Title>
                    {aux.map( (elem) => <p key={elem.name}>Assento {elem.name}</p>)}
                </Information>
                <Information>
                    <Title>Comprador</Title>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </Information>
                <Centralize>
                    <Link to='/'>
                        <Button>Voltar pra Home</Button>
                    </Link>
                </Centralize>
            </Container>  
        );
    } else return (
        <Container>Carregando ...</Container>
    )
}

const Container = styled.div`
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Confirmation = styled.div`
    margin-top: 67px;
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #247A6B;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    margin-bottom: 25px;
`;

const Information = styled.div`
    font-family: 'Roboto';
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #293845;
    margin-bottom: 20px;
`;

const Title = styled.div`
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    margin-bottom: 10px;
`;

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    color: #fff;
    border-radius: 3px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const Centralize = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;