import { ReactLenis, useLenis } from "lenis/react";
import CursorAnimation from "./components/CursorAnimation";
import GitHubRepos from "./components/UI/Home/GithubRepos";
import HeroSection from "./components/UI/Home/HeroSection";
import Menu from "./components/UI/Home/Menu";
import MySkills from "./components/UI/Home/MySkills";
import Projects from "./components/UI/Home/Projects";
<<<<<<< HEAD
<<<<<<< HEAD
import Services from "./components/UI/Home/Services";
import "./globals.css";

const App = () => {
  return (
    <ReactLenis root options={{ duration: 0.7 }}>
=======
import Footer from "./components/UI/Home/Footer";
import CursorAnimation from "./components/CursorAnimation";

const App = () => {
  return (
    <div>
>>>>>>> 035f867 (Updated projects)
=======
import Services from "./components/UI/Home/Services";
import "./globals.css";

const App = () => {
  return (
    <ReactLenis root options={{ duration: 0.7 }}>
>>>>>>> 46c8752 (Add GitHub API integration and enhance UI components)
      <CursorAnimation />
      <div className=" bg-deep overflow-hidden">
        <Menu />
        <div className=" max-w-[1050px] mx-auto px-5 ">
          <HeroSection />

          <Services />
          <Projects />
          <MySkills />
<<<<<<< HEAD
<<<<<<< HEAD
          <GitHubRepos />
        </div>
        {/* <Footer /> */}
      </div>
    </ReactLenis>
=======
        </div>
        {/* <Footer /> */}
      </div>
    </div>
>>>>>>> 035f867 (Updated projects)
=======
          <GitHubRepos />
        </div>
        {/* <Footer /> */}
      </div>
    </ReactLenis>
>>>>>>> 46c8752 (Add GitHub API integration and enhance UI components)
  );
};

export default App;
