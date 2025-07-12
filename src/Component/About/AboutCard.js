import React from "react";
import aboutImg from "../images/about-img-1.jpg";
const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About us</h4>
          <h1>
            we <span>provide solution</span> to grow your business{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit a distinctio.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            suscipit a distinctio.
          </p>
          <button className="secondary-btn">
            explore more <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src={aboutImg} alt="image here" />
          <div className="control-btn">
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
