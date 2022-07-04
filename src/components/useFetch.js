import { useEffect, useState } from "react";

function useFetch(start, end) {
  let [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((response) => response.json())
      .then((value) => {
        value.slice(start, end).map((data) => {
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
  return state;
}

export default useFetch;