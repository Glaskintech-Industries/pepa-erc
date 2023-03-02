import React from "react";
import RoadmapTwoItem from "./RoadmapTwoItem";

const RoadmapTwo = () => {
  const roadmap_items = [
    {
      roadmapTitle: "Q1 2023 - February",
      title: "Rise from the ashes",
      info: <>Pepa launches the V2 Website<br />
        <li>- New domain URL</li>
        <li>- New Look & more content</li>
        <li>- Web3 dApp connectivity</li>
      </>,
    },
    {
      roadmapTitle: "Q1 2023 - March",
      title: "Kick things up a gear",
      info: (
        <>
          <li>- CMC Listing</li>
          <li>- Coin Gecko Listing</li>
          <li>- dApp Live</li>
          <li>- Pepa Staking w/ rewards</li>
        </>
      ),
    },
    {
      roadmapTitle: "Q2 2023 - April",
      title: "Stronger Foundations",
      info: (
        <>
          <li>- Limited Genesis NFT run</li>
          <li>- Increased LP Pool</li>
          <li>- DAO Voting added to dApp</li>
          <li>- Community marketing wallet</li>
        </>
      ),
    },
    {
      roadmapTitle: "Q2 2023 - May/June",
      title: "Operational",
      info: <><li>- CEX Listing</li>
        <li>- YouTube Reviews</li>
        <li>- Onboard Ambassador</li>
        <li>- LP Staking added</li>
      </>,
    },
    {
      roadmapTitle: "Q3 2023 - August/September",
      title: "Stepping up the Game",
      info: <><li>- NFT Run (Round 2)</li>
        <li>- Cross chain liquidity</li>
        <li>- CEX Listing</li>
        <li>- Execute marketing strategy</li>
      </>,
    },
    {
      roadmapTitle: "Stretch Goals",
      title: "Stepping up the Game",
      info: <><li>- NFT Marketplace</li>
        <li>- Launch Pad</li>
        <li>- Metaverse (UE5)</li>
        <li>+ More in the future</li>
      </>,
    },
  ];

  return (
    <section id="roadmap" className="roadmap-area-two pt-130 pb-100">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title section-title-two text-center mb-65">
              <span className="sub-title">roadmap</span>
              <h2 className="title">
                Pepa Strategy and <br />
                Project Plan
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="roadmap-wrap-two">
              {roadmap_items.slice(0, 4).map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>

            <div className="roadmap-wrap-two bottom">
              {roadmap_items.slice(4, 8).map((x, index) => (
                <RoadmapTwoItem key={index} item={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapTwo;
