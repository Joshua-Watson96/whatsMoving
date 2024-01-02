import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import { pickUpAccess } from "../../questionContent";
import { Headermain } from "../../pages/header/header";
import { useMutation  } from "@apollo/client";
import { SAVE_SELECTED_PICKUP_MUTATION } from "../../utils/mutations"

export const AccessQuestion = () => {
    const pickUpOptions = Object.entries(pickUpAccess.answer);
    console.log(pickUpOptions);
    const [selectedPickUp, setSelectedPickUp] = useState(null);

    const [saveSelectedPickUp] = useMutation(SAVE_SELECTED_PICKUP_MUTATION)

    const handleButtonClick = async (value) => {
        try {
            // Call the mutation to ave the selected PickUp
            const { data } = await saveSelectedPickUp({
                variables: { selectedPickUp: value },
            });
    
            if (data && data.saveSelectedPickUp) {
                console.log(`Saved answer with ID: ${data.saveSelectedPickUp._id}`);
                setSelectedPickUp(value);
            } else {
                console.error('Error saving answer. Data:', data);
            }
        } catch (error) {
            console.error('Error during mutation:', error.message);
        }
    };


return (
    <div>
        <Headermain/>
        <p>{pickUpAccess.title}</p>
        <ul>
            {pickUpOptions.map(([key, value]) => (
                <li className="pickUpBtns" key={key} >
                    <button onClick={() => handleButtonClick(value)}>{value}</button>
                </li>
            ))}
        </ul>
        {selectedPickUp && <p> You've selected: {selectedPickUp}</p>}
    </div>
)
}