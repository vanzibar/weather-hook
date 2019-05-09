import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
import useLocation from "../hooks/useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();
  const renderContent = () => {
    if (errorMessage && !lat) {
      return <div>Error Message: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <SeasonDisplay latitude={lat} />;
    }

    if (!errorMessage && !lat) {
      return <Loading message="Please accept location request" />;
    }
  };

  return <div className="border red">{renderContent()}</div>;
};

export default App;
