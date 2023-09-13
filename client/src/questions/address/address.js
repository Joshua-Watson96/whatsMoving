import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { Headermain } from "../../pages/header/header";
import "./address.css";

export const AddressMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });
  const [address, setAddress] = useState(""); // State to store user-entered address
  const [mapCenter, setMapCenter] = useState({ lat: 18.52043, lng: 73.856743 });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use a geocoding service (e.g., Google Geocoding API) to convert the address to coordinates
    // Replace this with your actual geocoding logic
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.GOOGLE_API_KEY}`
    );
    const data = await response.json();

    // Extract the coordinates from the geocoding result
    const location = data.results[0].geometry.location;

    // Update the map center
    setMapCenter(location);
  };

  return (
    <div className="addressBody">
      <Headermain />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button type="submit">Show on Map</button>
        </form>
      </div>
      <div className="Map">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={mapCenter}
            zoom={10}
          />
        )}
      </div>
      <div>
        <Link to="/questionOne">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};
