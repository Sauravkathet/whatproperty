import { Reveal } from "@/components/Reveal";
import { DollarSign, HelpCircle, Lightbulb, Check } from "lucide-react";
import heroPreview from "@/assets/images/preview.png";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_98%_74%,rgba(31,167,160,0.62)_0%,rgba(31,167,160,0.42)_10%,rgba(31,167,160,0.14)_20%,rgba(31,167,160,0)_30%),linear-gradient(90deg,#c6ec00_0%,#93d700_22%,#67c018_54%,#41b63d_78%,#38b94d_90%,#2ec5c9_100%)]">
        <div className="mx-auto grid min-h-[470px] max-w-[1540px] gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:min-h-[620px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-0 lg:px-0">
          <Reveal direction="left" className="relative z-10 max-w-[640px] text-black lg:ml-[72px] lg:mt-[-6px]">
            <h1 className="text-[3rem] font-extralight leading-[0.98] tracking-[-0.05em] text-black sm:text-[4rem] lg:text-[4.6rem] xl:text-[4.9rem]">
              What&apos;s Your
              <br />
              Property Worth?
            </h1>
            <p className="mt-7 max-w-[660px] text-base leading-[1.5] text-black/90 sm:text-[1.05rem] lg:text-[1.1rem] xl:text-[1.14rem]">
              Hello and welcome to "What's Your Property Worth". Here, you can obtain a
              professional evaluation on your property. It takes only a couple of minutes
              and best of all, it's cost-free!
            </p>
            <div className="mt-3 flex max-w-[450px] items-stretch overflow-hidden rounded-[4px] border border-[#cbcbcb] bg-white shadow-[0_1px_0_rgba(255,255,255,0.32)]">
              <input
                type="text"
                placeholder="ENTER YOUR POSTCODE"
                className="w-full px-5 py-3 text-[0.98rem] font-medium uppercase tracking-[-0.02em] text-[#666666] placeholder:text-[#7b7b7b] outline-none sm:text-[1.02rem]"
              />
              <Link href="/get-appraisal">
                <button className="h-full border-l border-[#cbcbcb] bg-[#e8e8e8] px-7 py-3 text-[0.98rem] font-medium uppercase text-black transition-colors duration-300 hover:bg-[#dcdcdc] sm:text-[1.02rem]">
                  Go!
                </button>
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[620px]">
            <img
              src={heroPreview}
              alt="Property worth hero preview"
              className="absolute bottom-[-2px] right-[6px] z-10 h-[104%] w-auto max-w-none object-contain drop-shadow-[18px_0_22px_rgba(33,176,177,0.34)] sm:bottom-[-3px] sm:right-[10px] sm:h-[108%] lg:bottom-[-6px] lg:right-[14px] lg:h-[102%] xl:right-[18px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Dark Features Section */}
      <section className="bg-[#2b2b2b] py-20 text-[#b8b8b8]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <Reveal direction="left" className="flex flex-col">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white">
                  <DollarSign className="h-10 w-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-light leading-tight text-white">
                  Real Estate
                  <br />
                  <span className="font-normal">Appraisal</span>
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                In just three quick steps you can find out for FREE what the value of your
                property is in Queensland, New South Wales, Victoria, Western Australia. If
                you are thinking of selling your property or maybe you just want to know
                what the value of your house is, this website is for YOU!
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                Come back as many times as you like to receive your FREE value or price
                report. If you are planning on selling your property, why not look at our
                helpful guide that may help in increasing the value of your property.
              </p>
              <p className="mb-8 text-sm leading-relaxed">
                Spend a few minutes and follow the Quick Steps and one of our
                WhatsYourPropertyWorth consultants will send you back an appraisal for your
                property.
                <br />
                Brisbane, Sydney, Melbourne, Adelaide
              </p>
              <Link href="/get-appraisal" className="self-start">
                <button className="rounded-full border-2 border-white/80 px-10 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#2b2b2b]">
                  Go!
                </button>
              </Link>
            </Reveal>

            <Reveal direction="up" className="flex flex-col">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-green text-white">
                  <HelpCircle className="h-10 w-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-light leading-tight text-white">
                  How Home
                  <br />
                  <span className="font-normal">Appraisals Work</span>
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                Your WhatsYourPropertyWorth agent is qualified to offer you a more
                accurate market appraisal and will be able to undertake an on-site
                inspection at a time convenient to you. You don't just get an automated
                report, but a report from a person who knows your area and what the real
                estate market is where you are.
              </p>
              <p className="mb-8 text-sm leading-relaxed">
                Our local Whats Your Property Worth consultant will look at all the
                current real estate factors influencing your property value like other
                property on the market, latest sales, the unique features of your
                property, even how close you are to schools. Our property consultant will
                then make an accurate report individualised to your property, giving an
                accurate appraisal value.
              </p>
              <Link href="/faq" className="self-start">
                <button className="rounded-full border-2 border-white/80 px-10 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#2b2b2b]">
                  Go!
                </button>
              </Link>
            </Reveal>

            <Reveal direction="right" className="flex flex-col">
              <div className="mb-6 flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-white">
                  <Lightbulb className="h-10 w-10" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-light leading-tight text-white">
                  Handy
                  <br />
                  <span className="font-normal">Hints</span>
                </h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                If you are planning on selling your property why not look at our helpful
                guide that may help in increasing the value of your property.
              </p>
              <p className="mb-8 text-sm leading-relaxed">
                Find your Property value in Brisbane, Sydney, Melbourne, Adelaide.
              </p>
              <Link href="/about" className="self-start">
                <button className="rounded-full border-2 border-white/80 px-10 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#2b2b2b]">
                  Go!
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Light Info Section */}
      <section className="bg-white py-20 text-gray-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <Reveal direction="left">
              <h3 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
                Welcome
              </h3>
              <h4 className="mb-6 text-2xl font-light text-gray-700">
                To Our Website!
              </h4>
              <p className="mb-4 font-semibold text-brand-green">
                We're delighted you found us!
              </p>
              <p className="mb-6 text-sm leading-relaxed">
                WhatsYourPropertyWorth.com.au is the fastest, easiest and most accurate
                way of obtaining a value on your property. Whether you prefer a report
                emailed to you or one of our specialist agents conducting an on-site
                appraisal, you've come to the right place! Automated reports from other
                sites only give half the picture of the real value of your property.
              </p>
              <Link href="/get-appraisal">
                <button className="rounded-full border-2 border-gray-300 px-10 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 transition-colors hover:border-brand-teal hover:text-brand-teal">
                  Go!
                </button>
              </Link>
            </Reveal>

            <Reveal direction="up">
              <h3 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
                About
              </h3>
              <h4 className="mb-6 text-2xl font-light text-gray-700">Our Company</h4>
              <p className="mb-4 font-semibold text-brand-green">
                So, what's our story...
              </p>
              <p className="mb-4 text-sm leading-relaxed">
                WhatsYourPropertyWorth.com.au is a wholly owned and operated Australian
                business allowing the general public the ability to receive a free, no
                obligation estimate of the value of their home. It is simple, quick and
                hassle-free.
              </p>
              <p className="mb-4 font-semibold text-brand-green">
                Tell me more, you say...
              </p>
              <p className="mb-6 text-sm leading-relaxed">
                If you are thinking of selling your real estate or property, or maybe you
                just want to know what the value of your house is then this is the
                website for you! There are only three quick and easy steps to request a
                free property evaluation; just enter the details and then hit SUBMIT! One
                of our friendly consultants will send you back an appraisal for your
                property.
              </p>
              <Link href="/about">
                <button className="rounded-full border-2 border-gray-300 px-10 py-2 text-sm font-bold uppercase tracking-wide text-gray-700 transition-colors hover:border-brand-teal hover:text-brand-teal">
                  Go!
                </button>
              </Link>
            </Reveal>

            <Reveal direction="right">
              <h3 className="mb-2 text-3xl font-bold leading-tight text-gray-900">
                Property
              </h3>
              <h4 className="mb-6 text-2xl font-light text-gray-700">Value</h4>
              <ul className="mb-6 flex flex-col gap-3">
                {[
                  "Property value Brisbane North",
                  "Property value Brisbane QLD",
                  "Property value Brisbane South",
                  "Property value Brisbane City",
                  "Property value Brisbane",
                  "Property value Brisbane Australia",
                  "Property value Brisbane East",
                  "Property value Brisbane West",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check className="h-4 w-4 shrink-0 text-brand-green" strokeWidth={3} />
                    <span className="text-sm text-brand-teal hover:underline cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/get-appraisal">
                <button className="rounded border-2 border-gray-800 bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
                  Get Your Appraisal!
                </button>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
