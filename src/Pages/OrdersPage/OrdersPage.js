import Navbar from "../../Components/Navbar/Navbar";
import { useOrders } from "../../ContextAPI/OrdersContext";
import { useProducts } from "../../ContextAPI/ProductsContext";
import "./OrdersPage.css";

const OrdersPage = () => {
  const { products } = useProducts();
  const { orders } = useOrders();

  return (
    <div>
      <Navbar />
      <div className="my-order-section">
        <h1>My Orders</h1>
        <div className="order-card-wrapper">
          {orders && products && orders.length ? (
            orders.map((ord, index) => (
              <div className="card-order">
                <h4 className="order-id-title">Order ID: {ord.order_id}</h4>
                <table>
                  <tr>
                    <th>PRODUCT NAME</th>
                    <th>PRICE</th>
                    <th>QTY</th>
                    <th>NET</th>
                  </tr>
                  {JSON.parse(ord.product).map((item, index) => (
                    <tr key={index}>
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
                    </tr>
                  ))}
                </table>
              </div>
            ))
          ) : (
            <table>
              <tr>
                <th>PRODUCT NAME</th>
                <th>QTY</th>
                <th>NET</th>
              </tr>
              <tr>
                <td colSpan={"6"}>No Products in the Cart</td>
              </tr>
              <tr></tr>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
