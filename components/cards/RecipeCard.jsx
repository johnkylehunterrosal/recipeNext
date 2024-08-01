"use client"
import { useState } from "react"
import { recipeLists } from "@/utils/helpers"
import ReactStars from 'react-stars'

const RecipeCard = () => {
    const [recipes, setRecipes] = useState(recipeLists)
  return (
    <>
        {recipes.map(recipe => {
            return (
                <>
                    <div className="recipe__card w-80 h-96 hover:cursor-pointer">
                        <div className="w-full h-48">
                            <img className="w-full h-full" src={recipe.imageUrl}/>
                        </div>
                        <div className="px-5">
                            <h1 className="text-2xl">
                                {recipe.recipeName} 
                            </h1>
                            <p className="text-justify px-5 overflow-hidden max-h-20">
                                {recipe.shortDescription}
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <ReactStars count={5} size={24} color2={'#ffd700'} />
                        </div>
                    </div>
                </>
            )
        })}
    </>
  )
}

export default RecipeCard