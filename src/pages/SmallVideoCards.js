// import { width } from "@fortawesome/free-solid-svg-icons/faHandHoldingDollar";

function VideoCards({ videopart }) {
  return (
    <video autoPlay loop muted className=" w-[400px] h-[300px]">
      <source src={videopart} className="videopart" />
    </video>
  );
}
export default VideoCards;
