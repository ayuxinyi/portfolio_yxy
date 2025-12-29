import { useGSAP } from "@gsap/react";
import { techStackIcons } from "../../constants";
import { TitleHeader } from "../app/title-header";
import { TechIcon } from "../models/tech/tech-icon";
import gsap from "gsap";

export const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="size-full md:px-10 px-5">
        <TitleHeader title="核心能力与价值贡献" sub="🤝 我能为团队提供的支持" />
        <div className="tech-grid">
          {techStackIcons.map(icon => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              {icon.name}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
          {/* {techStackImgs.map(icon => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={icon.imgPath} alt={icon.name} />
                </div>
                <div className="padding-x w-full">{icon.name}</div>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};
