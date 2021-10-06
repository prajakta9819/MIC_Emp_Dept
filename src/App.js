import React, { useEffect } from "react";
import "./styles.css";

import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Department from "./pages/Dept/Department";
import Employee from "./pages/Emp/Employee";
import { useDispatch } from "react-redux";
import { storeDataInLocalStorage } from "./redux/actions/actions";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(storeDataInLocalStorage());
  }, []);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/department">
          <Department />
        </Route>
      </Switch>
      <Route path="/employee">
        <Employee />
      </Route>
      <Footer />
    </div>
  );
}
