import React from "react";

const BackGroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      // className=" w-[100%]  h-auto  max-[360px]:h-[1000px] object-cover mt-[30px] -z-10"
      className=" top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none max-[360px]:h-[100vh]"
      src="Video/BG Video.mp4"
    />
  );
};

export default BackGroundVideo;
