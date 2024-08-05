"use client"
import { useContext } from "react"
import { ThemeContext } from "@/utils/ThemeContext"
import ReactStars from 'react-stars'
import AddFavouritesBtn from "@/components/button/Addfavouritesbtn"

const RecipeCard = () => {
    const { allRecipe, setAllRecipe, favourites, setFavourites} = useContext(ThemeContext);

    const addToFavouritesClick = (id) => {
       const addFavourite = allRecipe.find(recipe => recipe.id === id);
        setFavourites(prevState => {
        return [...prevState, addFavourite]
      })
    }
  return (
    <>
        {allRecipe.map(recipe => {
            return (
                <div key={recipe.id} className="recipe__card w-80 h-96 hover:cursor-pointer mb-5">
                    <div className="w-full h-48">
                        <img className="w-full h-full" src={recipe.imageUrl} alt={recipe.recipeName} />
                    </div>
                    <div className="px-5">
                        <h1 className="text-2xl">
                            {recipe.recipeName} 
                        </h1>
                        <p className="text-justify px-5 overflow-hidden max-h-20">
                            {recipe.shortDescription}
                        </p>
                    </div>
                    <div className="flex justify-between mx-5 mt-5">
                        <ReactStars count={5} size={24} color2={'#ffd700'} />
                        <AddFavouritesBtn onClick={()=>addToFavouritesClick(recipe.id)}/>
                        {/* <AddFavouritesBtn/> */}
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default RecipeCard