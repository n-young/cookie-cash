import React from "react";
import { Route } from "react-router-dom";
import './style.css';

import { Column, Row } from 'simple-flexbox';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Jobs from "./pages/jobs";
import Shop from "./pages/shop";
import History from "./pages/history";
import Bonds from "./pages/bonds";
import Transfer from "./pages/transfer";

export default class App extends React.Component {
  render() {
    return (
      <div class="container">
        <Column>
          <Header />
          <Navbar />
          <Route path="/jobs"> <Jobs /> </Route>
          <Route path="/shop"> <Shop /> </Route>
          <Route path="/transfer"> <Transfer /> </Route>
          <Route path="/bonds"> <Bonds /> </Route>
          <Route path="/history"> <History /> </Route>
        </Column>
      </div>
    );
  }
}