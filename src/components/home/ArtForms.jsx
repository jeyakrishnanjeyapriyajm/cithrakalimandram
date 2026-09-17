import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Music2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const artForms = [
  {
    id: 1,
    number: "01",
    title: "Bharatanatyam",
    category: "Classical Dance",
    description:
      "Develop grace, rhythm, expression and confidence through structured classical dance training.",
    image:
      "https://images.unsplash.com/photo-1764014792668-bc484714744f?auto=format&fit=crop&w=1600&q=85",
    position: "center 25%",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Carnatic Vocal",
    category: "Classical Music",
    description:
      "Build a strong musical foundation through melody, rhythm and traditional compositions.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=85",
    position: "center",
  },
  {
    id: 3,
    number: "03",
    title: "Violin",
    category: "String Instrument",
    description:
      "Learn technique, musical expression and the melodic language of Carnatic violin.",
    image:
      "https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=1200&q=85",
    position: "center",
  },
  {
    id: 4,
    number: "04",
    title: "Mridangam",
    category: "Percussion",
    description:
      "Understand rhythmic patterns, coordination and the foundational role of tala.",
    image:
      "https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&w=1200&q=85",
    position: "center",
  },
  {
    id: 5,
    number: "05",
    title: "Veena",
    category: "String Instrument",
    description:
      "Explore melody, technique and expression through one of India’s classical instruments.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",
    position: "center",
  },
  {
    id: 6,
    number: "06",
    title: "Keyboard",
    category: "Contemporary Instrument",
    description:
      "Build practical musical knowledge through notes, chords, rhythm and performance.",
    image:
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1200&q=85",
    position: "center",
  },
];

export default function ArtForms() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".artforms-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".artforms-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".artforms-title",
          start: "top 82%",
        },
      });

      gsap.from(".artform-card", {
        opacity: 0,
        y: 60,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".artforms-grid",
          start: "top 78%",
        },
      });

      gsap.from(".artforms-footer", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".artforms-footer",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="classes"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0808] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d1ad65]/30 to-transparent" />

      <div className="absolute right-[-12rem] top-[25%] h-[32rem] w-[32rem] rounded-full bg-[#541c28]/20 blur-[140px]" />

      <div className="absolute bottom-[10%] left-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#d1ad65]/5 blur-[130px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Section heading */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
          <div className="artforms-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              Explore Our Classes
            </p>
          </div>

          <div>
            <h2 className="artforms-title font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
              <span className="block overflow-hidden pb-2">
                <span className="artforms-title-line block">Discover your</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="artforms-title-line gold-text block italic">
                  form of expression.
                </span>
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
              From classical dance and vocal music to traditional and
              contemporary instruments, every class provides a disciplined and
              encouraging path for artistic growth.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="artforms-grid mt-14 grid auto-rows-[420px] gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:auto-rows-[360px]">
          {artForms.map((item) => (
            <article
              key={item.id}
              className={`artform-card group relative overflow-hidden bg-[#17100f] ${
                item.featured ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <img
                src={item.image}
                alt={`${item.title} class`}
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-110"
                style={{
                  objectPosition: item.position,
                }}
                loading="lazy"
              />

              {/* Image overlays */}
              <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/10" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808] via-[#0d0808]/15 to-black/20" />

              <div className="absolute inset-0 bg-[#541c28]/10 opacity-0 mix-blend-color transition duration-500 group-hover:opacity-100" />

              {/* Card top */}
              <div className="absolute left-5 right-5 top-5 flex items-start justify-between sm:left-6 sm:right-6 sm:top-6">
                <span className="border border-white/20 bg-black/15 px-3 py-2 text-[9px] tracking-[0.25em] text-white/70 backdrop-blur-md">
                  {item.number}
                </span>

                <span className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-black/15 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#d1ad65] group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                  <ArrowUpRight size={17} />
                </span>
              </div>

              {/* Card content */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="text-[9px] font-medium uppercase tracking-[0.32em] text-[#e4c47f]">
                  {item.category}
                </p>

                <h3
                  className={`mt-3 font-display leading-none text-[#f8f0e3] ${
                    item.featured
                      ? "text-5xl sm:text-6xl lg:text-7xl"
                      : "text-4xl lg:text-5xl"
                  }`}
                >
                  {item.title}
                </h3>

                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p
                      className={`max-w-lg pt-4 text-xs leading-6 text-white/65 ${
                        item.featured ? "sm:text-sm sm:leading-7" : ""
                      }`}
                    >
                      {item.description}
                    </p>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-3 border-b border-[#d1ad65] pb-1 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
                    >
                      Class details
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d1ad65] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="artforms-footer mt-12 flex flex-col gap-8 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65]">
              <Music2 size={17} />
            </span>

            <p className="max-w-xl text-sm leading-7 text-white/50">
              Not sure which class is right for you? Speak with our team and
              find the most suitable learning path.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center justify-center gap-3 border border-[#d1ad65]/60 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d1ad65] transition-all duration-300 hover:bg-[#d1ad65] hover:text-[#0d0808]"
          >
            Find Your Class
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
