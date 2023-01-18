import React, { useState } from "react";
import { IProduct } from '../models'
import axios from "axios";
import { ErrorMessage } from "./ErrorMessage";

// data
const productData = {
     title: '',
     price: 13.5,
     description: 'lorem ipsum set',
     image: 'https://i.pravatar.cc',
     category: 'electronic',
     rating: {
          rate: 4.5,
          count: 10
     }
}

// interface

interface CreateProductProps {
     onCreate: () => void
}



export function CreateProduct({ onCreate }: CreateProductProps) {

     const [value, setValue] = useState('')
     const [error, setError] = useState('')

     const submitHandler = async (event: React.FormEvent) => {
          event.preventDefault()
          setError('')

          if(value.trim() === ''){
               setError('Please enter valid title...')
               return
          }
          productData.title = value
          const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

          onCreate()
     }

     const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
     }

     return (
          <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
    </form>
  )
}