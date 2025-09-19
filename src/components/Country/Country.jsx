import React, { useState } from "react";
import "./Country.css";
const Country = ({ handleVisitedCountries, countryData }) => {
  // console.log(countryData);
  const [visited, setVisited] = useState(false);
  function handleVisit() {
    let newVisited = !visited;
    setVisited(newVisited);
    handleVisitedCountries(countryData, newVisited);
  }
  return (
    <div className={`flex ${visited && "country-visited"}`}>
      <h2>Name: {countryData.name.common}</h2>
      <img
        src={countryData?.flags?.flags?.png}
        alt={countryData?.flags?.flags?.alt}
      />
      <p>Population: {countryData.population.population} </p>
      <p>
        Area: {countryData.area.area}{" "}
        {countryData.area.area > 300000 ? "Big Country" : "Small Country"}{" "}
      </p>
      <button onClick={handleVisit}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
