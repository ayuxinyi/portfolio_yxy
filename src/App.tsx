import { SplitText } from "gsap/SplitText";
import { HeroSection } from "./components/sections/hero-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShowcaseSection } from "./components/sections/showcase-section";
import { Navbar } from "./components/app/navbar";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ShowcaseSection />
    </div>
  );
};
export default App;
