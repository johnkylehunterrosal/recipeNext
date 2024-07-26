
import { FaListUl } from "react-icons/fa";
import { MdEdit, MdFavorite } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
export const recipeNav = [
    {
        title : "MENU",
        component : FaListUl,
        url : "/",
    },
    {
        title : "EDIT",
        component : MdEdit,
        url : "/edit-recipe",
        
    },
    {
        title : "ADD RECIPE",
        component : IoMdAddCircle,
        url : "/add-recipe",
    },
    {
        title : "FAVOURITES",
        component : MdFavorite,
        url : "/my-favourites",
        
    },
]