import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
import WelcomeDiv from "./components/welcomeDiv";
import ProfileCard from "./components/ProfileCard";
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
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/design" element={<DesignDiv />} />


        </Routes>


      </div>
    </Router>
  );
}

export default App;
