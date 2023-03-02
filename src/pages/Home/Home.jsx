import React from "react";
import About from "../../components/About/About";
import BannerTwo from "../../components/Banner/BannerTwo";
import ContactTwo from "../../components/Contact/ContactTwo";
import CountDownTwo from "../../components/CountDown/CountDownTwo";
import CounterArea from "../../components/CounterArea/CounterArea";
import DownloadArea from "../../components/DownloadArea/DownloadArea";
import Faq from "../../components/Faq/Faq";
import Newsletter from "../../components/Newsletter/Newsletter";
import RoadmapTwo from "../../components/Roadmap/RoadmapTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import WhyChooseUsTwo from "../../components/WhyChooseUs/WhyChooseUsTwo";
import Layout from "../../layouts/Layout";

const HomeTwo = () => {
  return (
    <Layout>
      <main>
        <BannerTwo />
        <CounterArea />
        <About />
        <WhyChooseUsTwo />
        <RoadmapTwo />
        <TeamTwo />
        {/* <DownloadArea /> */}
        <Faq />
      </main>
    </Layout>
  );
};

export default HomeTwo;
