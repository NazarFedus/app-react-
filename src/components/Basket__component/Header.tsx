import React, { useState } from "react";

interface HeaderProps {
     data: any;
}


export function Header(props: HeaderProps) {




     return (
          <div>
               <h1 className="text-black">MY BAG - {props.data.length}</h1>
          </div>
     )
}