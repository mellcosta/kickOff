import { Link } from "react-router-dom";
import { GiMicrophone } from "react-icons/gi";
import { FaBookOpen } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#63e_100%)]"></div>
      <div className="flex flex-col items-center justify-center gap-20 text-[#63e]  ">
        <header className="flex flex-col items-center justify-center mt-15">
          <h1 className="text-8xl font-bold">Dream Team</h1>
          <h2 className="text-8xl font-light italic text-white bg-[#63e] rounded-full p-5">Kickoff</h2>
        </header>

        <main>
          <h3 className="text-6xl">Games</h3>
          <ul className="flex items-center text-center gap-10 w-full mt-10">
            <li>
              <Link to="/sing-the-word">
                <GameCard icon={<GiMicrophone size={200} />} title="Sing The Word" />
              </Link>
            </li>
            <li>
              <Link to="/complete-the-verse">
                <GameCard icon={<FaBookOpen size={200} />} title="Complete The Verse" />
              </Link>
            </li>
            <li>
              <Link to="/guess-the-character">
                <GameCard icon={<BsPerson size={200} />} title="Guess The Bible Character" />
              </Link>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
};

const GameCard = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center w-72 h-80 text-4xl gap-5 text-white bg-[#63e] p-5 rounded-3xl shadow-lg hover:scale-105 transition-transform">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default Home;
