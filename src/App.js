import React from "react";
import {
  ReactiveBase,
  MultiList,
  ReactiveList
} from "@appbaseio/reactivesearch";
import "./styles.css";

const faucets = [
  { dataField: "genres.keyword", componentId: "Genres" },
  { dataField: "original_language.keyword", componentId: "Language" }
];

const dependsOn = (name) => {
  return faucets
    .filter((faucet) => faucet.componentId !== name)
    .map((faucet) => faucet.componentId);
};

export default function App() {
  return (
    <div className="App">
      <ReactiveBase
        app="accounts"
        credentials="fd65eac6fa46:a63af03c-20bc-4298-92ad-3b0cbf9b7d8b"
        url="https://vijaygenius123-tkpgozv-arc.searchbase.io"
      >
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            {faucets.map((faucet) => (
              <MultiList
                key={faucet.componentId}
                dataField={faucet.dataField}
                componentId={faucet.componentId}
                URLParams
                size={5}
                react={{ and: dependsOn(faucet.componentId) }}
              />
            ))}
          </div>
          <div style={{ flex: 2 }}>
            <ReactiveList
              componentId="SearchResult"
              react={{
                and: ["Genres", "Language"]
              }}
              pagination={true}
              dataField="original_title"
              size={5}
              showLoader={true}
              loader="Loading..."
              renderItem={(res) => (
                <div key={res._id} onClick={() => {}}>
                  <h4>{res.original_title}</h4>
                  <h5>{res.original_language}</h5>
                  <p>{res.tagline}</p>
                </div>
              )}
            />
          </div>
        </div>
      </ReactiveBase>
    </div>
  );
}
