import { SplitText } from "gsap/SplitText";
import { HeroSection } from "./components/sections/hero-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const App = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};
export default App;
