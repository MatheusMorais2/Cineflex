import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./reset.css";
import "./style.css";
import Header from "../header";
import MovieChoice from "../movieChoice";
import TimeChoice from "../timeChoice";
import SeatChoice from "../seatChoice";
import SuccessScreen from "../successScreen";

export default function App() {
  const [name, setName] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [session, setSession] = useState(null);
  const [choosenSeats, setchoosenSeats] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MovieChoice />}></Route>
        <Route
          path="/sessoes/:idMovie"
          element={<TimeChoice setSession={setSession} />}
        ></Route>
        <Route
          path="/assentos/:idSession"
          element={
            <SeatChoice
              name={name}
              setName={setName}
              cpf={cpf}
              setCpf={setCpf}
              setchoosenSeats={setchoosenSeats}
              choosenSeats={choosenSeats}
            />
          }
        ></Route>
        <Route
          path="/sucesso"
          element={
            <SuccessScreen
              name={name}
              cpf={cpf}
              idSession={session}
              choosenSeats={choosenSeats}
              setchoosenSeats={setchoosenSeats}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
