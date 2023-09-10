// Importing React
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Importing pages and questions
import { LandingPage } from "../pages/landingPage/landing";
import { BedroomQuestion } from "../questions/bedroom/bedroom";




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