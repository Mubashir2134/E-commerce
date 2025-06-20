// import VideoCards from "./Video";
import VideoCards from "./SmallVideoCards";

let VideoSec = () => {
  return (
    <div className=" flex flex-col items-center mt-[70px]">
      <h1 className=" text-3xl font-bold">Moments, Made Timeless</h1>
      <div className=" w-[100%] flex flex-wrap justify-between px-[40px]">
        <VideoCards videopart="/Video/video1.mp4" />;
        <VideoCards videopart="/Video/video2.mp4" />;
        <VideoCards videopart="/Video/video3.mp4" />;
      </div>
    </div>
  );
};
export default VideoSec;
