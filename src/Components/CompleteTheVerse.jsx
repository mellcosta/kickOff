import { useState } from "react";
import { Link } from "react-router-dom";

const verses = [
  { text: "The Lord is my _____; I shall not want. (Psalm 23:1)", answer: "shepherd" },
  { text: "I can do all things through _____ who strengthens me. (Philippians 4:13)", answer: "Christ" },
  { text: "For God so loved the world that He gave His only _____ Son. (John 3:16)", answer: "begotten" },
  { text: "Trust in the Lord with all your _____, and lean not on your own understanding. (Proverbs 3:5)", answer: "heart" },
  { text: "In the beginning, God created the _____ and the earth. (Genesis 1:1)", answer: "heavens" },
  { text: "Be still, and know that I am _____. (Psalm 46:10)", answer: "God" },
  { text: "The joy of the Lord is your _____. (Nehemiah 8:10)", answer: "strength" },
  { text: "We walk by faith, not by _____. (2 Corinthians 5:7)", answer: "sight" },
  { text: "Jesus said, 'I am the way, the _____, and the life.' (John 14:6)", answer: "truth" },
  { text: "Rejoice in the Lord always; again I will say, _____. (Philippians 4:4)", answer: "rejoice" }
];

const CompleteTheVerse = () => {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const nextVerse = () => {
    if (index < verses.length - 1) {
      setIndex(index + 1);
      setRevealed(false); // Esconde a resposta ao mudar de verso
    }
  };

  const prevVerse = () => {
    if (index > 0) {
      setIndex(index - 1);
      setRevealed(false); // Esconde a resposta ao mudar de verso
    }
  };

  return (
    <div className="flex flex-col gap-20 items-center justify-center min-h-screen bg-white text-[#63e] p-5">
      <h2 className="text-4xl font-semibold text-center">Complete the Verse:</h2>
      
      <h1 className="text-6xl font-bold mt-5 text-center max-w-4xl">
        {verses[index].text}
      </h1>

      <button 
        onClick={() => setRevealed(true)}
        className="mt-5 text-4xl text-white bg-[#63e] px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-all"
      >
        {revealed ? verses[index].answer : "Reveal Word"}
      </button>

      <div className="flex justify-center gap-16 mt-10">
        <button 
          onClick={prevVerse} 
          disabled={index === 0}
          className="px-8 py-4 bg-gray-300 text-gray-700 rounded-full text-2xl shadow-md hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>

        <button 
          onClick={nextVerse} 
          disabled={index === verses.length - 1}
          className="px-8 py-4 bg-[#63e] text-white rounded-full text-2xl shadow-md hover:bg-purple-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {index === verses.length - 1 && (
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

export default CompleteTheVerse;
