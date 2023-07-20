import React from "react";
import Home from "../../Components/mainpage/Home";
import FlashDeals from "../../Components/FlashDeals/FlashDeals";
import TopCate from "../../Components/top/TopCate";
import NewArrivals from "../../Components/newarrivals/NewArrival"
import Discount from "../../Components/discount/Discount";
import Shop from "../../Components/shop/Shop";
import Annu from "../../Components/announcements/Annu"
import Wrapper  from "../../Components/wrapper/Wrapper";

const pages = ({ productItems ,cartItem ,addToCart,shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount/>
      <Shop  shopItems={shopItems} addToCart={addToCart}/>
    <Annu />
    <Wrapper />
    </>
  );
};

export default pages;
