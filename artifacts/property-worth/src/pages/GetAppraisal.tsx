import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import {
  Home as HomeIcon,
  LayoutGrid,
  Key,
  Bed,
  Bath,
  Car,
  Sofa,
  FileText,
  Calendar,
  Clock,
  Ruler,
  Trees,
  Hammer,
  DollarSign,
} from "lucide-react";

export default function GetAppraisal() {
  const [propertyType, setPropertyType] = useState<string>("");
  const [landSize, setLandSize] = useState<string>("");
  const [condition, setCondition] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [bathrooms, setBathrooms] = useState<string>("");
  const [carSpaces, setCarSpaces] = useState<string>("");
  const [features, setFeatures] = useState<string[]>([]);
  const [reason, setReason] = useState<string>("");
  const [timeframe, setTimeframe] = useState<string>("");
  const [renovated, setRenovated] = useState<string>("");
  const [outdoor, setOutdoor] = useState<string[]>([]);

  const toggleFeature = (feature: string) => {
    setFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleOutdoor = (item: string) => {
    setOutdoor((prev) =>
      prev.includes(item) ? prev.filter((f) => f !== item) : [...prev, item]
    );
  };

  const InputField = ({
    placeholder,
    type = "text",
  }: {
    placeholder: string;
    type?: string;
  }) => (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
    />
  );

  const Pill = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border-2 px-5 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase transition-colors ${
        selected
          ? "border-brand-teal bg-brand-teal text-white"
          : "border-[#4b4b4b] text-[#b8b8b8] hover:border-brand-teal hover:text-brand-teal"
      }`}
    >
      {label}
    </button>
  );

  const CirclePill = ({
    label,
    selected,
    onClick,
  }: {
    label: string;
    selected: boolean;
    onClick: () => void;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-colors ${
        selected
          ? "border-brand-teal bg-brand-teal text-white"
          : "border-[#4b4b4b] text-[#b8b8b8] hover:border-brand-teal hover:text-brand-teal"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-[#2b2b2b] min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center mb-10 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-brand-teal">
            Time to get your property appraisal
          </h1>
          <p className="mt-4 text-sm sm:text-base text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed">
            The more accurate the information you provide, the more accurate your
            appraisal will be. All fields marked with * are required.
          </p>
        </Reveal>

        <form className="space-y-14 sm:space-y-16">
          {/* User Details Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal direction="left" className="space-y-4">
              <InputField placeholder="First Name *" />
              <InputField placeholder="Phone *" type="tel" />
              <InputField placeholder="Street Name *" />
              <InputField placeholder="Street Number *" />
              <InputField placeholder="Post Code *" />
            </Reveal>
            <Reveal direction="right" className="space-y-4">
              <InputField placeholder="Last Name *" />
              <InputField placeholder="Email *" type="email" />
              <InputField placeholder="Suburb *" />
              <InputField placeholder="Unit Number" />
              <select className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal appearance-none">
                <option value="">State *</option>
                <option value="NSW">NSW</option>
                <option value="VIC">VIC</option>
                <option value="QLD">QLD</option>
                <option value="WA">WA</option>
                <option value="SA">SA</option>
                <option value="TAS">TAS</option>
                <option value="NT">NT</option>
                <option value="ACT">ACT</option>
              </select>
            </Reveal>
          </div>

          {/* Property Details */}
          <div className="space-y-12 border-t border-[#3b3b3b] pt-12">
            {/* Property Type */}
            <Reveal direction="up" className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              <div className="flex flex-col items-center gap-2 text-brand-teal shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal text-white">
                  <HomeIcon className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">Property Type</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {["House", "Apartment", "Townhouse", "Land"].map((type) => (
                  <Pill
                    key={type}
                    label={type}
                    selected={propertyType === type}
                    onClick={() => setPropertyType(type)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Land Size */}
            <Reveal direction="up" className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              <div className="flex flex-col items-center gap-2 text-brand-blue shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                  <LayoutGrid className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">Land Size</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {["< 300m²", "301-600m²", "601-1000m²", "> 1000m²"].map((size) => (
                  <Pill
                    key={size}
                    label={size}
                    selected={landSize === size}
                    onClick={() => setLandSize(size)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Property Condition */}
            <Reveal direction="up" className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
              <div className="flex flex-col items-center gap-2 text-brand-green shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white">
                  <Key className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Property
                  <br />
                  Condition
                </span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {["Needs Work", "Average", "Good", "Excellent"].map((cond) => (
                  <Pill
                    key={cond}
                    label={cond}
                    selected={condition === cond}
                    onClick={() => setCondition(cond)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Year Built & Living Area */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-yellow shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-white">
                  <Calendar className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Year &amp;
                  <br />
                  Size
                </span>
              </div>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="number"
                  placeholder="Year Built (e.g. 1995)"
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                />
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Floor Area"
                    className="w-full rounded bg-[#3b3b3b] px-4 py-3 pr-12 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                    m²
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Rooms Grid */}
            <div className="grid gap-12 md:grid-cols-3 pt-8">
              {/* Bedrooms */}
              <Reveal direction="left" className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 text-brand-teal">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal text-white">
                    <Bed className="h-10 w-10" />
                  </div>
                  <span className="font-bold uppercase text-sm">Bedrooms</span>
                </div>
                <div className="flex gap-2">
                  {["0", "1", "2", "3", "4+"].map((num) => (
                    <CirclePill
                      key={num}
                      label={num}
                      selected={bedrooms === num}
                      onClick={() => setBedrooms(num)}
                    />
                  ))}
                </div>
              </Reveal>

              {/* Bathrooms */}
              <Reveal direction="up" className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 text-brand-blue">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                    <Bath className="h-10 w-10" />
                  </div>
                  <span className="font-bold uppercase text-sm">Bathrooms</span>
                </div>
                <div className="flex gap-2">
                  {["0", "1", "2", "3+"].map((num) => (
                    <CirclePill
                      key={num}
                      label={num}
                      selected={bathrooms === num}
                      onClick={() => setBathrooms(num)}
                    />
                  ))}
                </div>
              </Reveal>

              {/* Car Spaces */}
              <Reveal direction="right" className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 text-brand-green">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white">
                    <Car className="h-10 w-10" />
                  </div>
                  <span className="font-bold uppercase text-sm">Car Spaces</span>
                </div>
                <div className="flex gap-2">
                  {["0", "1", "2", "3", "4+"].map((num) => (
                    <CirclePill
                      key={num}
                      label={num}
                      selected={carSpaces === num}
                      onClick={() => setCarSpaces(num)}
                    />
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Features */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center pt-8"
            >
              <div className="flex flex-col items-center gap-2 text-brand-yellow shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-white">
                  <Sofa className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">Features</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  "Pool",
                  "Air-Con",
                  "Balcony",
                  "Courtyard",
                  "Ensuite",
                  "Solar",
                ].map((feat) => (
                  <Pill
                    key={feat}
                    label={feat}
                    selected={features.includes(feat)}
                    onClick={() => toggleFeature(feat)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Outdoor Area */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-green shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white">
                  <Trees className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Outdoor
                  <br />
                  Area
                </span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  "Garden",
                  "Deck",
                  "Patio",
                  "Verandah",
                  "Garage",
                  "Carport",
                  "Shed",
                ].map((item) => (
                  <Pill
                    key={item}
                    label={item}
                    selected={outdoor.includes(item)}
                    onClick={() => toggleOutdoor(item)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Recent Renovations */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-blue shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-blue text-white">
                  <Hammer className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Recent
                  <br />
                  Reno
                </span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  "None",
                  "Kitchen",
                  "Bathroom",
                  "Flooring",
                  "Painting",
                  "Full Reno",
                ].map((r) => (
                  <Pill
                    key={r}
                    label={r}
                    selected={renovated === r}
                    onClick={() => setRenovated(r)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Reason for Appraisal */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-teal shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-teal text-white">
                  <DollarSign className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Reason
                </span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  "Selling",
                  "Refinancing",
                  "Curious",
                  "Insurance",
                  "Investment",
                  "Other",
                ].map((r) => (
                  <Pill
                    key={r}
                    label={r}
                    selected={reason === r}
                    onClick={() => setReason(r)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Time Frame */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-yellow shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-yellow text-white">
                  <Clock className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Time
                  <br />
                  Frame
                </span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {[
                  "ASAP",
                  "1-3 Months",
                  "3-6 Months",
                  "6-12 Months",
                  "12+ Months",
                ].map((t) => (
                  <Pill
                    key={t}
                    label={t}
                    selected={timeframe === t}
                    onClick={() => setTimeframe(t)}
                  />
                ))}
              </div>
            </Reveal>

            {/* Estimated Value */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center"
            >
              <div className="flex flex-col items-center gap-2 text-brand-green shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white">
                  <Ruler className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">
                  Your
                  <br />
                  Estimate
                </span>
              </div>
              <div className="w-full">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    $
                  </span>
                  <input
                    type="text"
                    placeholder="What do you think your property is worth? (Optional)"
                    className="w-full rounded bg-[#3b3b3b] pl-7 pr-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                  />
                </div>
              </div>
            </Reveal>

            {/* Comments */}
            <Reveal
              direction="up"
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start pt-8"
            >
              <div className="flex flex-col items-center gap-2 text-[#b8b8b8] shrink-0 w-24">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#3b3b3b] text-white">
                  <FileText className="h-10 w-10" />
                </div>
                <span className="font-bold uppercase text-sm text-center">Comments</span>
              </div>
              <div className="flex-1 w-full">
                <textarea
                  rows={5}
                  placeholder="Additional information about your property — recent upgrades, special features, neighbourhood notes, anything else you'd like our agent to know..."
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal resize-none"
                />
              </div>
            </Reveal>

            {/* Consent */}
            <Reveal direction="up" className="pt-4">
              <label className="flex items-start gap-3 text-sm text-[#a3a3a3] cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-[#4b4b4b] bg-[#3b3b3b] text-brand-teal focus:ring-brand-teal"
                />
                <span>
                  I agree to be contacted by a WhatsYourPropertyWorth agent regarding
                  this appraisal request and accept the{" "}
                  <span className="text-brand-teal underline">Privacy Policy</span>.
                </span>
              </label>
            </Reveal>

            <Reveal direction="up" className="pt-4 text-center">
              <button
                type="button"
                className="rounded bg-brand-green px-12 sm:px-16 py-4 text-lg sm:text-xl font-bold uppercase text-white transition-colors hover:bg-brand-dark-green"
              >
                Submit Appraisal Request
              </button>
            </Reveal>
          </div>
        </form>
      </div>
    </div>
  );
}
