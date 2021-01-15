import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Appheader from "./component/Appheader.js";
import Sidebar from "./component/sidebar";
import Dashboard from "./pages/Dashboard";
import orders from "./pages/orders";
import Products from "./pages/Products";
import reports from "./pages/reports";
import Transactions from "./pages/Transactions";
import VendorProductUploadForm from "./component/VendorProductUploadForm";
import Signup from "./component/SignUp";
import LogIn from "./component/LogIn";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/Dashboard" exact component={Dashboard} />
            <PrivateRoute path="/orders" component={orders} />
            <PrivateRoute path="/products" component={Products} />
            <Route
              path="/VendorProductUploadForm"
              component={VendorProductUploadForm}
            />
            <PrivateRoute path="/reports" component={reports} />
            <PrivateRoute path="/Transactions" component={Transactions} />
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
