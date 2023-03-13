import React, {useState} from "react";
import axios from "axios";

interface IData {
     name: string;
     email: string;
     password: string;
     confirmPassword: string;
}

export function useSubmit() {
  const [response, setResponse] = useState(null);
     function submit(data: IData){
          console.log('Sending data on server:', data);

          axios.post('/api/registration', data)
               .then(response => {
                    console.log(response.data)
               })
               .catch(error => {
                    console.log(error)
               })

     }
     return {submit, response}
}