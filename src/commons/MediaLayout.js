import React from "react";
import "../assets/styles/mediaLayout.scss";

const MediaLayout = ({ title, children }) => {
  return (
    <div className="media-layout">
      <div className="title">{title}</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default MediaLayout;
