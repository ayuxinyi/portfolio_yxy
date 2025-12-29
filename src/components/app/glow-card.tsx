import {
  useRef,
  type FC,
  type MouseEvent,
  type PropsWithChildren,
} from "react";
import type { expCards } from "../../constants";
type Card = (typeof expCards)[0];
interface Props {
  card: Pick<Card, "review">;
  index: number;
}

export const GlowCard: FC<PropsWithChildren<Props>> = ({
  children,
  card,
  index,
}) => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const handleMouseMove = (index: number) => (ev: MouseEvent) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = ev.clientX - rect.left - rect.width / 2;
    const mouseY = ev.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60 + "");
  };

  return (
    <div
      ref={el => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src="/images/star.png"
            alt="星星"
            className="size-5"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-xl">{card.review}</p>
      </div>
      {children}
    </div>
  );
};
