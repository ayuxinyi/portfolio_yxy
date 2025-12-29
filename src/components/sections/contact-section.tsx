import { useState } from "react";
import { TitleHeader } from "../app/title-header";
import { ContactExperience } from "../models/contact/contact-experience";

export const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleAction = (values: FormData) => {
    setLoading(true);
    const formObject = Object.fromEntries(values);
    console.log("🚀 ~ handleAction ~ formObject:", formObject);
    setLoading(false);
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="size-full md:px-10 px-5">
        <TitleHeader
          title="Get In Touch With Me"
          sub="✉️ Contact Information"
        />
        <div className="mt-16 grid-12-cols">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                action={handleAction}
                className="flex w-full flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What’s your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="What’s your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can I help you?"
                    rows={5}
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="size-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
