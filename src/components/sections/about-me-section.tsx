import { testimonials } from "../../constants";
import { GlowCard } from "../app/glow-card";
import { TitleHeader } from "../app/title-header";

export const AboutMeSection = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="size-full md:px-10 px-5">
        <TitleHeader title="别人怎么评价我？" sub="⭐️ 客户反馈亮点" />
        <div className="lg:columns-3 md:columns-1 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard key={testimonial.name} card={testimonial} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img src={testimonial.imgPath} alt={testimonial.name} />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
