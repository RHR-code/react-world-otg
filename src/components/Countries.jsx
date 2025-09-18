import React, { use } from "react";
import Country from "./Country";

const Countries = ({ fetchAllCountries }) => {
  let CountriesData = use(fetchAllCountries);
  let Countries = CountriesData.countries;

  return (
    <>
      <h1>All The Countries: {Countries.length} </h1>
      <div className="column">
        {Countries.map((val) => (
          <Country key={val.ccn3.ccn3} countryData={val} />
        ))}
      </div>
    </>
  );
};

export default Countries;
