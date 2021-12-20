import styled from "styled-components";
import Header from '../header';
export default function SuccessScreen() {
    return(
        <Container>
            <Header />
            <Confirmation>Pedido feito com sucesso!</Confirmation>
            <Information>
                <Title>Filme e sessão</Title>
                nome do filme e sessao
            </Information>
            <Information>
                <Title>Ingressos</Title>
                assentos
            </Information>
            <Information>
                <Title>Comprador</Title>
                comprador
            </Information>
            <Button>Voltar pra Home</Button>
        </Container>  
    );
}

const Container = styled.div`
    padding: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Confirmation = styled.div`
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
    
`;

const Title = styled.div`

`;

const Button = styled.button`

`;