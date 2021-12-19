import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import './reset.css';
import './style.css';
import Header from '../header';
import MovieChoice from '../movieChoice';
import TimeChoice from '../timeChoice';
import SeatChoice from '../seatChoice';


export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<MovieChoice />}></Route>
                <Route path='/sessoes/:idMovie' element={<TimeChoice/>}></Route>
                <Route path='/assentos/:idSession' element={<SeatChoice />}></Route>
            </Routes>
            

        </BrowserRouter>
        
    )
}