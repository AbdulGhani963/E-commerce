import React from "react";

// import Image01 from "../Images/men-01.jpg";
// import Image02 from "../Images/women-01.jpg";
// import Image03 from "../Images/kid-01.jpg";

// const PRODUCTS_LIST = [
//   {
//     image: Image01,
//   },
//   {
//     image: Image02,
//   },
//   {
//     image: Image03,
//   },
// ];

const ProductsList = (props) => {
  return (
    <>
      <section className="section" id="products">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Our Latest Products</h2>
                <span>Check out all of our products.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {props.products.map((list) => {
              return (
                <div class="col-lg-4">
                  <div>
                    <div className="item">
                      <div className="thumb">
                        <div className="hover-content">
                          <ul>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-eye"></i>
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-star"></i>
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">
                                <i className="fa fa-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <img style={{height:'390px'}} src={list.image} alt="men-pic01" />
                      </div>
                      <div className="down-content">
                        <h4>Classic Spring</h4>
                        <span>$120.00</span>
                        <ul className="stars">
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                          <li>
                            <i className="fa fa-star"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="pagination">
            <ul>
              <li>
                <a href="#">&lt;</a>
              </li>
              <li className="active">
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#"> &gt; </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsList;
