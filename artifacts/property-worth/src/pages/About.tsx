import { Reveal } from "@/components/Reveal";
import { ChevronRight } from "lucide-react";
import womanSign from "@/assets/images/about-woman-sign.png";
import team1 from "@/assets/images/team-1.png";
import team2 from "@/assets/images/team-2.png";
import team3 from "@/assets/images/team-3.png";
import team4 from "@/assets/images/team-4.png";

export default function About() {
  return (
    <div className="w-full bg-[#2b2b2b] text-[#b8b8b8]">
      {/* Top Section — Goals / Company Info / History */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {/* Our Goals */}
            <Reveal direction="left">
              <h2 className="mb-2 text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Our
              </h2>
              <h3 className="mb-8 text-2xl font-light uppercase leading-tight text-white/90 sm:text-3xl">
                Goals
              </h3>
              <div className="space-y-7">
                {[
                  {
                    title: "Connecting Sellers & Agents",
                    body: "Choosing the right agent can be hard. At WhatsYourPropertyWorth, we help break the ice by introducing you to the most knowledgeable agent in your area.",
                  },
                  {
                    title: "Setting The Right Price",
                    body: "Receiving an accurate appraisal on your home is a great start! But you also need to know what the market is doing right now and a qualified WhatsYourPropertyWorth agent will be able to offer you a invaluable insight into the current state of the market.",
                  },
                  {
                    title: "Not Just An Agent",
                    body: "When it comes to selling your home, price is just one factor; its appearance, the best way to market your property and legal requirements need to be considered as well, and your WhatsYourPropertyWorth Agent will have you covered. They'll even put you in touch with your local removalist once you're sold!",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-teal/40 text-brand-teal">
                      <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-base font-bold uppercase tracking-wide text-brand-teal">
                        {item.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#a3a3a3]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Company Info */}
            <Reveal direction="up">
              <h2 className="mb-2 text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
                Company
              </h2>
              <h3 className="mb-8 text-2xl font-light uppercase leading-tight text-white/90 sm:text-3xl">
                Information
              </h3>
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white/5">
                <img
                  src={womanSign}
                  alt="Real estate agent with a For Sale sign"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>

            {/* History */}
            <Reveal direction="right">
              <h2 className="mb-8 text-2xl font-bold uppercase leading-tight text-brand-teal sm:text-2xl">
                What's Your Property
                <br />
                Worth...Since 2004
              </h2>
              <p className="mb-4 text-sm leading-relaxed text-[#a3a3a3]">
                Yes, we've been around that long! Ok, it's not exactly "Knights Of The
                Round Table" era but they didn't have the internet so going alongside
                eleven years in this business means we're doing something right! If
                you're thinking of selling, this is the perfect place to start...after
                all, you can never be too informed when it comes to your biggest
                investment.
              </p>
              <p className="text-sm leading-relaxed text-[#a3a3a3]">
                For agents, if you have an incredible knowledge of your local area and
                feel you can offer your clients a fantastic, friendly service to go
                along with the most accurate market appraisal, then you should get in
                touch and find out how to become part of the WhatsYourPropertyWorth
                team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials — slightly lighter dark band for contrast */}
      <section className="bg-[#222222] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mb-10 sm:mb-12 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              What Our
            </h2>
            <h3 className="text-2xl font-light uppercase leading-tight text-white/90 sm:text-3xl">
              Customers Think
            </h3>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {[
              {
                quote:
                  "Through this site, I was put in touch with a WhatsYourPropertyWorth agent and from the first minute I felt completely comfortable letting them handle the sale of my property. The appraisal was spot on and the service first class all the way!",
                name: "Raymond Box",
                direction: "left" as const,
                accent: "text-brand-green",
              },
              {
                quote:
                  "I've used WhatsYourPropertyWorth twice now and it will always be my first avenue to get a valuation on my home. Their agents are knowledgeable, friendly and above all, professional. Highly recommended!",
                name: "Jack Spencer",
                direction: "up" as const,
                accent: "text-brand-yellow",
              },
              {
                quote:
                  "I was really impressed with how quickly we had our home valued. We were looking at selling due to moving overseas and from completing the online form to having a SOLD sticker on the sign in front of our house took less than 10 days!",
                name: "Olivia Mason",
                direction: "right" as const,
                accent: "text-brand-green",
              },
            ].map((t) => (
              <Reveal
                key={t.name}
                direction={t.direction}
                className="rounded-lg bg-[#2b2b2b] p-6 ring-1 ring-white/5 sm:p-7"
              >
                <span className="block font-serif text-5xl leading-none text-brand-teal">
                  &ldquo;
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[#b8b8b8]">
                  {t.quote}
                </p>
                <p className={`mt-5 text-sm font-bold ${t.accent}`}>{t.name}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Team */}
      <section className="bg-[#1f1f1f] py-12 sm:py-16 lg:py-20 text-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal direction="up" className="mb-10 sm:mb-14 text-center sm:text-left">
            <h2 className="text-3xl font-extrabold uppercase leading-tight text-white sm:text-4xl">
              Our
            </h2>
            <h3 className="text-2xl font-light uppercase leading-tight text-white/90 sm:text-3xl">
              Work Team
            </h3>
          </Reveal>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {[
              {
                img: team1,
                name: "Matthew Tuxworth",
                role: "Our main I.T guy and the creator of our fantastic new page. If it's broke, Matt will fix it!",
                ring: "ring-brand-green",
                direction: "left" as const,
                color: "text-brand-green",
              },
              {
                img: team2,
                name: "Merran Hall",
                role: "Merran looks after client-services and it's her job to follow up on appraisals and to answer any questions you might have.",
                ring: "ring-brand-blue",
                direction: "up" as const,
                color: "text-brand-green",
              },
              {
                img: team3,
                name: "Russell Hall",
                role: "Our Operations Manager and the man who will ensure that you are put in touch with the right agent to appraise your home.",
                ring: "ring-brand-yellow",
                direction: "up" as const,
                color: "text-brand-green",
              },
              {
                img: team4,
                name: "Catherine Hart",
                role: "Our Miss.Fantastic who runs the office and works tirelessly to keep our clients and our agents happy!",
                ring: "ring-brand-teal",
                direction: "right" as const,
                color: "text-brand-green",
              },
            ].map((m) => (
              <Reveal
                key={m.name}
                direction={m.direction}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`mb-5 h-32 w-32 sm:h-36 sm:w-36 overflow-hidden rounded-full ring-4 ${m.ring}`}
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className={`mb-3 text-lg font-bold ${m.color}`}>{m.name}</h4>
                <p className="max-w-xs text-sm leading-relaxed text-[#a3a3a3]">
                  {m.role}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
