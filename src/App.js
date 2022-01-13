import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useState } from "react";
import { useCharacters, useLocations } from "./api/useData";
import rickandmortylogo from "./img/RMlogo_v3.png"
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import LocationDetails from './components/LocationDetails'
import Home from './components/Home'


function App() {

  const locations = useLocations(1);

  // console.log("Locations data: ");
  // console.log(locations);

  const [showChars, setShowChars] = useState(false);
  const [showLocs, setShowLocs] = useState(false)

  const handleCharClick = () => {
    setShowChars(!showChars)
    setShowLocs(false)
  }

  const handleLocClick = () => {
    setShowLocs(!showLocs)
    setShowChars(false)
  }

  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <Link to="/"><img src={rickandmortylogo} alt="" /></Link>
          </div>
          <div className="buttons">
            <Link to="/characters"><button className="btn btn-characters">Characters</button></Link>
            <Link to="/locations"><button className="btn btn-locations">Locations</button></Link>
          </div>
        </header>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/characters" element={<Characters />} />
          <Route exact path="/locations" element={<Locations />} />
          <Route exact path="/locations/:id" element={<LocationDetails />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App;
