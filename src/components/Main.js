import React, { useState, useEffect } from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ seletedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[seletedPunk]);
  }, [punkListData, seletedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_url}
              alt="punk"
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}
          <span className="itemNumber"> .#{activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url} alt="" />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>
                    {activePunk.owner.address}
                </div>
                <div className="ownerHandle">@ahmedhakeem</div>
              </div>
              <div className="ownerLink">
                <img src={instagramLogo} alt="instagram" />
              </div>
              <div className="ownerLink">
                <img src={twitterLogo} alt="instagram" />
              </div>
              <div className="ownerLink">
                <img src={moreIcon} alt="instagram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
