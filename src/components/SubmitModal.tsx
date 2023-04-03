import React from "react";

interface IModSubmit{
     event: string,
     onClose: () => void
}

export function ModalSubmit({event, onClose}: IModSubmit){
     return (
          <div>
               <h1>{`You have successfully ${event}`}</h1>
          </div>
     );
}