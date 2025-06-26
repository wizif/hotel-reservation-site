import React from "react";
import AboutCard from "./AboutCard";
import HeadTitle from "../../common/HeadTitle/HeadTitle";
import featureImg from "../images/feature-img-1.jpg"
const About = () => {
  return (
    <>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              our <span>Features</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum id
              quibusdam dolore.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum id
              quibusdam dolore.
            </p>

            <button className="secondary-btn">
              Explore more <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img src={featureImg} alt="image here" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
