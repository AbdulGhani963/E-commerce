import React, { useEffect, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

import ReactOwlCarousel from "react-owl-carousel";
import JeweleryProducts from './JeweleryProducts';

const JewelerySection = () => {
  const [jewelerys, setJewelerys] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery').then((response) => {
      response.json().then((result) => {
        setJewelerys(result);
      })
    });
  },[])

  const picResponsive ={
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
   }
  }

  return (
    <div>
      <section className="section" id="kids">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Jewelery's Latest</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ReactOwlCarousel
                className="owl-carousel owl-theme"
                loop
                margin={30}
                nav
                responsive={picResponsive.responsive}
              >
                <JeweleryProducts products={jewelerys}/>
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JewelerySection;
