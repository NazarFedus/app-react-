import { useEffect, useState } from 'react'
import { IProduct } from '../models'
import axios from 'axios'


export function useProducts(){
     const [products, setProducts] = useState<IProduct[]>([])
     const [loading, setLoading] = useState(false)
     const [error, setError] = useState('')

     function addProduct(product: IProduct){
      setProducts(prev => [...prev, product])
     }

     async function fetchProducts(){
       try{
         setError('')
         setLoading(true)
         const reponse = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=7')
         setProducts(reponse.data)
         setLoading(false)
       } catch (e: unknown){
         const error = e as Error
         setLoading(false)
         setError(error.message)
       }

     }

     useEffect(() => {
       fetchProducts()
     }, [])

     return {products, loading, error, addProduct}
}