import { useState } from "react";
import styled from "styled-components";

export default function InputContainer({text, placeholder, setState}) {
    
    return (
        <Container>
            {text}
            <Input onChange={(e) => setState(e.target.value)} placeholder={placeholder} />
        </Container>
    )
}

const Container = styled.div`
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