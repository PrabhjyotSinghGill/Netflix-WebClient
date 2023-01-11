import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "../views/Banner.css";

function Banner() {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundColor: "black",
        // backgroundImage: `url("/Netflix.png")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.This is a test description.`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
