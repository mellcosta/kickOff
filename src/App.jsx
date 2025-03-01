import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CompleteTheVerse from "./Components/CompleteTheVerse";
import SingTheWord from "./Components/SingTheWord";
import GuessTheCharacter from "./Components/GuessTheCharacter";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sing-the-word" element={<SingTheWord />} />
        <Route path="/complete-the-verse" element={<CompleteTheVerse />} />
        <Route path="/guess-the-character" element={<GuessTheCharacter />} />
      </Routes>
    </Router>
  );
}

export default App;
