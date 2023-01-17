
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Product} from './components/Product'
// import {products} from './data/products'
import { IProduct } from './models';

function App() {

  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

    {products.map(product => <Product product = {product} key={product.id}></Product>)}
    </div>
  )
}

export default App;
