import React, { useState } from "react"; // ✅ You need to import useState
import "./Home.css"
const Slide = ({ Slides }) => { // ✅ Destructure Slides from props
  const [current, setCurrent] = useState(0);

  const length = Slides.length; // ✅ Use the correct variable name

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // ✅ Fixed variable name and comparison
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // ✅ Should go back, not forward
  };

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        <div className="control-btn">
          <button className="prev" onClick={prevSlide}>
            <i className="fas fa-caret-left"></i>
          </button>
          <button className="next" onClick={nextSlide}>
            <i className="fas fa-caret-right"></i>
          </button>
        </div>

        {Slides.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index} // ✅ `key` should be outside the className
            >
              {index === current && (
                <img src={slide.images} alt="Slide Image" />
              )}
            </div>
          );
        })}
      </section>

      <section className="slide-form">
        <div className="container">
          <h2>Enjoy your holiday</h2>
          <span>Search and book hotel</span>
          <form action="">
            <input type="text" placeholder="Search City" name='' id='' />
            <div className="flex_space">
              <input type="date" placeholder="check in" />
              <input type="date" placeholder="check out" />
            </div>
            <div className="flex_space">
              <input type="number" placeholder="Adults (18+)" />
              <input type="number" placeholder="Children(0-17)" />
            </div>
            <input type="number" placeholder="Rooms" />
            <input type="Submit" value="search" className="submit" />


          </form>
        </div>
      </section>
    </>
  );
};

export default Slide;
