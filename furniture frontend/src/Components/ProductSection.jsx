import React from "react";
import CardProductList from "./CardProductList";

function ProductSection() {
  return (
    <>
      <div className="product-section">
        <div className="container">
          <div className="row">
            {/* Start Column 1 */}
            
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">
                Crafted with excellent material.
              </h2>
              <p className="mb-4">
              Explore our curated collection of premium chairs,each designed with both style and comfort in mind.From modern to classic, our furniture pieces are crafted with the finest materials to ensure durability and elegance. Whether you’re looking to refresh your living room or add a statement piece to your office, our selection offers something for every taste.{" "}
              </p>
              <p>
                <a href="shop.html" className="btn">
                  Explore
                </a>
              </p>
            </div>
            {/* End Column 1 */}
            {/* Start Column 2 */}
            <CardProductList
              one={{
                productImage: "images/product-1.png",
                productName: "Nordic Chair",
                productPrice: "Rs.500.00",
              }}
            />
            {/* End Column 2 */}
            {/* Start Column 3 */}
            <CardProductList
              one={{
                productImage: "images/product-2.png",
                productName: "Kruzo Aero Chair",
                productPrice: "Rs.780.00",
              }}
            />
            {/* End Column 3 */}
            {/* Start Column 4 */}
            <CardProductList
              one={{
                productImage: "images/product-3.png",
                productName: "Ergonomic Chair",
                productPrice: "Rs.4300.00",
              }}
            />
            {/* End Column 4 */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
