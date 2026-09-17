import { ArrowUp, ArrowUpRight, Mail, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Classes", href: "#classes" },
  { label: "Centres", href: "#centres" },
  { label: "Founder", href: "#founder" },
  { label: "Performances", href: "#performances" },
  { label: "Contact", href: "#contact" },
];

const classes = [
  "Bharatanatyam",
  "Carnatic Vocal",
  "Violin",
  "Mridangam",
  "Veena",
  "Keyboard",
];

const centres = ["Coventry", "Birmingham", "Shirley", "Rugby"];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: FaInstagram,
  },
  {
    label: "Facebook",
    href: "#",
    icon: FaFacebookF,
  },
  {
    label: "YouTube",
    href: "#",
    icon: FaYoutube,
  },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#080505] px-5 pt-20 sm:pt-24 lg:px-10 lg:pt-32">
      {/* Background decoration */}
      <div className="absolute bottom-[-15rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full border border-[#d1ad65]/10">
        <div className="absolute inset-14 rounded-full border border-[#d1ad65]/5" />
        <div className="absolute inset-28 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="absolute left-[-10rem] top-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#541c28]/15 blur-[130px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Footer introduction */}
        <div className="grid gap-12 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:pb-20">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#d1ad65]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
                Centre for Performing Arts
              </p>
            </div>

            <h2 className="mt-8 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
              Tradition lives when it is{" "}
              <span className="italic text-[#d1ad65]">shared.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-white/45">
              Discover Bharatanatyam, Carnatic music and instrumental arts
              through disciplined teaching and meaningful cultural expression.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
            >
              Begin your journey
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d1ad65]/40 transition-all duration-300 group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Main footer links */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.8fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[#d1ad65]/60">
                <span className="font-display text-lg font-semibold tracking-wide text-[#d1ad65]">
                  CKM
                </span>

                <span className="absolute inset-1 rounded-full border border-[#d1ad65]/15" />
              </span>

              <span>
                <span className="block font-display text-2xl leading-none text-[#f8f0e3]">
                  Chitrakalai Manram
                </span>

                <span className="mt-2 block text-[8px] uppercase tracking-[0.3em] text-[#d1ad65]">
                  Centre for Performing Arts
                </span>
              </span>
            </a>

            <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
              Preserving Indian classical arts and inspiring new generations
              through education, performance and cultural connection.
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target={social.href === "#" ? undefined : "_blank"}
                    rel={social.href === "#" ? undefined : "noreferrer"}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/45 transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ad65] hover:bg-[#d1ad65] hover:text-[#0d0808]"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#d1ad65]">
              Explore
            </p>

            <div className="mt-7 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 text-xs text-white/45 transition hover:text-white"
                >
                  <span className="h-px w-0 bg-[#d1ad65] transition-all duration-300 group-hover:w-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Classes */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#d1ad65]">
              Art Forms
            </p>

            <div className="mt-7 space-y-4">
              {classes.map((className) => (
                <a
                  key={className}
                  href="#classes"
                  className="group flex items-center gap-3 text-xs text-white/45 transition hover:text-white"
                >
                  <span className="h-px w-0 bg-[#d1ad65] transition-all duration-300 group-hover:w-4" />
                  {className}
                </a>
              ))}
            </div>
          </div>

          {/* Centres */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#d1ad65]">
              Our Centres
            </p>

            <div className="mt-7 space-y-4">
              {centres.map((centre) => (
                <a
                  key={centre}
                  href="#centres"
                  className="group flex items-center gap-3 text-xs text-white/45 transition hover:text-white"
                >
                  <MapPin size={13} className="text-[#d1ad65]/60" />

                  {centre}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-2 md:items-center">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d1ad65]/25 text-[#d1ad65]">
              <Mail size={16} />
            </span>

            <div>
              <p className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                General enquiries
              </p>

              <p className="mt-2 text-sm text-white/65">
                Official email address to be added
              </p>
            </div>
          </div>

          <div className="md:text-right">
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#d1ad65]">
              Coventry · Birmingham · Shirley · Rugby
            </p>

            <p className="mt-3 text-xs leading-6 text-white/35">
              Contact information and venue details should be confirmed before
              publication.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] uppercase tracking-[0.2em] text-white/25">
            © {currentYear} Chitrakalai Manram. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-[#d1ad65]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[9px] uppercase tracking-[0.2em] text-white/25 transition hover:text-[#d1ad65]"
            >
              Terms
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/40 transition hover:text-[#d1ad65]"
            >
              Back to top
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition group-hover:border-[#d1ad65]">
                <ArrowUp
                  size={13}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Large bottom wordmark */}
        <div className="overflow-hidden border-t border-white/5 py-8">
          <p className="select-none whitespace-nowrap text-center font-display text-[12vw] font-medium leading-[0.75] tracking-[-0.055em] text-white/[0.035]">
            CHITRAKALAI MANRAM
          </p>
        </div>
      </div>
    </footer>
  );
}
