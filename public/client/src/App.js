import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import { Column, Row } from 'simple-flexbox';
import Header from "./shared-assets/HeaderBanner"
import Menu from "./shared-assets/Menu"

import Jobs from "./pages/jobs"
import Shop from "./pages/shop"
import History from "./pages/history"
import Bonds from "./pages/bonds"
import Transfer from "./pages/transfer"

export default class App extends React.Component {
  render() {
    return (
      <Column
        horizontal="stretch"
        class="grandparentPanel"
        style={{ height: '100vh' }}>
        <Header />
        <Menu />
        <Switch>
          <Route path="/jobs"> <Jobs /> </Route>
          <Route path="/shop"> <Shop /> </Route>
          <Route path="/transfer"> <Transfer /> </Route>
          <Route path="/bonds"> <Bonds /> </Route>
          <Route path="/history"> <History /> </Route>
          <Route path="/"> <Jobs /> </Route>
        </Switch>
      </Column>
    );
  }
}