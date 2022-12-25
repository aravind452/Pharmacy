import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const [orders, setOrders] = useState("");

  useEffect(() => {
    function getOrders() {
      const products = [
        {
          order_id: "bfdzvs1",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "as6665x",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "abbn652",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "55cac1a",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "sS56S6C",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "656X5X6",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
        {
          order_id: "vs6256ca",
          ordered_by: "abcd@gmail.com",
          product:
            '[{"product_id":1,"quantity":1},{"product_id":2,"quantity":1},{"product_id":3,"quantity":1},{"product_id":4,"quantity":1}]',
        },
      ];

      setOrders(products);
    }

    getOrders();
  }, []);

  return (
    <OrderContext.Provider value={{ orders }}>{children}</OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}
