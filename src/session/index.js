import styled from 'styled-components';

import { Link } from 'react-router-dom';

export default function Session({ id, name, setSession}) {
    return (
        <Link to={'/assentos/'+id}>
            <Container onClick={() => setSession(id)}>
                {name}
            </Container>
        </Link>
    );
}

const Container = styled.div`
    width: 82px;
    height: 43px;
    background-color: #E8833A;
    text-align: center;
    color:#fff;
    font-family: 'Roboto';
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;