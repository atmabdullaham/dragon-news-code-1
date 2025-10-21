import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="space-y-3">
        {/* GitHub */}
        <button className="btn btn-outline btn-secondary w-full">
          <FaGithub size={24} />
          Login with GitHub
        </button>

        {/* Google */}
        <button className="btn btn-outline btn-primary w-full">
          <FcGoogle size={24} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
