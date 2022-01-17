import styled from "styled-components";
import { useState } from "react";

export default function Seat({
  isAvailable,
  isChoosen,
  index,
  id,
  noNumber,
  setchoosenSeats,
  choosenSeats,
}) {
  const [choosen, setChoosen] = useState(isChoosen);
  console.log(choosen);

  let aux = choosenSeats;

  function handleClick() {
    if (!isAvailable && !choosen) alert("Esse assento não está disponível");
    else if (choosen) {
      setChoosen(false);
      console.log(
        "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
      );
      console.log("id: ", id);
      console.log("aux: ", aux);
      console.log("index in aux: ", aux.indexOf(id));
      /* setchoosenSeats(aux.splice(aux.indexOf(id), 1)); */
      setchoosenSeats(aux.filter((elem) => elem !== id));
      console.log(choosenSeats);
      aux = [...choosenSeats];
    } else if (isAvailable) {
      setChoosen(true);
      aux.push(id);
      setchoosenSeats(aux);
      console.log(choosenSeats);
    }
  }

  return (
    <Container
      onClick={() => handleClick()}
      isAvailable={isAvailable}
      isChoosen={choosen}
    >
      {!noNumber ? index + 1 : ""}
    </Container>
  );
}

const Container = styled.button`
  width: 26px;
  height: 26px;
  background-color: ${(props) => {
    if (props.isChoosen) return "#8DD7CF";
    else if (props.isAvailable) return "#C3CFD9";
    else return "#FBE192";
  }};
  border: 1px solid
    ${(props) => {
      if (props.isChoosen) return "#1AAE9E";
      else if (props.isAvailable) return "#7B8B99";
      else return "#F7C52B";
    }};
  border-radius: 50%;
  color: #000;
  font-family: "Roboto";
  font-size: 11px;
  line-height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
