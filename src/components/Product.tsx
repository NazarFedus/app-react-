import React, { useState } from 'react'
import { IProduct } from '../models'

interface ProductProps {
     product: IProduct
}

export function Product(props: ProductProps){
     const [details, setDetails] = useState(false)

     const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
     const btnClasses = ['py-2 px-4 border', btnBgClassName].join(' ')

     return (
          <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
               <img src={props.product.image} className = "w-1/6" alt={props.product.title}></img>
               <p>{props.product.title}</p>
               <p className='font-bold'>{props.product.price}</p>
               <button className = {btnClasses} onClick={() => setDetails(prev => !prev)}>{details ? 'Hide Details' : 'Show Details'}</button>
               {details && <div>
                    <p>{props.product.description}</p>
                    <p>Rate: <span style={{fontWeight: 'bold'}}>{props?.product.rating?.rate}</span></p>
               </div>}
          </div>

     )
}