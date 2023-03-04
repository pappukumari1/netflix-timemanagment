import React from "react";
import DemoCarousel from "../Carousel";
import Navbar from "../navbar/navbar";

const style = {
  position: "absolute",
  right: "15%",
  bottom: "1.25rem",
  left: "15%",
  paddingTop: "1.25rem",
  paddingBottom: "1.25rem",
  color: "#fff",
  textAlign: " center",
  top: "40%",
  left: "10px",
};
const stylee={
  innerWidth:"250px",
  innerHeight:"250px"
}
const Slide = () => {
  return (
    <div >
      <Navbar/>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img
              src="http://image.tmdb.org/t/p/w1280/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div style={style}>
              <h2>Avengers: Infinity War</h2>
              <p>
                As the Avengers and their allies have continued to protect the
                world from threats too large for any one hero to handle, a new
                danger has emerged from the cosmic shadows: Thanos. A despot of
                intergalactic infamy, his goal is to collect all six Infinity
                Stones, artifacts of unimaginable power, and use them to inflict
                his twisted will on all of reality. Everything the Avengers have
                fought for has led up to this moment - the fate of Earth and
                existence itself has never been more uncertain.
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="http://image.tmdb.org/t/p/w1280/wXsQvli6tWqja51pYxXNG1LFIGV.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div style={style}>
              <h2>The Lion King</h2>
              <p>
                A young lion prince is cast out of his pride by his cruel uncle,
                who claims he killed his father. While the uncle rules with an
                iron paw, the prince grows up beyond the Savannah, living by a
                philosophy: No worries for the rest of your days. But when his
                past comes to haunt him, the young prince must decide his fate:
                Will he remain an outcast or face his demons and become what he
                needs to be?
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="http://image.tmdb.org/t/p/w1280/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div style={style}>
              <h2>How to Train Your Dragon: The Hidden World</h2>
              <p>
                As Hiccup fulfills his dream of creating a peaceful dragon
                utopia, Toothless’ discovery of an untamed, elusive mate draws
                the Night Fury away. When danger mounts at home and Hiccup’s
                reign as village chief is tested, both dragon and rider must
                make impossible decisions to save their kind.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
     
    </div>
  );
};
export default Slide;
