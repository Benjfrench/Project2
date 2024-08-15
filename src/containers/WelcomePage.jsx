import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export const WelcomePage = () => {
  const { age } = useUserContext();

  // Check if age verification has occurred
  const isAgeVerified = age !== null;

  return (
    <div>
      {!isAgeVerified ? (
        // Display this if age verification hasn't occurred
        <>
          <p>What Cocktail will you make today?</p>
          <NavLink to="/verification">Verify your age to get started</NavLink>
        </>
      ) : age < 18 ? (
        // Display this if age is verified but less than 18
        <NavLink to="/search">Perhaps try some mocktails!</NavLink>
      ) : (
        // Display this if age is verified and 18 or older
        <>
          <p>What Cocktail will you make today?</p>
          <div>
            <NavLink to="/random">Random Cocktail</NavLink>
            <br />
            <NavLink to="/search">Search for a Cocktail</NavLink>
          </div>
        </>
      )}
    </div>
  );
};
