import "./App.css";
import Header from "./Common/header/Header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./Common/page/Pages";
import Data from "./Components/Data";
import { useState } from "react";
import Cart from "./Common/cart/Cart";
import Sdata from "./Components/shop/Sdata";

import Footer from "./Common/footer/Footer"



function App() {

  const { productItems } = Data;
const {shopItems} = Sdata;
  const [cartItem, setCardItem] = useState([]);
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  }
  const decreaseQty = (product) =>{
    const productExit = cartItem.find((item) => item.id ===product.id)
    if(productExit.qty ===1 ) {
setCardItem(cartItem.filter((item) => item.id !== product.id))
    }else{
      setCardItem(cartItem.map((item) => (item.id === product.id ? {...productExit, qty: productExit.qty-1} :item )))
    }
    
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages
              productItems={productItems}
              addToCart={addToCart}
              shopItems={shopItems}
            />
          </Route>
          <Route path="/cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
