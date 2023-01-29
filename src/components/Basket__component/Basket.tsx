import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { ProductsPage } from "../../pages/ProductsPage";

export function Basket() {
     const [openBasket, setOpenBasket] = React.useState(true);
     const img = "https://cdn-icons-png.flaticon.com/512/2696/2696198.png"

     const basketProducts = [{ id: 1, name: "Product 1", price: 100 }, { id: 2, name: "Product 2", price: 200}];

     return (
          <>
               <button className="text-align: right" onClick={() => setOpenBasket(prev => !prev)}>
                    {openBasket && <img src={img} alt="basket" className="max-w-[5%] pointer" />}
               </button>
               {!openBasket && <div className="basketStyle">
               <button onClick={() => setOpenBasket(prev => !prev)}>
                         <img className="w-[3%]" src="https://cdn-icons-png.flaticon.com/512/2961/2961937.png" alt="" />
                    </button>
                    <Header data = {basketProducts}></Header>
                    <Main data={basketProducts}></Main>
                    <Footer></Footer>
               </div>}
          </>
     )
}