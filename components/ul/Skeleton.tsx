import React from "react";
interface skeleton{
    width: string | number,
    height: string | number,
    borderRadius: string | number
}

const Skeleton = ({ width, height, borderRadius }:skeleton) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;