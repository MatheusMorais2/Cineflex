import styled from 'styled-components';

export default function Seat({isAvailable, isChoosen, index, id, noNumber}) {
    return (
        <Container isAvailable={isAvailable} isChoosen={isChoosen}>
            {!noNumber ? index+1 : ''}
        </Container>
    );
}

const Container = styled.div`
    width: 26px;
    height: 26px;
    background-color: 
        ${props => {
        /* if (props.availability === 'choosen') return  '#8DD7CF'; */
            if (props.isChoosen) return '#8DD7CF';
            else if (props.isAvailable) return '#C3CFD9';
            else return '#FBE192';
        }};
    border: 1px solid
        ${props => {
            if (props.isChoosen) return '#1AAE9E';
            else if (props.isAvailable) return '#7B8B99';
            else return '#F7C52B';
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