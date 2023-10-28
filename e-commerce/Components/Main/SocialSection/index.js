import React from 'react'
import SocialImage from '../../../Images/instagram-01.jpg';

const SocialSection = () => {
  return (
    <>
     <section className="section" id="social">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Social Media</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row images">
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>Fashion</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image01" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>New</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image02" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>Brand</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image03" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>Makeup</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image04" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>Leather</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image05" />
                    </div>
                </div>
                <div className="col-2">
                    <div className="thumb">
                        <div className="icon">
                            <a href="http://instagram.com">
                                <h6>Bag</h6>
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                        <img src={SocialImage} alt="social-image06" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SocialSection
