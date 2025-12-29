import { SplitText } from "gsap/SplitText";
import { HeroSection } from "./components/sections/hero-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShowcaseSection } from "./components/sections/showcase-section";
import { Navbar } from "./components/app/navbar";
// import { LogoSection } from "./components/sections/logo-section";
import { FeatureSection } from "./components/sections/feature-section";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
      {/* <LogoSection /> */}
      <FeatureSection />
    </div>
  );
};
export default App;
