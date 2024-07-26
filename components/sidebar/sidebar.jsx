"use client"
import { MdRestaurantMenu } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { BsSave2Fill } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
const Sidebar = () => {
  return (
    <>
        <div className="h-28 flex justify-center items-center border-b-2">
            <MdRestaurantMenu className="text-7xl text-white"/>
        </div>
        <nav className="mt-5">
            <ul className="flex flex-col items-center justify-center">
                <li className="text-center mt-5">
                    <FaListUl className="text-5xl text-white"/>
                    <span>
                        MENU
                    </span>
                </li>
                <li className="flex flex-col items-center text-center mt-5">
                    <IoMdAddCircle className="text-5xl text-white"/>
                    <span>
                        ADD NEW
                    </span>
                </li>
                <li className="text-center mt-5">
                    <MdEdit className="text-5xl text-white"/>
                    <span>
                        EDIT
                    </span>
                </li>
                <li className="text-center mt-5">
                    <BsSave2Fill className="text-5xl text-white"/>
                    <span>
                        SAVED
                    </span>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Sidebar