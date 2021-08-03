import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Header from "../Header";
import Home from "../Home";
import { Board } from "../Board";

export default function Layout() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Redirect exact path="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/board" component={Board} />
          </Switch>
        </main>
      </BrowserRouter>
    </RecoilRoot>
  );
}
