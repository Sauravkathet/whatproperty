import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#2b2b2b] min-h-screen py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" className="text-center mb-16">
          <h1 className="text-3xl font-extrabold uppercase text-brand-teal md:text-4xl mb-4">
            Get in touch
          </h1>
          <p className="text-[#b8b8b8] max-w-2xl mx-auto">
            Have questions or want to speak with an agent directly? Fill out the form below or use our contact details to reach out.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <Reveal direction="left">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email *"
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message *"
                  className="w-full rounded bg-[#3b3b3b] px-4 py-3 text-white placeholder-gray-400 border border-[#4b4b4b] outline-none focus:border-brand-teal resize-none"
                />
              </div>
              <button
                type="button"
                className="rounded-full border-2 border-white px-8 py-3 font-bold uppercase text-white transition-colors hover:bg-white hover:text-[#2b2b2b] w-full"
              >
                Send Message
              </button>
            </form>
          </Reveal>

          {/* Contact Details */}
          <Reveal direction="right" className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-teal text-white shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2">Office Address</h3>
                <p className="text-[#b8b8b8]">
                  123 Property Street<br />
                  Sydney, NSW 2000<br />
                  Australia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-white shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2">Call Us</h3>
                <p className="text-[#b8b8b8]">
                  1800 123 456<br />
                  Mon-Fri: 9am - 5pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-2">Email Us</h3>
                <p className="text-[#b8b8b8]">
                  info@whatsyourpropertyworth.com<br />
                  appraisals@whatsyourpropertyworth.com
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
