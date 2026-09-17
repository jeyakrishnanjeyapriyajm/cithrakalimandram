import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FOUNDER_PLACEHOLDER =
  "https://images.unsplash.com/photo-1770888834901-9574cc91349c?auto=format&fit=crop&w=1600&q=88";

const highlights = [
  {
    number: "22+",
    label: "Years of dedication",
  },
  {
    number: "04",
    label: "Learning centres",
  },
  {
    number: "06+",
    label: "Performing art forms",
  },
];

export default function Founder() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".founder-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".founder-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".founder-title",
          start: "top 82%",
        },
      });

      gsap.from(".founder-image-wrapper", {
        opacity: 0,
        clipPath: "inset(100% 0 0 0)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".founder-image-wrapper",
          start: "top 80%",
        },
      });

      gsap.from(".founder-content-item", {
        opacity: 0,
        y: 35,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-content",
          start: "top 80%",
        },
      });

      gsap.from(".founder-stat", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".founder-statistics",
          start: "top 85%",
        },
      });

      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.15,
          yPercent: -5,
        },
        {
          scale: 1.05,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".founder-image-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="founder"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0808] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background */}
      <div className="absolute left-[-15rem] top-[10%] h-[35rem] w-[35rem] rounded-full bg-[#541c28]/20 blur-[140px]" />

      <div className="absolute right-[-10rem] top-[30%] h-[32rem] w-[32rem] rounded-full border border-[#d1ad65]/10">
        <div className="absolute inset-12 rounded-full border border-[#d1ad65]/5" />
        <div className="absolute inset-24 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Section heading */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
          <div className="founder-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              Leadership and Vision
            </p>
          </div>

          <h2 className="founder-title font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
            <span className="block overflow-hidden pb-2">
              <span className="founder-title-line block">
                The person behind
              </span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="founder-title-line gold-text block italic">
                the tradition.
              </span>
            </span>
          </h2>
        </div>

        {/* Main founder content */}
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Image */}
          <div>
            <div className="founder-image-wrapper relative h-[570px] overflow-hidden bg-[#17100f] sm:h-[720px] lg:h-[850px]">
              <img
                ref={imageRef}
                src={FOUNDER_PLACEHOLDER}
                alt="Temporary Indian classical arts visual"
                className="absolute inset-0 h-[110%] w-full object-cover"
                style={{
                  objectPosition: "center top",
                }}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808]/90 via-transparent to-black/10" />

              <div className="absolute inset-0 bg-[#541c28]/10 mix-blend-color" />

              {/* Image caption */}
              <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                  Founder and Artistic Director
                </p>

                <h3 className="mt-3 max-w-lg font-display text-4xl leading-none text-white sm:text-5xl">
                  Smt. Jeyachitra
                  <span className="block italic text-[#e4c47f]">
                    Sivamyooran
                  </span>
                </h3>
              </div>
            </div>

            <p className="mt-4 text-[9px] leading-5 tracking-wide text-white/25">
              Replace this temporary visual with the founder’s approved
              high-resolution portrait before publication.
            </p>
          </div>

          {/* Biography */}
          <div className="founder-content flex flex-col justify-between">
            <div>
              <div className="founder-content-item flex items-center gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65]">
                  <Quote size={16} />
                </span>

                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                  An enduring artistic vision
                </p>
              </div>

              <p className="founder-content-item mt-10 font-display text-3xl leading-tight text-[#f8f0e3] sm:text-4xl lg:text-5xl">
                Creating a space where discipline, cultural knowledge and{" "}
                <span className="italic text-[#d1ad65]">
                  artistic confidence
                </span>{" "}
                grow together.
              </p>

              <div className="founder-content-item mt-10 border-l border-[#d1ad65]/40 pl-6 sm:pl-8">
                <p className="text-sm leading-8 text-white/55 sm:text-base">
                  Smt. Jeyachitra Sivamyooran founded Chitrakalai Manram with a
                  commitment to preserve and teach Indian classical performing
                  arts within the United Kingdom.
                </p>

                <p className="mt-5 text-sm leading-8 text-white/55 sm:text-base">
                  Through structured training and performance opportunities, the
                  organisation supports students as they build technical
                  ability, self-confidence and a meaningful relationship with
                  their cultural heritage.
                </p>
              </div>

              {/* Philosophy */}
              <div className="founder-content-item mt-12 border-y border-white/10 py-8">
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/35">
                  Teaching philosophy
                </p>

                <p className="mt-5 font-display text-2xl leading-relaxed text-[#f8f0e3] sm:text-3xl">
                  “Tradition becomes meaningful when students understand it,
                  experience it and carry it forward through their own
                  expression.”
                </p>

                <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-[#d1ad65]">
                  Proposed website statement
                </p>
              </div>

              <p className="founder-content-item mt-7 text-xs leading-6 text-white/35">
                The biography and statement above should be reviewed and
                approved by the founder before the website is published.
              </p>
            </div>

            {/* Button */}
            <div className="founder-content-item mt-12 lg:mt-16">
              <a
                href="#recognition"
                className="group inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
              >
                Discover the journey
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d1ad65]/40 transition-all duration-300 group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="founder-statistics mt-20 grid border-y border-white/10 sm:grid-cols-3 lg:mt-28">
          {highlights.map((highlight, index) => (
            <article
              key={highlight.label}
              className={`founder-stat relative px-2 py-9 sm:px-8 sm:py-12 ${
                index !== highlights.length - 1
                  ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <p className="font-display text-6xl leading-none text-[#f8f0e3] sm:text-7xl">
                {highlight.number}
              </p>

              <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#d1ad65]">
                {highlight.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
