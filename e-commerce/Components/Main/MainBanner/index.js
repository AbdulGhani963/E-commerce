import React from "react";
import BannerImg01 from '../../../Images/left-banner-image.jpg';
import BannerImg02 from '../../../Images/baner-right-image-01.jpg';
import BannerImg03 from '../../../Images/baner-right-image-02.jpg';
import BannerImg04 from '../../../Images/baner-right-image-03.jpg';
import BannerImg05 from '../../../Images/baner-right-image-04.jpg';

const MainBanner = () => {
  return (
    <div className="main-banner" id="top">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <div className="thumb">
                <div class="inner-content">
                  <h4>We Are Hexashop</h4>
                  <span>Awesome, clean &amp; creative HTML5 Template</span>
                  <div class="main-border-button">
                    <a href="#">Purchase Now!</a>
                  </div>
                </div>
                <img
                  src={BannerImg01}
                  alt="banner-left-pic01"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Women</h4>
                        <span>Best Clothes For Women</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Women</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img
                        src={BannerImg02}
                        alt="banner-right-pic01"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Men</h4>
                        <span>Best Clothes For Men</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Men</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img
                        src={BannerImg03}
                        alt="banner-right-pic02"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Kids</h4>
                        <span>Best Clothes For Kids</span>
                      </div>
                      <div className="hover-content">
                        <div class="inner">
                          <h4>Kids</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img
                        src={BannerImg04}
                        alt="banner-right-pic03"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="right-first-image">
                    <div className="thumb">
                      <div className="inner-content">
                        <h4>Accessories</h4>
                        <span>Best Trend Accessories</span>
                      </div>
                      <div className="hover-content">
                        <div className="inner">
                          <h4>Accessories</h4>
                          <p>
                            Lorem ipsum dolor sit amet, conservisii ctetur
                            adipiscing elit incid.
                          </p>
                          <div className="main-border-button">
                            <a href="#">Discover More</a>
                          </div>
                        </div>
                      </div>
                      <img
                        src={BannerImg05}
                        alt="banner-right-pic04"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
