import './style.css';
import MovieFooter from '../movieFooter';
import styled from 'styled-components';

export default function SeatChoice() {
    let arraySeats = [];
    for (let i = 1; i <= 50; i++) {
        arraySeats.push(i.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }))
    };

    return ( 
        <Container>
            <SelectSeats>Selecione o(s) assento(s)</SelectSeats>
            <SeatsContainer>
                {arraySeats.map( elem => <Seat availability={'available'}>{elem}</Seat> )}
            </SeatsContainer>
            <AvailabilityContainer>
                <Availability>
                    <Seat availability={'choosen'}/>
                    Selecionado
                </Availability>
                    
                <Availability>
                    <Seat availability={'available'} />
                    Disponível
                </Availability>

                <Availability>
                    <Seat availability={'unavailable'} />
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

const Seat = styled.div`
    width: 26px;
    height: 26px;
    background-color: 
        ${props => {
            if (props.availability === 'choosen') return  '#8DD7CF';
            if (props.availability === 'available') return '#C3CFD9';
            if (props.availability === 'unavailable') return '#FBE192';
        }};
    border: 1px solid
        ${props => {
            if (props.availability === 'choosen') return '#1AAE9E';
            if (props.availability === 'available') return '#7B8B99';
            if (props.availability === 'unavailable') return '#F7C52B';
        }};
    border-radius: 50%;
    color: #000;
    font-family: 'Roboto';
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
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
