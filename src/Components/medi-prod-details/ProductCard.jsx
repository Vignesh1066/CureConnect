import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDesign from "./ProductDesign";
import Heading from "./Title/Title";

const authToken = localStorage.getItem("token")
const config = {
  headers: { Authorization: `Bearer ${authToken}` },
}

const GetProduct = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:7000/pharmacy/userproductdata", config);
      setProducts(response.data.getLimitProduct);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white h-auto py-4 sm:py-8 lg:px-16 relative">
      <Heading title={"Our Products"} />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-sm:gap-1 max-md:gap-4 min-lg:gap-5">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductDesign key={product._id} product={product} />
          ))
        ) : (
          <div>No products available</div>
        )}
      </div>
    </div>
  );
};

export default GetProduct;
