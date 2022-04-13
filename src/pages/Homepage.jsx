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
          <img src="#" alt="haircut" />
          <h3>About us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quas, alias aspernatur aliquam quis dolore vel aliquid delectus aut
            tempora architecto consequuntur tenetur non pariatur quaerat,
            cupiditate modi vitae magnam.
          </p>
        </div>
        <div className="home-location">
          <img src="#" alt="suburb" />
          <h3>Location</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            quas, alias aspernatur aliquam quis dolore vel aliquid delectus aut
            tempora architecto consequuntur tenetur non pariatur quaerat,
            cupiditate modi vitae magnam.
          </p>
        </div>
      </section>
    </div>
  );
}
