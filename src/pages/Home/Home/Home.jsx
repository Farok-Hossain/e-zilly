import { Helmet } from "react-helmet";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>EZilly | Home</title>
      </Helmet>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <h1>This is home</h1>
      <Link to="https://www.instagram.com/farok_afs/" target="_blank">
        <FaInstagram />
      </Link>
    </div>
  );
};

export default Home;
