import React from "react";
import CardCountries from "./CardCountrie";
 
function CountriesList({ countries }) {
  return <div>
    {countries.map((countrie) => {
      return(
        <CardCountries key={countrie.alpha2Code} name={countrie.name} capital={countrie.capital} flag={countrie.flag}></CardCountries>
      )
     
    })}
    </div>;
}
 
