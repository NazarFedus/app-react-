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

    </div>
  )
}

export default App;
