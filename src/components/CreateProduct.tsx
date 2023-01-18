import React, { useState } from "react";

export function CreateProduct() {

     const [value, setValue] = useState('')

     const submitHandler = (event: React.FormEvent) => {
          event.preventDefault()
     }

     const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
          setValue(event.target.value)
     }

     return (
          <form onSubmit={submitHandler}>
               <input type="text" className="border py-2 px-4 mb-2 w-full outline-0"
               placeholder="Enter product title..."
               value = {value}
               onChange = {changeHandler}
               />
               <button type="submit" className="py-2 px-4 border bg-green-400 hover:text-white"
               >Create</button>
          </form>
     )
}