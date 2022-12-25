import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState("");

  useEffect(() => {
    function getProducts() {
      const products = [
        {
          product_id: 1,
          product_name: "Paracetamol",
          product_price: 19,
        },
        {
          product_id: 2,
          product_name: "Neurobin",
          product_price: 70,
        },
        {
          product_id: 3,
          product_name: "Dolo 650",
          product_price: 20,
        },
        {
          product_id: 4,
          product_name: "Saridon",
          product_price: 45,
        },
        {
          product_id: 5,
          product_name: "Citrusin",
          product_price: 50,
        },
        {
          product_id: 6,
          product_name: "Azithromycin",
          product_price: 70,
        },
        {
          product_id: 7,
          product_name: "Ascoril",
          product_price: 80,
        },
      ];

      setProducts(products);
    }

    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
