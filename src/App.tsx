import {Product} from './components/Product'
import { useProducts } from './hooks/products';



function App() {
  const {products, loading, error} = useProducts()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading && <p className="text-center">Loading...</p> }
      { error && <p className="text-center text-red-600">{error}</p> }
      { products.map(product => <Product product = {product} key={product.id}></Product>) }
    </div>
  )
}

export default App;
