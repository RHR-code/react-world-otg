import React from "react";

const Country = ({ countryData }) => {
  //   console.log(countryData);

  return (
    <div className="flex">
      <h2>Name: {countryData.name.common}</h2>
      <img
        src={countryData?.flags?.flags?.png}
        alt={countryData?.flags?.flags?.alt}
      />
      <p>Population: {countryData.population.population} </p>
    </div>
  );
};

export default Country;
