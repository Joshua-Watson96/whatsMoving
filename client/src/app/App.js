import React from "react";
import { BedroomQuestion } from "../questions/bedroom/bedroom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/questionOne" element={<BedroomQuestion />}/>
            </Routes>
        </Router>
    )
}