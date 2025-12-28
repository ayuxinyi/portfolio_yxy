import type { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  id?: string;
  text?: string;
}

export const Button: FC<Props> = ({ className, id, text = "See my work" }) => {
  return (
    <a href="#" className={clsx("cta-wrapper", className)}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};
