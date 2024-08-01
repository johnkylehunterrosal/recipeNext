"use client";
import { useState, useEffect } from "react";
import { recipeNav } from "@/utils/helpers";
import { MdRestaurantMenu } from "react-icons/md";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = ({setHeaderText}) => {
    const [recipeMenu, setRecipeMenu] = useState(recipeNav);
    const pathname = usePathname()
    useEffect(() => {
        switch (pathname) {
          case '/':
            setHeaderText('Recipe List');
            break;
          case '/edit-recipe':
            setHeaderText('Edit Recipe');
            break;
          case '/add-recipe':
            setHeaderText('Create Recipe');
            break;
            case '/my-favourites':
            setHeaderText('My Favourite Recipe');
            break;
          default:
            setHeaderText('Recipe List');
        }
      }, [pathname]);

  return (
    <>
      <div className="h-28 flex justify-center items-center border-b-2">
        <MdRestaurantMenu className="text-7xl text-white" />
      </div>
      <nav className="mt-5">
        <ul className="flex flex-col items-center justify-center">
          {recipeMenu.map((item, index) => (
            <li key={index} className="mt-5">
              <Link href={item.url} className="flex flex-col items-center justify-center text-center hover:cursor-pointer">
                <item.component className="text-5xl text-white" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;