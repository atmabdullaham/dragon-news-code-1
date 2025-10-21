import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";
import swimming from "../../assets/swimming.png";
const QZone = () => {
  return (
    <div className="bg-base-200 p-5">
      <h2 className="font-bold mb-5">Q Zone</h2>
      <div className="space-y-5">
        <img src={swimming} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default QZone;
