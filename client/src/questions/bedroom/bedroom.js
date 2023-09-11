import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { bedroomQuestion } from "../../questionContent";
import { Headermain } from "../../pages/header/header";
import { useMutation } from '@apollo/client'; // Import the useMutation hook
import { SAVE_SELECTED_BEDROOM_MUTATION } from "../../utils/mutations"; // Define the mutation
import "./bedroom.css";

export const BedroomQuestion = () => {
  const answerOptions = Object.entries(bedroomQuestion.answer);
  const [selectedBedroom, setSelectedBedroom] = useState(null);

  // Initialize the mutation hook
  const [saveSelectedBedroom] = useMutation(SAVE_SELECTED_BEDROOM_MUTATION);

  const handleButtonClick = async (value) => {
    try {
      // Call the mutation to save the selected bedroom
      const { data } = await saveSelectedBedroom({
        variables: { selectedBedroom: value },
      });

      // Log the result
      console.log(`Saved answer with ID: ${data.saveSelectedBedroom._id}`);
      
      // Update the local state to display the selected bedroom
      setSelectedBedroom(value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Headermain />
      <p>{bedroomQuestion.title}</p>

      <ul>
        {answerOptions.map(([key, value]) => (
          <li className="bedroomAnsBtns" key={key}>
            <button onClick={() => handleButtonClick(value)}>{value}</button>
          </li>
        ))}
      </ul>
      {selectedBedroom && <p>You've selected: {selectedBedroom}</p>}

      <Link to= "/">Back</Link>
      <Link to= "/questionTwo"> Next question</Link>
      
      
    </div>
  );
};