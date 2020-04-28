import React from "react";
import movies from "../assets/movies.json";

const Section = (props) => {
  const actualNum = props.num;
  const tab = movies[actualNum].images;
  return (
    <>
      <div className="container">
        <p>{props.className}</p>
        <div className="images">
          {tab.map((movie, index) => {
            return <img alt="movie" src={movie} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
