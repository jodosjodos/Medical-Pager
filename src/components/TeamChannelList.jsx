import React from "react";
import { AddChannel } from "../assets";

const TeamChannelList = ({ Children, error = false, loading, type }) => {
  if (error) {
    return type === "team" ? (
      <div className="team-channel-list">
        <p className="team-channel-list__message">
          {" "}
          Connection error, please wait a moment and try agai
        </p>
      </div>
    ) : null;
  }
  if(loading){
    return (
        <div className="team-channel-list">
        <p className="team-channel-list__message loading">
         {type==="team"?"channels":"Messages"} loading....
        
        </p>
      </div>
    )
  }
  return <div className="team-channel-list">
    <div className="team-channel-list__header">
        <p className="team-channel-list__header__title"></p>
        {type==="team"?"channels":"Direct MEssage"}
        {/* Button to add Channel */}

    </div>
    {Children}
  </div>;
};

export default TeamChannelList;
