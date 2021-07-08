import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";
import Products from "./products/Products";
import Product from "./product/Product";
import Vision from "./vision/Vision";
import Error from "./error/Error.jsx";
import CartProvider from "./common/providers/CartProvider";
import Cart from "./cart/Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-3" style={{ height: "calc(100vh - 44px)" }}>
          <Switch>
            <Route exact path={["/eshop-react-app/", "products"]} component={Products} />
            <Route exact path="/eshop-react-app/products/:id" component={Product} />
            <Route exact path="/eshop-react-app/vision" component={Vision} />
            <Route exact patch="/eshop-react-app/cart" component={Cart} />
            <Route exact path="/eshop-react-app/error" component={Error} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
