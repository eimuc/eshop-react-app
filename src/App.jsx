import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./nav-bar/NavBar";

function App() {
  return (
    <Router>
      <CartProvider>
        <header>
          <NavBar />
        </header>
        <main className="p-3" style={{ height: "calc(100vh - 44px)" }}>
          <Switch>
            <Route exact path={["/", "products"]} component={Products} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/vision" component={Vision} />
            <Route exact patch="/cart" component={Cart} />
            <Route exact path="/error" component={Error} />
          </Switch>
        </main>
      </CartProvider>
    </Router>
  );
}

export default App;
