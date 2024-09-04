import React from "react";

function Hero({ two }) {
  // console.log(two);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>{two["title"]}</h1>
                <p className="mb-4">Welcome to FurniFusion,your destination for stylish, high-quality furniture and expert interior design services.Explore our collection,discover inspiring design tips on our blog,and find the perfect pieces to elevate your home.</p>
                <p>
                  <a href="" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
