import React from "react";
import { useModal } from "../../utils/ModalContext";
import About from "../../components/About/About";
import BannerTwo from "../../components/Banner/BannerTwo";
import CounterArea from "../../components/CounterArea/CounterArea";
import Faq from "../../components/Faq/Faq";
import RoadmapTwo from "../../components/Roadmap/RoadmapTwo";
import TeamTwo from "../../components/Team/TeamTwo";
import WhyChooseUsTwo from "../../components/WhyChooseUs/WhyChooseUsTwo";
import Layout from "../../layouts/Layout";
import WalletModal from "../../components/modal/walletModal/WalletModal";
import MetamaskModal from "../../components/modal/metamaskModal/MetamaskModal";


const HomeTwo = () => {
  const { walletModalvisibility, metamaskModal } = useModal();
  return (
    <Layout>
      <main>
      {walletModalvisibility && <WalletModal />}
        {metamaskModal && <MetamaskModal />}
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
