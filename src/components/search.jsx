import React, { useState } from "react";
import "./component.css";

export const Search = () => {
  const [ingredient, setIngredient] = useState("gin");
  const [cocktails, setCocktails] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient) {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.drinks) {
            setCocktails(data.drinks);
            setErrorMessage("");
          } else {
            setCocktails([]);
            setErrorMessage("Please try something else.");
          }
        });
    }
  };

  return (
    <div>
      <h3>Search Cocktails by Ingredient</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={ingredient}
          onChange={handleInputChange}
          placeholder="Enter an ingredient"
        />
        <button type="submit">Search</button>
      </form>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <ul>
          {cocktails.map((drink) => (
            <li key={drink.idDrink}>
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
              />
              {drink.strDrink}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
