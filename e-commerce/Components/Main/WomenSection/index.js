import React, { useState, useEffect } from "react";
// import { fetchingData } from "../../Redux/Slices/fetchApi";
// import { useDispatch, useSelector } from "react-redux";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import ReactOwlCarousel from "react-owl-carousel";
import WomenProducts from "./WomenProducts";


const WomenSection = (props) => {
  const [womenProducts, setWomenProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing?limit=6").then((response) => {
      response.json().then((result) => {
        setWomenProducts(result);
      }) 
    });
  }, []);
  
  // let path = "category/women's clothing?limit=6";
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchingData(path));
  // },[]);
  // const womenProducts = useSelector((state)=> state.fetchApi.data);

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
      <section className="section" id="women">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Women's Latest</h2>
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
                <WomenProducts products={womenProducts} />
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenSection;
