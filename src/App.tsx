import {Product} from './components/Product'
import { Loader } from './components/Loader';
import { useProducts } from './hooks/products';
import { ErrorMessage } from './components/ErrorMessage';
import { Modal } from './components/Modal';
import { CreateProduct } from './components/CreateProduct';
import { useState } from 'react';
import { IProduct } from './models';



function App() {
  const {products, loading, error, addProduct} = useProducts()
  const [modal, setModal] = useState(false)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      { loading &&  <Loader></Loader> }
      { error && <ErrorMessage error = {error}></ErrorMessage> }
      { products.map(product => <Product product = {product} key={product.id}></Product>) }

    {modal && <Modal title='Create new product' onClose={() => setModal(false)}>
      <CreateProduct onCreate={createHandler} ></CreateProduct>
    </Modal>}

    <button className='fixed bottom-5 right-5 rounded-full bg-green-700 text-white text-2xl px-5 py-3'
    onClick={()=>setModal(true)}
    >+</button>
    </div>
  )
}

export default App;
