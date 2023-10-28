import React, { useState, useEffect } from "react";

import ProductsBanner from "../../Components/Products/ProductsBanner";
import ProductsList from "../../Components/Products/ProductsList";
import { Layout } from "../../Components";

const Index = () => {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((response) => {
      response.json().then((result) => {
        setProductsList(result)
      })
    })
  },[])
  return (
    <div>
      <Layout>
      <ProductsBanner />
      <ProductsList products={productsList}/>
      </Layout>
    </div>
  );
};

export default Index;
