import { useState } from "react";
import { Link } from "react-router-dom";

const words = [
  "Grace", "Hallelujah", "Jesus", "Faith", "Glory", 
  "Savior", "Praise", "Mercy", "Hope", "Redeemed",
  "Victory", "Worship", "Deliverance", "Salvation"
];

const SingTheWord = () => {
  const [index, setIndex] = useState(0);

  const nextWord = () => {
    if (index < words.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevWord = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-20 min-h-screen bg-white text-[#63e] p-5">
      <h2 className="text-4xl font-semibold text-center">Your word is:</h2>
      <h1 className="text-9xl font-bold mt-5 text-center">{words[index]}</h1>

      <div className="flex justify-center gap-16 mt-10">
        <button 
          onClick={prevWord} 
          disabled={index === 0}
          className="px-8 py-4 bg-gray-300 text-gray-700 rounded-full text-2xl shadow-md hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>

        <button 
          onClick={nextWord} 
          disabled={index === words.length - 1}
          className="px-8 py-4 bg-[#63e] text-white rounded-full text-2xl shadow-md hover:bg-purple-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {index === words.length - 1 && (
        <Link 
          to="/" 
          className="mt-10 px-8 py-4 bg-[#63e] text-white rounded-full text-2xl shadow-md hover:bg-purple-700 transition-all"
        >
          Home
        </Link>
      )}
    </div>
  );
};

export default SingTheWord;
