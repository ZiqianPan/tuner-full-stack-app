import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {useState} from "react"

import Nav from "./Components/Nav.js";
import Home from "./Pages/Home.js";
import Index from "./Pages/Index.js";
import New from "./Pages/New.js";
import Show from "./Pages/Show.js";
import Edit from "./Pages/Edit.js";
// import FourOFour from "./Pages/Four0Four.js";

function App() {
  // const [accTotal, setAccTotal] = useState(0)


  return (
    <div className="App">
    <Router>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index/>} />
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id" element={<Show />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
          {/* <Route path="*" element={<FourOFour />} /> */}
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;