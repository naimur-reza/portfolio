import { ReactLenis } from "lenis/react";
import CursorAnimation from "./components/CursorAnimation";
import GitHubRepos from "./components/UI/Home/GithubRepos";
import HeroSection from "./components/UI/Home/HeroSection";
import Menu from "./components/UI/Home/Menu";
import MySkills from "./components/UI/Home/MySkills";
import Projects from "./components/UI/Home/Projects";
import Services from "./components/UI/Home/Services";
import "./globals.css";

const App = () => {
  return (
    <ReactLenis root options={{ duration: 0.7 }}>
      <CursorAnimation />
      <div className=" bg-deep overflow-hidden">
        <Menu />
        <HeroSection />
        <div className="container mx-auto px-5 ">
          <Services />
          <GitHubRepos />
          <Projects />
          <MySkills />
        </div>
        {/* <Footer /> */}
      </div>
    </ReactLenis>
  );
};

export default App;
