import React from "react";
import { LandingPage } from "../pages/landingPage/landing";
import { BedroomQuestion } from "../questions/bedroom/bedroom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/questionOne" element={<BedroomQuestion />}/>
            </Routes>
        </Router>
    )
}