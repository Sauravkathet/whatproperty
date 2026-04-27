import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Clock3, Send, BadgeCheck } from "lucide-react";

const contactCards = [
  {
    title: "Call Our Team",
    body: "Speak with our property support team about appraisals, agent connections, and next steps.",
    value: "1800 123 456",
    note: "Monday to Friday, 9:00am to 5:00pm",
    icon: Phone,
    accent: "bg-brand-teal",
  },
  {
    title: "Email Us",
    body: "Prefer writing? Send through your enquiry and we will point it to the right team quickly.",
    value: "info@whatsyourpropertyworth.com",
    note: "Typical response within one business day",
    icon: Mail,
    accent: "bg-brand-green",
  },
  {
    title: "Visit Our Office",
    body: "Appointments are available for business and partnership enquiries.",
    value: "123 Property Street, Sydney NSW 2000",
    note: "Australia",
    icon: MapPin,
    accent: "bg-brand-blue",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#1f1f1f] text-white">
      <section className="border-b border-white/6 bg-[linear-gradient(135deg,#202020_0%,#262626_55%,#1d1d1d_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-18">
          <Reveal direction="left" className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">
              Contact Us
            </p>
            <h1 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Professional Help
              <br />
              Starts Here
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#b8b8b8] sm:text-lg">
              Whether you want a property appraisal, need help choosing the right local
              agent, or have a partnership enquiry, our team is ready to help with a
              fast and professional response.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-[#d1d1d1]">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <BadgeCheck className="h-4 w-4 text-brand-green" />
                <span>Trusted since 2004</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Clock3 className="h-4 w-4 text-brand-teal" />
                <span>Prompt business-day replies</span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                >
                  <div
                    className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full text-white ${card.accent}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-bold text-white">{card.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#ababab]">{card.body}</p>
                  <p className="mt-4 text-base font-semibold text-white">{card.value}</p>
                  <p className="mt-1 text-sm text-[#9d9d9d]">{card.note}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
          <Reveal direction="left">
            <div className="rounded-[28px] border border-white/8 bg-[#2a2a2a] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:p-8">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-teal">
                  Send An Enquiry
                </p>
                <h2 className="mt-3 text-3xl font-bold uppercase text-white">
                  Tell Us How We Can Help
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#a9a9a9] sm:text-base">
                  Complete the form below and one of our consultants will get back to you
                  with the right advice, information, or next step.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                      First Name
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                      Last Name
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                      Email Address
                    </span>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      className="w-full rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      placeholder="Your contact number"
                      className="w-full rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                    Subject
                  </span>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#d2d2d2]">
                    Message
                  </span>
                  <textarea
                    rows={6}
                    placeholder="Tell us a little about your enquiry..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#353535] px-4 py-3 text-white outline-none transition-colors placeholder:text-[#8f8f8f] focus:border-brand-teal"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-sm leading-relaxed text-[#9f9f9f]">
                    By contacting us, you agree that our team may respond using the email
                    address or phone number you provide.
                  </p>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-teal px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-brand-blue"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Reveal>

          <Reveal direction="right" className="space-y-6">
            <div className="rounded-[28px] border border-white/8 bg-[#262626] p-6 sm:p-7">
              <h3 className="text-xl font-bold uppercase text-white">What Happens Next?</h3>
              <div className="mt-6 space-y-5">
                {[
                  {
                    title: "1. We review your enquiry",
                    body: "Your message is routed to the right consultant, whether it is appraisal-related, support-related, or agent-focused.",
                  },
                  {
                    title: "2. We contact you promptly",
                    body: "A member of our team will respond by phone or email with the next step or any information you need.",
                  },
                  {
                    title: "3. We connect you with the right people",
                    body: "If needed, we can help connect you with an experienced local property professional in your area.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-white/6 bg-white/[0.03] p-4">
                    <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-green">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#aaaaaa]">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,#2d2d2d_0%,#232323_100%)] p-6 sm:p-7">
              <h3 className="text-xl font-bold uppercase text-white">Business Hours</h3>
              <div className="mt-5 space-y-4 text-sm text-[#b8b8b8]">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal" />
                  <div>
                    <p className="font-semibold text-white">Monday to Friday</p>
                    <p>9:00am to 5:00pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                  <div>
                    <p className="font-semibold text-white">Office Location</p>
                    <p>123 Property Street, Sydney NSW 2000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                  <div>
                    <p className="font-semibold text-white">General Enquiries</p>
                    <p>info@whatsyourpropertyworth.com</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
