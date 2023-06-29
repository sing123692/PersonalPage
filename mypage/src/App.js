import React from "react";

import NavBar from "./components/navBar";
import WelcomeDiv from "./components/welcomeDiv";
import ProfileCard from "./components/ProfileCard";
import SkillDiv from "./components/skillDiv";
import DesignDiv from "./components/DesignDiv";



// ------------------------

// ------------------------
function App() {
  return (
    <div>
      <NavBar />
      <WelcomeDiv />
      <ProfileCard />
      <SkillDiv />
      <DesignDiv />
    </div>
  );
}

export default App;
