import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ fetchAllCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  let CountriesData = use(fetchAllCountries);
  let Countries = CountriesData.countries;

  const handleVisitedCountries = (countryData, visited) => {
    if (visited) {
      setVisitedCountries([...visitedCountries, countryData]);
    } else {
      let visitedRemoved = visitedCountries.filter(
        (val) => val.ccn3.ccn3 !== countryData.ccn3.ccn3
      );
      setVisitedCountries([...visitedRemoved]);
    }
  };

  return (
    <>
      <h1>All The Countries: {Countries.length} </h1>
      <h3>Visited Countries: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="column">
        {Countries.map((val) => (
          <Country
            key={val.ccn3.ccn3}
            countryData={val}
            handleVisitedCountries={handleVisitedCountries}
          />
        ))}
      </div>
    </>
  );
};

export default Countries;
