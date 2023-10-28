import React from "react";
import { Layout, SubscribeSection } from "../../Components";
import ContactBanner from "../../Components/Contact/ContactBanner";
import ContactSection from "../../Components/Contact/ContactSection";

const Index = () => {
  return (
    <>
      {/* <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>   */}

      <Layout>
        <ContactBanner />
        <ContactSection />
        <SubscribeSection />
      </Layout>
    </>
  );
};

export default Index;
