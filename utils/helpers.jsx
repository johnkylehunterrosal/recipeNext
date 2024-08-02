
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
export const recipeList = [
    {
        id : 1,
        recipeName : "Adobo",
        imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicken_adobo.jpg/1200px-Chicken_adobo.jpg",
        shortDescription : "Adobo refers to a method of marinating and stewing for any cut of meat or fish in a briny mixture of vinegar, soy sauce, and spices. ",
        ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Pork or Chicken", id : 2}],
        instructionsList : [{ name : "Stir-Fried Garlic and Onion", id : 12312}, { name : "Boil Chicken or Pork", id : 22312}]
      },
      {
        id : 2,
        recipeName : "Sinigang",
        imageUrl : "https://www.kawalingpinoy.com/wp-content/uploads/2013/01/sinigang-baboy-7.jpg",
        shortDescription : "The reason why it is called “sinigang” is that it was a translation to the English word, “stew” which is true because of its method of cooking. ",
        ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Pork", id : 2}],
        instructionsList : [{ name : "Stir-Fried Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
      },
      {
        id : 3,
        recipeName : "Sisig",
        imageUrl : "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/sizzling-pork-sisig-manila/sizzling-pork-sisig-manila-main.jpg",
        shortDescription : "Sisig Tagalog pronunciation: ['sisig]) is a Filipino dish made from pork jowl and ears (maskara), pork belly, and chicken liver, which is usually seasoned with calamansi, onions, and chili peppers.",
        ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Chicken", id : 2}],
        instructionsList : [{ name : "Sauteed Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
      },
      {
        id : 4,
        recipeName : "Chicken Curry",
        imageUrl : "https://images.aws.nestle.recipes/resized/219e8594dcd0b80a157994baf7197eb1_Chicken_Curry_Main_944_531.jpg",
        shortDescription : "Filipino Style Chicken Curry is a type of chicken curry cooked with potatoes, carrots and capsicum in coconut milk with mild curry powder.",
        ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Chicken", id : 2}],
        instructionsList : [{ name : "Sauteed Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
      },
      {
        id : 5,
        recipeName : "Lomi Recipe",
        imageUrl : "https://t4.ftcdn.net/jpg/04/78/31/55/360_F_478315591_dKqbnlECwqabi2yOFcvUisgF4gaahuk9.jpg",
        shortDescription : "Lomi or Pancit Lomi is a type of noodle soup dish that makes use of thick egg noodles. Although this dish originated from the Chinese, several different regional variations became available throughout the years. The most popular among these variations would probably be the Batangas Lomi.",
        ingredientsList : [{name : "Garlic",id: 1},{ name : "Onion", id : 0},{ name : "Chicken", id : 2}],
        instructionsList : [{ name : "Sauteed Garlic and Onion", id : 12312}, { name : "Boil Chicken", id : 22312}]
      }
]