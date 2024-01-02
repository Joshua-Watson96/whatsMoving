// Importing React
import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"

// Importing pages and questions
import { LandingPage } from "../pages/landingPage/landing";
import { BedroomQuestion } from "../questions/bedroom/bedroom";
import { AddressMap } from "../questions/address/address";
import { AccessQuestion } from "../questions/access/access";




export default function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}/>
                <Route path="/questionOne" element={<BedroomQuestion />}/>
                <Route path="/questionTwo" element={<AddressMap/>}/>
                <Route path="/questionThree" element={<AccessQuestion/>}/>
            </Routes>
        </Router>
    )
}