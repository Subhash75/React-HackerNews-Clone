import React, { useEffect, useState } from "react";
import Body from "./Body";
import useFetch from './useFetch'

function New() {
 

  let state = useFetch(21, 41);
  
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

export default New;
