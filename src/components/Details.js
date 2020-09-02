import React, { useState, useEffect } from "react";
import { ReactiveComponent } from "@appbaseio/reactivesearch";
import { withRouter } from "react-router-dom";

function Details({ match, history }) {
  //const [id, setId] = useState(null);
  let { id } = match.params;

  return (
    <>
      <h1> Details Page </h1>
      {id ? (
        <>
          <button onClick={() => window.history.back()}>Back </button>
          <p> Searching For {id} </p>
          <ReactiveComponent
            componentId="Details" // a unique id we will refer to later
            defaultQuery={() => ({
              query: {
                ids: {
                  type: "_doc",
                  values: id
                }
              }
            })}
            render={({ data }) => {
              console.log(data[0]);
              if (data) {
                return (
                  <>
                    <h1>{}</h1>
                  </>
                );
              } else {
                return "Loading...";
              }
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default withRouter(Details);
