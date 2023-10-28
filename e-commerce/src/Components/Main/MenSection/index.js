import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingData } from "../../Redux/Slices/fetchApi";
import { useMemo } from "react";

import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import ReactOwlCarousel from "react-owl-carousel";
import MenProducts from "./MenProducts";

const MenSection = () => {
  // const [mensProducts, setMensProducts] = useState([])
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/men's clothing?limit=4").then((response) => {
  //     response.json().then((result) => {
  //       setMensProducts(result);
  //     }) 
  //   });
  // }, []);

  
  
  let path = "category/men's clothing?limit=4";
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingData(path))
  },[]);

  const mensProducts = useSelector((state) => state.fetchApi.data)

  console.log('\n\n\n....... MEN SECTION ........', mensProducts)

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

  const memoProducts = useMemo(() => <MenProducts products={mensProducts} />,[mensProducts])

  return (
    <div>
      <section className="section" id="men">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Men's Latest</h2>
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
                margin={30}
                nav
                loop
                responsive={picResponsive.responsive}
              >
                  {memoProducts}
              </ReactOwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenSection;
