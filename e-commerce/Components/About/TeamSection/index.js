import React from 'react';
import TeamPic from '../../../Images/team-member-01.jpg';

const TeamSection = () => {
  return (
    <section className="our-team">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Our Amazing Team</h2>
                        <span>Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-item">
                        <div className="thumb">
                            <div className="hover-effect">
                                <div className="inner-content">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <img src={TeamPic} alt='team-pic01' />
                        </div>
                        <div className="down-content">
                            <h4>Ragnar Lodbrok</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-item">
                        <div className="thumb">
                            <div className="hover-effect">
                                <div className="inner-content">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <img src={TeamPic} alt='team-pic02' />
                        </div>
                        <div className="down-content">
                            <h4>Ragnar Lodbrok</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-item">
                        <div className="thumb">
                            <div className="hover-effect">
                                <div className="inner-content">
                                    <ul>
                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <img src={TeamPic} alt='team-pic03' />
                        </div>
                        <div className="down-content">
                            <h4>Ragnar Lodbrok</h4>
                            <span>Product Caretaker</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSection
