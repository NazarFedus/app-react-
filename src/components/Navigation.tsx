import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Basket } from "./Basket__component/Basket";





export function Navigation() {

     return (
          <nav className="w-[100%] h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
               <span className="font-bold">React App</span>
               <span className="flex direction-row items-center mr-10">
                    <Link to="/" className="mr-2">Products</Link>
                    <Link to="/about">About</Link>
                    <Basket></Basket>
                    {/* <button
                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                         onClick={() => setCurrentStatus(prev => !prev)}>{currentStatus ? 'LogOut' : 'LogIn'}
                    </button> */}
                    <Link to="/registration">Register/LogIn</Link>
               </span>

          </nav>
     )
}
