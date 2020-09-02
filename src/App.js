import React from "react";
import { ReactiveBase } from "@appbaseio/reactivesearch";
import { Switch, Route } from "react-router-dom";

import Search from "./components/Search";
import Details from "./components/Details";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ReactiveBase
        app="accounts"
        credentials="fd65eac6fa46:a63af03c-20bc-4298-92ad-3b0cbf9b7d8b"
        url="https://vijaygenius123-tkpgozv-arc.searchbase.io"
      >
        <Switch>
          <Route path="/" exact>
            <Search />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </ReactiveBase>
    </div>
  );
}
