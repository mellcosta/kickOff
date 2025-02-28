import { useState } from "react";
import { Link } from "react-router-dom";

const characters = [
  { text: "I am the Son of God.", answer: "Jesus" },
  { text: "I built an ark to survive the flood.", answer: "Noah" },
  { text: "I was swallowed by a great fish.", answer: "Jonah" },
  { text: "I received the Ten Commandments on Mount Sinai.", answer: "Moses" },
  { text: "I killed Goliath with a sling and a stone.", answer: "David" },
  { text: "I betrayed Jesus for 30 pieces of silver.", answer: "Judas" },
  { text: "I was the first man created by God.", answer: "Adam" },
  { text: "I was the mother of Jesus.", answer: "Mary" },
  { text: "I denied Jesus three times before the rooster crowed.", answer: "Peter" },
  { text: "I led the Israelites into the Promised Land after Moses.", answer: "Joshua" },
  { text: "I was the strongest man, but my hair was my weakness.", answer: "Samson" },
  { text: "I was the queen who saved my people from destruction.", answer: "Esther" }
];

const GuessTheCharacter = () => {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const nextCharacter = () => {
    if (index < characters.length - 1) {
      setIndex(index + 1);
      setRevealed(false); // Esconde a resposta ao mudar de frase
    }
  };

  const prevCharacter = () => {
    if (index > 0) {
      setIndex(index - 1);
      setRevealed(false); // Esconde a resposta ao mudar de frase
    }
  };

  return (
    <div className="flex flex-col gap-30 items-center justify-center min-h-screen bg-white text-[#63e] p-5">
      <h2 className="text-4xl font-semibold text-center">Guess the Character:</h2>
      
      <h1 className="text-6xl font-bold mt-5 text-center max-w-4xl">
        {characters[index].text}
      </h1>

      <button 
        onClick={() => setRevealed(true)}
        className="mt-5 text-4xl text-white bg-[#63e] px-6 py-3 rounded-full shadow-md hover:bg-purple-700 transition-all"
      >
        {revealed ? characters[index].answer : "Reveal Answer"}
      </button>

      <div className="flex justify-center gap-16 mt-10">
        <button 
          onClick={prevCharacter} 
          disabled={index === 0}
          className="px-8 py-4 bg-gray-300 text-gray-700 rounded-full text-2xl shadow-md hover:bg-gray-400 disabled:opacity-50"
        >
          Back
        </button>

        <button 
          onClick={nextCharacter} 
          disabled={index === characters.length - 1}
          className="px-8 py-4 bg-[#63e] text-white rounded-full text-2xl shadow-md hover:bg-purple-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {index === characters.length - 1 && (
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

export default GuessTheCharacter;
