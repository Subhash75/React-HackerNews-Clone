import React from "react";


function Body({ title, score, name, number }) {
  let time = Math.floor(Math.random() * (25 - 1) + 1);
  let comments = Math.floor(Math.random() * (250 - 1) + 1);

  let x = Math.floor(Math.random() * (3 - 1) + 1);
  let time1 = "";
  x === 1 ? (time1 = "hours") : (time1 = "minutes"); // line 5 to 9 written because time prop in the api is diff from what i expected

  return (
    <>
      <p>{number}</p>
      <div className="content-body1">
        <p className="title">{title}</p>
        <div className="text">
          <span className="first">
            {score} points by {name} {time} {time1} ago
          </span>
          <span className="second"> hide </span>
          <span className="third">{comments} comments</span>
        </div>
      </div>
    </>
  );
}

export default Body;
