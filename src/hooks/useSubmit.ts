import React, {useState} from "react";


export function useSubmit() {
  const [response, setResponse] = useState(null);

     function submit(data: any) {
          console.log(data)
     }
     return {submit, response}
}