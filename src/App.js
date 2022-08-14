import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Books from "./pages/Books";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BookDetails from "./pages/BookDetails";
import Admin from "./pages/Admin";
// Components
import Header from "./components/Header";
import Getshops from "./pages/Searchshop"
// Amplify Configurations
import awsExports from "./aws-exports";
import Fetchbook from './pages/Fetchbook';
import CreateShop from './pages/CreateShop'
import Slotbook from './pages/Slotbook'
Amplify.configure(awsExports);

const App = () => {
  return (
 
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/products">
          <Books />
        </Route>
        <Route
          path="/products/:id"
          children={<BookDetails></BookDetails>}
        ></Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/createshop">
          <CreateShop/>
        </Route>
        <Route path="/searchshop">
          <Getshops/>
        </Route>
        {/* <Route
          exact path="/searchshop/:id" component={Slotbook}  
        >
        </Route> */}
        <Route path="/searchproduct">
          <Fetchbook />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
