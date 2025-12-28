import { words } from "../../constants";
import { Button } from "../app/button";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                将
                <span className="slide">
                  <span className="wrapper">
                    {words.map(word => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>变成可落地的项目</h1>
              <h1>并带来可见的成果</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              嗨，我是 yxy，一名前端开发者，用代码为创意赋形、为体验注入温度。
            </p>
            <Button className="md:w-80 md:h-16 w-60 h-12" id="counter" />
          </div>
        </header>
      </div>
    </section>
  );
};
