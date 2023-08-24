import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import WelcomeDiv from "./components/welcomeDiv";
import ProfileCard from "./components/ProfileCard";
import SkillDiv from "./components/skillDiv";
import DesignDiv from "./components/DesignDiv";



// ------------------------

// ------------------------
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        {/* Switch改成Routes了 */}
        {/* path="/*" 意思是預設會顯示 */}
        <Routes>
          <Route path='/*' element={<WelcomeDiv />} />
          <Route path="/profile" element={<React.Fragment><ProfileCard /><SkillDiv /></React.Fragment>} />
          <Route path="/design" element={<DesignDiv />} />


        </Routes>


      </div>
    </Router>
  );
}

export default App;
