"use client"
import { createContext, useState } from 'react';
import { recipeList } from "@/utils/helpers"

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [allRecipe, setAllRecipe] = useState(recipeList)
    const [favourites, setFavourites] = useState([])
  return (
    <ThemeContext.Provider value={{ allRecipe, setAllRecipe, favourites, setFavourites }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };