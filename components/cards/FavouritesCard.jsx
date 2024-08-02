"use client"
import { useContext } from "react"
import { ThemeContext } from "../../utils/ThemeContext"
import AddFavouritesBtn from "../button/Addfavouritesbtn";
import ReactStars from 'react-stars'

const FavouritesCard = () => {
    const { favourites, setFavourites } = useContext(ThemeContext);

    const removeFavouriteClick = (id) => {
        const removeFavourite = favourites.findIndex(favourite => favourite.id === id);
        if (id !== -1) {
          const newArray = [...favourites.slice(0, removeFavourite), ...favourites.slice(removeFavourite + 1)];
          setFavourites(newArray);
        }
    };

    return (
        <>
            {favourites.map((favourite, index) => {
                return (
                    <div key={favourite.id} className="recipe__card w-80 h-96 hover:cursor-pointer">
                        <div className="w-full h-48">
                            <img className="w-full h-full" src={favourite.imageUrl} alt={favourite.recipeName} />
                        </div>
                        <div className="px-5 max-h-32">
                            <h1 className="text-2xl">
                                {favourite.recipeName}
                            </h1>
                            <p className="text-justify px-5 overflow-hidden max-h-20">
                                {favourite.shortDescription}
                            </p>
                        </div>
                        <div className="flex justify-between mx-5">
                            <ReactStars count={5} size={24} color2={'#ffd700'} />
                            <AddFavouritesBtn onClick={() => removeFavouriteClick(favourite.id)} />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default FavouritesCard