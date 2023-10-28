import React from "react";
// import Header from "../../Components/Main/Header";
// import FooterSection from "../../Components/Main/FooterSection";
import SubscribeSection from "../../Components/Main/SubscribeSection";
import AboutBanner from "../../Components/About/AboutBanner";
import AboutSection from "../../Components/About/AboutSection";
import TeamSection from "../../Components/About/TeamSection";
import ServicesSection from "../../Components/About/ServicesSection";
import Layout from "../../Components/Layout/Layout";


const Index = () => {
  return (
    <>
      {/* <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div> */}

      <Layout>
      <AboutBanner />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <SubscribeSection />
      </Layout>
    </>
  );
};

export default Index;
