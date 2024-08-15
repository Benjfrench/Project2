import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "@uidotdev/usehooks";

export const Random = () => {
  const [cocktail, setCocktail] = useState(null);
  const [rawCocktail, setRawCocktail] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Debounce the loading state to show the loading indicator
  const debouncedLoading = useDebounce(loading, 500);

  // Function to fetch cocktail data from the API
  const fetchCocktail = useCallback(() => {
    setLoading(true);
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        setRawCocktail(data.drinks[0]);
        setLoading(false);
      });
  }, []);

  // Fetch data on initial render
  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail]);

  useEffect(() => {
    if (debouncedLoading === false && rawCocktail) {
      setCocktail(rawCocktail);
    }
  }, [debouncedLoading, rawCocktail]);

  const handleRefetch = () => {
    fetchCocktail();
  };

  if (debouncedLoading) {
    return (
      <div className="container">
        <div className="top"></div>
        <div className="trapezoid"></div>
        <div className="trapezoid2"></div>
      </div>
    );
  }

  if (!cocktail) {
    return (
      <div className="container">
        <div className="top"></div>
        <div className="trapezoid"></div>
        <div className="trapezoid2"></div>
      </div>
    );
  }

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(
        <p key={i}>
          {measure ? measure : ""} {ingredient}
        </p>
      );
    }
  }

  return (
    <div>
      <button onClick={handleRefetch}>Fetch New Cocktail</button>
      <h4>{cocktail.strDrink}</h4>
      <h5>Ingredients</h5>
      {ingredients}
      <h5>Instructions</h5>
      <p>{cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    </div>
  );
};
