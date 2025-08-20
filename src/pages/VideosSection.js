// import VideoCards from "./Video";
import VideoCards from "./SmallVideoCards";

let VideoSec = () => {
  return (
    <div className=" flex flex-col items-center m-[50px] gap-[40px] max-[360px]:m-[20px]">
      <h1 className=" text-[36px] font-bold max-[360px]:text-[25px]">Moments, Made Timeless</h1>
      <div className=" w-[100%] flex flex-wrap justify-between max-[360px]:gap-[20px] max-[360px]:flex-col">
        <VideoCards videopart="/Video/video1.mp4" />
        <VideoCards videopart="/Video/video2.mp4" />
        <VideoCards videopart="/Video/video3.mp4" />
      </div>
    </div>
  );
};
export default VideoSec;
