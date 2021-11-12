import "./App.css";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import ShopPage from "./pages/shop/Shop";
import FormPage from "./pages/form/FormPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={FormPage} />
      </Switch>
    </div>
  );
}

export default App;
