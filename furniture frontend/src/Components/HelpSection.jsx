import React from "react";

function HelpSection() {
  return (
    <>
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1">
                  <img src="images/img-grid-1.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-2">
                  <img src="images/img-grid-2.jpg" alt="Untree.co" />
                </div>
                <div className="grid grid-3">
                  <img src="images/img-grid-3.jpg" alt="Untree.co" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">
                We Help You Make Modern Interior Design
              </h2>
              <p>
              Transform your living space with our stylish and contemporary furniture.Our collection is designed to bring comfort and elegance to your home.
              </p>
              <ul className="list-unstyled custom-list my-4">
                <li>Elegant Designs:Discover a range of furniture that combines modern aesthetics with functionality.</li>
                <li>Quality Materials:We use only the finest materials to ensure durability and comfort.</li>
                <li>Affordable Prices:Enjoy premium furniture without breaking the bank.</li>
                <li>Explore our collection and find the perfect pieces to elevate your home decor.</li>
              </ul>
              <p>
                <a herf="#" className="btn">
                  Explore
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpSection;
