import React from "react";
import { bedroomQuestion } from "../../questionContent";

export const BedroomQuestion = () => {
    return (
        <div>
            <h1>Test</h1>
            <p>{bedroomQuestion.title}</p>
            <h2>Test</h2>
            <p>{bedroomQuestion.answer}</p>
        </div>
    )
}