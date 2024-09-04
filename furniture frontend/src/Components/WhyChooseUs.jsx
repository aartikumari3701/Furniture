import React from "react";

function WhyChooseUs() {
  return (
    <>
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                At FurniFusion,we are committed to making your furniture shopping experience exceptional. From our carefully curated collections to our top-notch customer service, we strive to exceed your expectations at every step.
                Here’s why thousands of customers trust us with their home decor needs.
              </p>
              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/truck.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Enjoy fast and reliable delivery right to your doorstep at no extra cost. We understand that when you find the perfect piece, you want it in your home as quickly as possible.
                      That’s why we offer free shipping on all orders,ensuring you get your new furniture without the wait.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/bag.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      We’ve designed our website with you in mind. Enjoy a seamless shopping experience with easy navigation, detailed product descriptions, and high-quality images. Our intuitive platform makes it simple to find what you’re looking for,
                      whether you’re browsing on a computer, tablet, or smartphone.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/support.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Have a question or need assistance? Our dedicated customer support team is available 24/7 to help you. Whether you need help choosing the right product, tracking your order,
                      or resolving any issue, we’re here for you—day or night.
                    </p>
                  </div>
                </div>
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img
                        src="images/return.svg"
                        alt="Image"
                        className="imf-fluid"
                      />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      We’re confident you’ll love your new furniture, but if for any reason it’s not a perfect fit, our hassle-free return policy has you covered. Simply return the item within the specified period,
                      and we’ll take care of the rest—no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-wrap">
                <img
                  src="images/why-choose-us-img.jpg"
                  alt="Image"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
