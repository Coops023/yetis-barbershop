import React from "react";
import BookBtn from "../components/BookBtn";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-overlay">
          <img
            className="yeti-banner"
            src="./yeti_banner.png"
            alt="company logo"
            width={200}
            height={200}
          />
          <p>Yeti's Barbershop</p>
          <BookBtn />
        </div>
      </header>
      <section className="home-content">
        <div className="home-about-us">
          <img className="about-img" src="/yetis-about.jpeg" alt="haircut" />
          <div>
            <h3>About us</h3>
            <p>
              Here at yeti's we specialize in all mens styles, from modern to
              classic, beard trims, hot towel shaves and scalp micro
              pigmentation (SMP). With the best barbers in the business, a
              carefully curated playlist and a chill place to hang out and have
              a beer make for a one-of-kind experience.
            </p>
          </div>
        </div>
        <div className="home-location">
          <img
            className="location-img"
            src="/kangaroo-point.jpg"
            alt="suburb"
          />
          <div>
            <h3>Location</h3>
            <p>
              Yeti's is located at 616 Main St, Kangaroo Point QLD. Kangaroo
              Point, considered one of Brisbane's oldest suburbs, is situated
              just outside of the city above the Brisbane River.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
