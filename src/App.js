import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <CustomerList />
    </div>
  );
}

export default App;
