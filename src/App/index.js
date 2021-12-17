/* import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios'; */
import './reset.css';
import './style.css';
import Header from '../header';
import MovieChoice from '../movieChoice';
/* import TimeChoice from '../timeChoice';
import SeatChoice from '../seatChoice'; */


export default function App() {
    return (
        <>
            <Header />
            <MovieChoice />
            {/* <TimeChoice /> */}
            {/* <SeatChoice/> */}
        </>
        
    )
}