import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { useProducts } from "../../ContextAPI/ProductsContext";
import "./Homepage.css";
import toast, { Toaster } from "react-hot-toast";

const Homepage = () => {
  const notify = () =>
    toast.success("Successfully Added to Cart!", {
      style: {
        width: "500px",
        padding: "15px",
        background: "#044599",
        color: "white",
        fontSize: "18px",
        fontWeight: "500",
      },
    });

  const { products } = useProducts();

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    function getCartProducts() {
      if (JSON.parse(localStorage.getItem("cartProducts")) !== null) {
        setCartProducts(JSON.parse(localStorage.getItem("cartProducts")));
      }
    }
    getCartProducts();
  }, []);

  function handleAddProduct(product_id) {
    notify();
    let cartProduct = {
      product_id: "",
      quantity: 0,
    };
    cartProduct.product_id = product_id;
    cartProduct.quantity = cartProducts.filter(
      (product) => product.product_id === product_id
    ).length
      ? cartProducts.filter((product) => product.product_id === product_id)[0]
          .quantity + 1
      : 1;
    let totalCartProducts = [
      ...cartProducts.filter((product) => product.product_id !== product_id),
      cartProduct,
    ];

    setCartProducts(totalCartProducts);

    localStorage.setItem("cartProducts", JSON.stringify(totalCartProducts));
  }

  return (
    <div>
      <Navbar />
      <div className="title-div">
        <h1 className="page-title">Our Products</h1>
      </div>

      <div className="medi-card-container">
        <div className="card-wrapper">
          {products &&
            products.map((item, index) => (
              <div className="medi-card" key={index}>
                <h1>
                  <span>{item.product_name}</span>
                </h1>
                <h2>
                  <span
                    style={{
                      fontSize: "15px",
                      textTransform: "uppercase",
                    }}
                  >
                    <b>Price:</b>
                  </span>{" "}
                  <span>&#8377;</span>
                  {item.product_price}
                </h2>
                <div className="button-wrapper">
                  <button
                    onClick={() => {
                      handleAddProduct(item.product_id);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="toastCart">
          <Toaster position="bottom-center" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
