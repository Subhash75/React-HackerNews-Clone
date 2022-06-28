import React, { useEffect, useState } from "react";
import Body from "./Body";

function Fetch() {
  let [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((value) => {
        value.slice(41, 61).map((data) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${data}.json?print=pretty`
          )
            .then((response) => response.json())
            .then((value) => {
              setState((state) => {
                return [...state, value];
              });
            });
        });
      });
  }, []);
  
  return (
    <>
      {state.map((value, index) => {
        return (
          <React.Fragment key={value.id}>
            <a href={value.url}>
              <div className="content-body">
                <Body
                  number={index + 1}
                  title={value.title}
                  score={value.score}
                  name={value.by}
                  time={value.time}
                />
              </div>
            </a>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Fetch;
