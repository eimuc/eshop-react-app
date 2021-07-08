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
            <Route exact path={[process.env.PUBLIC_URL + "/", process.env.PUBLIC_URL + "/products"]} component={Products} />
            <Route exact path={process.env.PUBLIC_URL + "/products/:id"} component={Product} />
            <Route exact path={process.env.PUBLIC_URL + "/vision"} component={Vision} />
            <Route exact patch={process.env.PUBLIC_URL + "/cart"} component={Cart} />
            <Route exact path={process.env.PUBLIC_URL + "/error"} component={Error} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
