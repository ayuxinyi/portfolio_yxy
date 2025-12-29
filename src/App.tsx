import { SplitText } from "gsap/SplitText";
import { HeroSection } from "./components/sections/hero-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShowcaseSection } from "./components/sections/showcase-section";
import { Navbar } from "./components/app/navbar";
// import { LogoSection } from "./components/sections/logo-section";
import { FeatureSection } from "./components/sections/feature-section";
import { ExperienceSection } from "./components/sections/experience-section";
import { TechStack } from "./components/sections/tech-stack";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureSection />
      <ExperienceSection />
      <TechStack />
    </div>
  );
};
export default App;
