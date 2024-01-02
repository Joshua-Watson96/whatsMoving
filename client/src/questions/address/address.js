import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Headermain } from "../../pages/header/header";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Geocode from "react-geocode"; // Import react-geocode
import "./address.css";

export const AddressMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY,
  });
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({ lat: "-37.61928", lng: "145.12509" });

  // Initialize react-geocode with your API key
  Geocode.setApiKey(process.env.GOOGLE_API_KEY);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use geocodeByAddress to get the address details
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);

      // Reverse geocode the coordinates to get the address
      Geocode.fromLatLng(latLng.lat, latLng.lng).then(
        (response) => {
          const formattedAddress = response.results[0].formatted_address;

          // Update the map center with the geocoded coordinates
          setMapCenter(latLng);

          // Update the address with the formatted address
          setAddress(formattedAddress);
        },
        (error) => {
          console.error("Error reverse geocoding coordinates:", error);
        }
      );
    } catch (error) {
      console.error("Error geocoding address:", error);
    }
  };

  return (
    <div className="addressBody">
      <Headermain />
      <div>
        <form onSubmit={handleSubmit}>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={setAddress}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: "Enter your address",
                    className: "location-search-input",
                  })}
                />
                <div className="autocomplete-dropdown-container">
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                        })}
                      >
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
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

        <Link to="/questionThree">
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};
