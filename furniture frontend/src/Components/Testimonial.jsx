import React, { useState } from "react";

const testimonials = [
  {
    quote: "“FurniFusion transformed my living room! The Nordic Chair is both stylish and comfortable, and it fits perfectly with my modern décor. I highly recommend their products for anyone looking to upgrade their home.",
    name: "Aarti Kumari",
    position: "web developer.",
    image: "images/aarti.jpg",
  },
  {
    quote: "“Another testimonial example...",
    name: "Chiya",
    position: "web developer.",
    image: "images/person-1.png",
  },
  {
    quote: "“A different testimonial...",
    name: "Rajendra Jangid",
    position: "Lead Developer, Upflairs Ltd.",
    image: "images/person-1.png",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <div id="testimonial-nav">
                <span className="prev" onClick={prevSlide}>
                  <span className="fa fa-chevron-left" />
                </span>
                <span className="next" onClick={nextSlide}>
                  <span className="fa fa-chevron-right" />
                </span>
              </div>
              <div className="testimonial-slider">
                {testimonials.map((testimonial, index) => (
                  <div
                    className={`item ${index === currentIndex ? "active" : ""}`}
                    key={index}
                    style={{
                      display: index === currentIndex ? "block" : "none",
                    }}
                  >
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>{testimonial.quote}</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="img-fluid"
                              />
                            </div>
                            <h3 className="font-weight-bold">
                              {testimonial.name}
                            </h3>
                            <span className="position d-block mb-3">
                              {testimonial.position}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
