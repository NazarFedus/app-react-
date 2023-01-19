import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
     return (
          <nav className="w-[100%] h-[50px] flex justify-between items-center px-5 bg-gray-500 text-white">
               <span className="font-bold">React App</span>
               <span>
                    <Link to="/" className="mr-2">Products</Link>
                    <Link to="/about">About</Link>
               </span>
          </nav>
     )
}
