import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useProducts } from "../../ContextAPI/ProductsContext";
import "./CartPage.css";
const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { products } = useProducts();

  useEffect(() => {
    function getProducts() {
      setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
    }

    getProducts();
  }, []);

  useEffect(() => {
    function calcTotal() {
      let totalPrice = 0;
      cartProducts.forEach((item) => {
        totalPrice =
          totalPrice +
          products.filter((prod) => prod.product_id === item.product_id)[0]
            .product_price *
            item.quantity;
      });
      setTotalValue(totalPrice);
    }
    if (products && cartProducts) {
      calcTotal();
    }
  }, [products, cartProducts]);

  function handleRemove(product_id) {
    let cartItem = [];
    cartItem = cartProducts.filter((prod) => prod.product_id !== product_id);
    setCartProducts(cartItem);
    localStorage.setItem("cartProducts", JSON.stringify(cartItem));
  }

  return (
    <div className="cart-section">
      <Navbar />
      <div className="cart-container">
        <h1>My Cart</h1>
        <div className="cart-wrapper">
          <table>
            <tr>
              <th>S.NO</th>
              <th>Item Name</th>
              <th>MRP</th>
              <th>QTY</th>
              <th>NET</th>
              <th>ACT</th>
            </tr>
            {cartProducts && products && cartProducts.length ? (
              cartProducts.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {
                      products.filter(
                        (prod) => prod.product_id === item.product_id
                      )[0].product_name
                    }
                  </td>
                  <td>
                    {
                      products.filter(
                        (prod) => prod.product_id === item.product_id
                      )[0].product_price
                    }
                  </td>
                  <td>{item.quantity}</td>
                  <td>
                    {products.filter(
                      (prod) => prod.product_id === item.product_id
                    )[0].product_price * item.quantity}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item.product_id);
                      }}
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={"6"}>No Products in the Cart</td>
              </tr>
            )}
            <tr>
              <td colSpan={"5"} className="cart-total">
                <b>Total</b>
              </td>
              <td>
                <b>{totalValue && totalValue}</b>
              </td>
            </tr>
          </table>
        </div>
        <div className="button-container">
          <button>Buy Now</button>
          <button>Clear Cart</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
