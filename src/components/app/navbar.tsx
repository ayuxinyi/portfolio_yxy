import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import clsx from "clsx";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={clsx("navbar", scrolled ? "scrolled" : "not-scrolled")}>
      <div className="inner">
        <a href="#hero" className="logo">
          YXY | 前端开发
        </a>
        <nav className="desktop">
          <ul>
            {navLinks.map(link => (
              <li key={link.name} className="group">
                <a href={link.link}>
                  <span>{link.name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>联系我</span>
          </div>
        </a>
      </div>
    </header>
  );
};
