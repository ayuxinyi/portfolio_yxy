import { socialImgs } from "../../constants";

export const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit My Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map(social => (
            <a key={social.name} href={social.url} target="_blank">
              <img src={social.imgPath} alt={social.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            &copy; {new Date().getFullYear()} YXY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
