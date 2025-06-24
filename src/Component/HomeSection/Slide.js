import React, { useState } from "react"; // ✅ You need to import useState

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
                <img src={slide.image} alt="Slide Image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Slide;
