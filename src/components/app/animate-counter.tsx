import { counterItems } from "../../constants";
import CountUp from "react-countup";

export const AnimateCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 me-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map(counter => (
          <div
            key={counter.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={counter.value} suffix={counter.suffix} start={0} />
            </div>

            <div className="text-white-50 text-lg">{counter.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
