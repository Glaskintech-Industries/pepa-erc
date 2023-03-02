import React from "react";

const TeamTwoItem = (props) => {
  return (
    <div className="team-item team-item-two wow fadeInUp" data-wow-delay=".2s">
      <div className="team-thumb">
        <img src={props.item.src} alt={props.item.name} />
      </div>
      <div className="team-content">
        <h2 className="title">{props.item.name}</h2>
        <span>{props.item.designation}</span>

        <ul className="team-social">
          <li>
            <a href="https://t.me/rhysHODL">
              <i className="fab fa-telegram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TeamTwoItem;
