import React, {useState} from "react";
import axios from "axios";

interface IData {
     username?: string;
     email: string;
     password: string;
}

export function useSubmit() {
  const [response, setResponse] = useState(null);
     function submit(data: IData, request: string){
          console.log('Sending data on server:', data);

     axios.post(`http://localhost:5000/auth/${request}`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

     return {submit, response}
}