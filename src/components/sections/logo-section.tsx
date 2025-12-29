import { logoIconsList } from "../../constants";

const LogoIcon = ({ icon }: { icon: string }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon} alt="公司logo" />
    </div>
  );
};

export const LogoSection = () => {
  return (
    <section className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map(icon => (
            <LogoIcon key={icon.imgPath} icon={icon.imgPath} />
          ))}
        </div>
      </div>
    </section>
  );
};
