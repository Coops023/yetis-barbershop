import React from "react";
import "./Services.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Services() {
  return (
    <div className="Services">
      <div className="service-card">
        <LazyLoadImage
          className="service-img"
          src="/haircut.jpeg"
          alt="haircut"
        />
        <div>
          <h3>Mens haircuts</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            laboriosam accusantium animi eos voluptate atque explicabo iure
            cumque? Repellendus praesentium reprehenderit exercitationem ad
            molestias ratione soluta optio perspiciatis quae saepe.
          </p>
        </div>
      </div>
      <div className="service-card">
        <LazyLoadImage className="service-img" src="/shave.jpeg" alt="shave" />
        <div>
          <h3>Beard trims and hot towel shaves</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            earum aliquid corporis nemo consequuntur praesentium, nesciunt
            officia similique provident atque alias quos nobis quidem nam
            sapiente perspiciatis suscipit ullam perferendis.
          </p>
        </div>
      </div>
      <div className="service-card">
        <LazyLoadImage
          className="service-img"
          src="/smp.jpeg"
          alt="hair tattoo"
        />
        <div>
          <h3>Scalp micro pigmentation</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sit!
            Alias corporis exercitationem, eligendi dolores, earum pariatur ea
            iste debitis maxime voluptatem totam molestiae expedita nostrum
            voluptatibus esse natus labore.
          </p>
        </div>
      </div>
    </div>
  );
}
