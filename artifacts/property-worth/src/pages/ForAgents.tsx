import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export default function ForAgents() {
  const [postcodes, setPostcodes] = useState<string[]>(Array(15).fill(""));

  function updatePostcode(idx: number, value: string) {
    setPostcodes((prev) => {
      const next = [...prev];
      next[idx] = value.replace(/[^0-9]/g, "").slice(0, 4);
      return next;
    });
  }

  return (
    <div className="w-full bg-[#2b2b2b] text-[#b8b8b8]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Heading */}
        <Reveal direction="up" className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-2xl font-bold uppercase tracking-wide text-brand-teal sm:text-3xl">
            Register Your Interest Now
          </h1>
          <p className="text-sm leading-relaxed text-[#a3a3a3]">
            If you are a Real Estate Agent and you have an incredible knowledge of your
            local area and feel you can offer your clients a fantastic, friendly service
            to go along with the most accurate market appraisal, then you should get in
            touch and find out how to become part of the WhatsYourPropertyWorth team,
            just fill out the form below with the area postcodes that you'd like to
            manage. Please understand that registering your interest does not guarantee
            that you will secure the area.
          </p>
        </Reveal>

        {/* Form */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Contact Details — Left */}
          <Reveal direction="left">
            <h2 className="mb-8 text-2xl font-light text-brand-green">
              Contact Details
            </h2>

            <div className="flex flex-col gap-6">
              <FieldLabel label="Contact Name">
                <TextInput />
              </FieldLabel>

              <FieldLabel label="Group">
                <SelectInput options={["Select.", "Independent", "Franchise", "Boutique"]} />
                <input
                  type="text"
                  placeholder="If Other"
                  className="mt-3 w-full rounded-sm border border-white/10 bg-white px-3 py-2 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-brand-teal"
                />
              </FieldLabel>

              <FieldLabel label="Company Name">
                <TextInput />
              </FieldLabel>

              <FieldLabel label="Suburb">
                <TextInput />
              </FieldLabel>

              <FieldLabel label="State">
                <SelectInput options={["Select.", "QLD", "NSW", "VIC", "SA", "WA", "TAS", "ACT", "NT"]} />
              </FieldLabel>

              <FieldLabel label="Email Address">
                <TextInput type="email" />
              </FieldLabel>

              <FieldLabel label="Phone Number">
                <TextInput type="tel" />
              </FieldLabel>

              <FieldLabel label="Best Time To Contact You">
                <TextInput />
              </FieldLabel>
            </div>
          </Reveal>

          {/* Enquiry Details — Right */}
          <Reveal direction="right">
            <h2 className="mb-8 text-2xl font-light text-brand-green">
              Enquiry Details
            </h2>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-teal">
                Postcodes
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {postcodes.map((value, idx) => (
                  <input
                    key={idx}
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    value={value}
                    onChange={(e) => updatePostcode(idx, e.target.value)}
                    className="h-11 w-full rounded-sm bg-white px-3 text-center text-sm font-medium text-gray-800 outline-none focus:ring-2 focus:ring-brand-teal"
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-brand-teal">
                Message
              </p>
              <textarea
                rows={8}
                className="w-full rounded-sm bg-white p-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-brand-teal"
              />
            </div>

            <button
              type="button"
              className="mt-8 rounded-sm bg-brand-teal px-10 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-md transition-all hover:bg-brand-teal/90 active:scale-[0.98]"
            >
              Submit
            </button>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function FieldLabel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-brand-teal">
        {label}
      </label>
      {children}
    </div>
  );
}

function TextInput({ type = "text" }: { type?: string }) {
  return (
    <input
      type={type}
      className="h-10 w-full rounded-sm bg-white px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-brand-teal"
    />
  );
}

function SelectInput({ options }: { options: string[] }) {
  return (
    <select
      className="h-10 w-full rounded-sm bg-white px-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-brand-teal"
      defaultValue={options[0]}
    >
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
