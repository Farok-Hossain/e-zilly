import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly bg-slate-300 h-32 ">
      <div className="flex flex-row justify-start gap-40">
        <div>
          <h1 className="text-orange-600 uppercase text-xl">Services</h1>
          <p>Branding</p>
          <p>Design</p>
          <p>Marketing</p>
          <p>Advertisement</p>
        </div>
        <div>
          <h1 className="text-orange-600 uppercase text-xl">Company</h1>
          <h4>About us</h4>
          <h4>Contact</h4>
          <h4>Jobs</h4>
          <h4>Press kit</h4>
        </div>
      </div>
      <div>
        <p className="text-orange-600 uppercase text-xl mb-4 ">Social</p>

        <div className="flex gap-3">
          <Link
            to="https://www.linkedin.com/in/farok-hossain-008444202/"
            target="_blank"
            className="text-green-600 text-3xl hover:text-4xl hover:text-pink-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://github.com/Farok-Hossain"
            target="_blank"
            className="text-green-600 text-3xl hover:text-4xl hover:text-pink-500"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.instagram.com/farok_afs/"
            target="_blank"
            className="text-green-600 text-3xl hover:text-4xl hover:text-pink-500"
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=100006429429427"
            target="_blank"
            className="text-green-600 text-3xl hover:text-4xl hover:text-pink-500"
          >
            <FaFacebookSquare />
          </Link>
          <Link
            to="https://x.com/farok_afs"
            target="_blank"
            className="text-green-600 text-3xl hover:text-4xl hover:text-pink-500"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
