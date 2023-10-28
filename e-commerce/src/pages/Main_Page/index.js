
import { Layout, MainBanner, MenSection, WomenSection, JewelerySection, ExploreSection, SocialSection, SubscribeSection } from '../../Components';
import { useState, useEffect } from 'react';


const Index = () => {

  return (
    <div>
      <Layout>
      <MainBanner />
      <MenSection />
      <WomenSection />
      <JewelerySection />
      <ExploreSection />
      <SocialSection />
      <SubscribeSection />
      </Layout>
    </div>
  )
}

export default Index
