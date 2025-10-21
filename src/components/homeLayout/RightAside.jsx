import Findus from "./Findus";
import QZone from "./QZone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin></SocialLogin>
      <Findus></Findus>
      <QZone></QZone>
    </div>
  );
};

export default RightAside;
