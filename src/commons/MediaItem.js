import React from "react";
import noImage from "../assets/images/no-image.png";

const MediaItem = ({ data }) => {
  const imgItem = data.poster_path_thumb ? data.poster_path_thumb : noImage;
  return (
    <div className="item">
      <div className="poster">
        <img src={imgItem} alt={data.title} />
      </div>
      <div className="title">{data.title ? data.title : data.name}</div>
    </div>
  );
};

export default MediaItem;
