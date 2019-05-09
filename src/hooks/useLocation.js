import { useState, useEffect } from "react";

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

  console.log(lat);
  console.log(errorMessage);

  return [lat, errorMessage];
};

export default useLocation;
