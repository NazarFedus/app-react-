import React, { useEffect, useState } from "react";



export function Registration() {


     return (
     <div>
          <form className="flex flex-col items-center">
               <input type="text" placeholder="Enter your name" className="border py-2 px-4 rounded mb-2"></input>
               <input type="text" placeholder="Enter your email" className="border py-2 px-4 rounded mb-2"></input>
               <input type="text" placeholder="Enter your password" className="border py-2 px-4 rounded mb-2"></input>
               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
          </form>
     </div>
     );
}