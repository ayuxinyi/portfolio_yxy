import { abilities } from "../../constants";

export const FeatureSection = () => {
  return (
    <section id="feature" className="w-full padding-x-lg">
      <div className="mx-auto  grid-3-cols">
        {abilities.map(ability => (
          <div
            key={ability.title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={ability.imgPath} alt={ability.title} />
            </div>
            <h3 className="text-white text-2xl font-semibold">
              {ability.title}
            </h3>
            <p className="text-white-50 text-xl">{ability.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
