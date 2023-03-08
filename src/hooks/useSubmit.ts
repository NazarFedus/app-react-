import React, {useState} from "react";

interface IData {
     name: string;
     email: string;
     password: string;
     confirmPassword: string;
}

export function useSubmit() {
  const [response, setResponse] = useState(null);

     function submit(data: IData){
          console.log(data)
     }
     return {submit, response}
}