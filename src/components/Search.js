import React from "react";
import { MultiList, ReactiveList } from "@appbaseio/reactivesearch";
import { Link } from "react-router-dom";

const faucets = [
  { dataField: "genres.keyword", componentId: "Genres" },
  { dataField: "original_language.keyword", componentId: "Language" }
];

const dependsOn = (name) => {
  return faucets
    .filter((faucet) => faucet.componentId !== name)
    .map((faucet) => faucet.componentId);
};

function Search({ history }) {
  return (
    <>
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
              <div key={res._id}>
                <h4>{res.original_title}</h4>
                <h5>{res.original_language}</h5>
                <p>{res.tagline}</p>
                <Link to={`/details/${res._id}`}>Details ... </Link>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
}

export default Search;
