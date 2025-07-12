import React, { useState } from "react";
import "./Home.css";

const Slide = ({ Slides }) => {
  const [current, setCurrent] = useState(0);
  const length = Slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        {/* ✅ Useful navigation buttons kept */}
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Slides.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && <img src={slide.images} alt="Slide" />}
          </div>
        ))}
      </section>

      {/* ✅ Form kept if you actually use it */}
      <section className="slide-form">
        <div className="container">
          <h2>Enjoy your holiday</h2>
          <span>Search and book hotel</span>
          <form>
            <input type="text" placeholder="Search City" />
            <div className="flex_space">
              <input type="date" />
              <input type="date" />
            </div>
            <div className="flex_space">
              <input type="number" placeholder="Adults (18+)" />
              <input type="number" placeholder="Children (0-17)" />
            </div>
            <input type="number" placeholder="Rooms" />
            <input type="submit" value="Search" className="submit" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Slide;
