// https://medium.com/scalereal/integration-of-google-maps-with-react-part-1-86c075ab452a

// import { GoogleMap, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
// import "./address.css"


// const App = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.GOOGLE_API_KEY,
//   });
//   const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

//   return (
//     <div className="App">
//       {!isLoaded ? (
//         <h1>Loading...</h1>
//       ) : (
//         <GoogleMap
//           mapContainerClassName="map-container"
//           center={center}
//           zoom={10}
//         />
//       )}
//     </div>
//   );
// };

// export default App;