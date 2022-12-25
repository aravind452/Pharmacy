import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import CartPage from "./Pages/CartPage/CartPage";
import { ProductsContextProvider } from "./ContextAPI/ProductsContext";
import { UserDetailsContextProvider } from "./ContextAPI/UserDetailsContext";
import { UserAuthContextProvider } from "./ContextAPI/UserAuthContext";
import ProtectedRoute from "./ContextAPI/ProtectedRoute";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";

function App() {
  return (
    <div>
      <UserDetailsContextProvider>
        <ProductsContextProvider>
          <UserAuthContextProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<LoginPage />} />
                <Route
                  exact
                  path="/home"
                  element={
                    <ProtectedRoute>
                      <Homepage />
                    </ProtectedRoute>
                  }
                />
                <Route exact path="/register" element={<RegisterPage />} />
                <Route
                  exact
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <CartPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  exact
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <OrdersPage />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
        </ProductsContextProvider>
      </UserDetailsContextProvider>
    </div>
  );
}

export default App;
