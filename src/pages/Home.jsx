import React, { useState, useEffect } from "react";
import MovieContainer from "../components/MovieContainer";
import SeriesContainer from "../components/SeriesContainer";

function Home() {
  return (
    <>
      <div>
        <div className="background-hero-home container-fluid mx-auto">
          <div className="hero ms-5 text-light d-flex flex-column align-content-center justify-content-center">
            <h1 className="text-size text-start">Money Heist</h1>
            <p className="">
              This original Netflix series, originally titled La Casa de Papel,
              follows the Professor (Álvaro Morte), a criminal mastermind who
              brings eight thieves together to take hostages.
            </p>
            <div className="mb-4">
              <span>2013</span>
              <button className="btn btn-outline-light ms-2 py-1 tv-s shadow">
                TV Series
              </button>
            </div>
            <div>
              <button className="btn btn-watch text-light py-2 px-5 fs-4 shadow">
                WATCH NOW!
              </button>
            </div>
          </div>
        </div>
      </div>
      <SeriesContainer />
      <MovieContainer />
    </>
  );
}

export default Home;
