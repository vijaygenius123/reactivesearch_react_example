import React from "react";
import { ReactiveBase, MultiList } from "@appbaseio/reactivesearch";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ReactiveBase
        app="https://rtw8rXckj:1debade1-dca9-4e42-b19d-260dc29c4901@vijaygenius123-tkpgozv-arc.searchbase.ioo"
        credentials="admin:admin"
      >
        <MultiList componentId="CitySensor" />
      </ReactiveBase>
    </div>
  );
}
