import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useProducts } from "../../ContextAPI/ProductsContext";
import "./CartPage.css";
import toast, { Toaster } from "react-hot-toast";
import { useUserAuth } from "../../ContextAPI/UserAuthContext";

const CartPage = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const { products } = useProducts();

  const { user } = useUserAuth();

  const notify = () =>
    toast.success("Order Placed Successfully : )", {
      style: {
        width: "500px",
        padding: "15px",
        background: "#044599",
        color: "white",
        fontSize: "18px",
        fontWeight: "500",
      },
    });

  const notifyNoProducts = () =>
    toast.error("No Products in Cart, Shop Now!!!", {
      style: {
        width: "600px",
        padding: "15px",
        background: "#044599",
        color: "white",
        fontSize: "18px",
        fontWeight: "500",
      },
    });

  const notifyClearCart = () =>
    toast.success("Cart is empty, Shop Now!!!", {
      style: {
        width: "600px",
        padding: "15px",
        background: "#044599",
        color: "white",
        fontSize: "18px",
        fontWeight: "500",
      },
    });

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

  function generateID() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  function handleBuy() {
    if (cartProducts) {
      let buyOrder = {
        order_id: "",
        ordered_by: "",
        product: "",
      };

      buyOrder.ordered_by = user.email;
      buyOrder.order_id = generateID();
      buyOrder.product = localStorage.getItem("cartProducts");

      console.log(buyOrder);
      notify();
      setCartProducts("");
      setTotalValue(0);
      localStorage.removeItem("cartProducts");
    } else if (!cartProducts) {
      notifyNoProducts();
    }
  }

  function handleClearCart() {
    if (cartProducts) {
      setCartProducts("");
      localStorage.removeItem("cartProducts");
      setTotalValue(0);
      notifyClearCart();
    } else if (!cartProducts) {
      notifyNoProducts();
    }
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
                      className="close-btn-cart"
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1/1766.png"
                        alt="close"
                      ></img>
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
          <button onClick={handleBuy}>Buy Now</button>
          <button onClick={handleClearCart}>Clear Cart</button>
        </div>
      </div>
      <div className="toastOrder">
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
};

export default CartPage;
