import React from "react";
import "./card.css";
import ProfileImg from "../profileImage/ProfileImg";

const Card = ({data}) => {

  return (
    <>
      <div className="card">
        <div className="card_container">
          <div className="profile">
            <div className="profile_id">{data.id}</div>
            <ProfileImg  />
          </div>
          <h4 className="card_title">
            {data.title}
          </h4>
          <div className="card_tag">
            <div className="tag_icon">
              <i className="ri-folder-warning-fill icon"></i>
            </div>
            <div className="tag">
              <div className="tag_bullet"></div>
              <div className="tag_val">{data.tag}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
