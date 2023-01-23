import React from "react";
import Country from "./Country";
import style from "./countries.module.css";

const Countries = (props) => {
  return (
    <section className={style.countries}>
      {props.countries.map((country) => {
        const countryNew = { country:country };
        return (
          <Country
            {...countryNew}
            key={Math.random()}
            onRemoveCountry={props.onRemoveCountry}
          />
        );
      })}
    </section>
  );
};
export default Countries;