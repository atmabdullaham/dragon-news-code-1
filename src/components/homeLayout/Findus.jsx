import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaSquareXTwitter } from "react-icons/fa6";

const Findus = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-base-100 justify-start join-item">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaSquareXTwitter />
            Twitter
          </button>
          <button className="btn bg-base-100 justify-start join-item">
            <FaInstagramSquare />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default Findus;
