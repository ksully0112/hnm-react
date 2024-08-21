import React, { useEffect, useState } from "react";

const ProductAll = () => {
    const [productList, setProductList]=useState([])
  const getProducts = async () => {
    let url = `http://localhost:3004/products`;
    let response = await fetch(url);
    let data = await response.json;
    setProductList(data)
  };
  useEffect(() => {
    getProducts();
  }, []);
  return <div>
    <ProductCard/>
  </div>;
};

export default ProductAll;
