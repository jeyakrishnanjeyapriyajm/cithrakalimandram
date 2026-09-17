import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const performances = [
  {
    id: 1,
    number: "01",
    title: "The Art of Bharatanatyam",
    category: "Featured Performance",
    year: "2026",
    location: "United Kingdom",
    description:
      "A celebration of rhythm, storytelling and expressive movement presented by the students of Chitrakalai Manram.",
    image:
      "https://images.unsplash.com/photo-1746983062953-74c19d0dfc5d?auto=format&fit=crop&w=2000&q=88",
    position: "center",
    videoId: "",
    featured: true,
  },
  {
    id: 2,
    number: "02",
    title: "Bharathavedham",
    category: "Dance Production",
    year: "2025",
    location: "United Kingdom",
    description:
      "A classical dance presentation bringing together disciplined movement, music and storytelling.",
    image:
      "https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?auto=format&fit=crop&w=1400&q=85",
    position: "center",
    videoId: "",
  },
  {
    id: 3,
    number: "03",
    title: "Our School Song",
    category: "Music",
    year: "2025",
    location: "Chitrakalai Manram",
    description:
      "A musical celebration reflecting the identity, values and artistic community of Chitrakalai Manram.",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1400&q=85",
    position: "center",
    videoId: "",
  },
  {
    id: 4,
    number: "04",
    title: "Annual Showcase",
    category: "Student Performance",
    year: "2025",
    location: "West Midlands",
    description:
      "Students share their learning journey through classical dance, vocal music and instrumental performance.",
    image:
      "https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1400&q=85",
    position: "center",
    videoId: "",
  },
];

export default function Performances() {
  const sectionRef = useRef(null);
  const [activePerformance, setActivePerformance] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".performances-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".performances-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".performances-title",
          start: "top 82%",
        },
      });

      gsap.from(".featured-performance", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-performance",
          start: "top 80%",
        },
      });

      gsap.from(".performance-card", {
        opacity: 0,
        y: 50,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".performance-grid",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    document.body.style.overflow = activePerformance ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activePerformance]);

  useEffect(() => {
    const closeWithEscape = (event) => {
      if (event.key === "Escape") {
        setActivePerformance(null);
      }
    };

    window.addEventListener("keydown", closeWithEscape);

    return () => {
      window.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) =>
      current === performances.length - 1 ? 0 : current + 1,
    );
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? performances.length - 1 : current - 1,
    );
  };

  return (
    <>
      <section
        id="performances"
        ref={sectionRef}
        className="relative overflow-hidden bg-[#0d0808] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
      >
        <div className="absolute right-[-14rem] top-[20%] h-[36rem] w-[36rem] rounded-full bg-[#541c28]/20 blur-[140px]" />

        <div className="noise-overlay" />

        <div className="relative mx-auto max-w-[1450px]">
          {/* Header */}
          <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
            <div className="performances-label flex items-center gap-4">
              <span className="h-px w-10 bg-[#d1ad65]" />

              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
                On Stage
              </p>
            </div>

            <div>
              <h2 className="performances-title font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
                <span className="block overflow-hidden pb-2">
                  <span className="performances-title-line block">
                    Stories brought
                  </span>
                </span>

                <span className="block overflow-hidden pb-3">
                  <span className="performances-title-line gold-text block italic">
                    to life on stage.
                  </span>
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
                Performance is an essential part of the learning journey,
                allowing students to transform technique and practice into
                confident artistic expression.
              </p>
            </div>
          </div>

          {/* Featured performance */}
          <article className="featured-performance group relative mt-14 h-[580px] overflow-hidden bg-[#17100f] sm:h-[680px] md:mt-20 lg:h-[800px]">
            <img
              src={performances[0].image}
              alt={performances[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              style={{
                objectPosition: performances[0].position,
              }}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0808]/85 via-[#0d0808]/20 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808]/95 via-transparent to-black/20" />

            {/* Number */}
            <div className="absolute left-5 top-5 border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-md sm:left-8 sm:top-8">
              <p className="text-[9px] tracking-[0.3em] text-white/70">
                {performances[0].number}
              </p>
            </div>

            {/* Play button */}
            <button
              type="button"
              onClick={() => setActivePerformance(performances[0])}
              aria-label={`Play ${performances[0].title}`}
              className="absolute left-1/2 top-1/2 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/50 bg-black/15 text-white backdrop-blur-md transition-all duration-500 hover:scale-110 hover:border-[#d1ad65] hover:bg-[#d1ad65] hover:text-[#0d0808] sm:h-24 sm:w-24"
            >
              <Play size={24} fill="currentColor" />
            </button>

            {/* Information */}
            <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10">
              <div className="grid gap-7 md:grid-cols-[1fr_350px] md:items-end">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                    {performances[0].category}
                  </p>

                  <h3 className="mt-4 max-w-4xl font-display text-4xl leading-none text-white sm:text-6xl lg:text-7xl">
                    {performances[0].title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[9px] uppercase tracking-[0.25em] text-white/45">
                    <span>{performances[0].year}</span>
                    <span className="text-[#d1ad65]">•</span>
                    <span>{performances[0].location}</span>
                  </div>
                </div>

                <p className="hidden text-sm leading-7 text-white/55 md:block">
                  {performances[0].description}
                </p>
              </div>
            </div>
          </article>

          {/* Gallery */}
          <div className="performance-grid mt-5 grid gap-5 md:grid-cols-3">
            {performances.slice(1).map((performance) => (
              <article
                key={performance.id}
                className="performance-card group relative h-[460px] overflow-hidden bg-[#17100f]"
              >
                <img
                  src={performance.image}
                  alt={performance.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{
                    objectPosition: performance.position,
                  }}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808] via-[#0d0808]/20 to-black/20" />

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.3em] text-white/55">
                    {performance.number}
                  </span>

                  <button
                    type="button"
                    onClick={() => setActivePerformance(performance)}
                    aria-label={`Play ${performance.title}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/15 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#d1ad65] group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]"
                  >
                    <Play size={14} fill="currentColor" />
                  </button>
                </div>

                <div className="absolute bottom-6 left-5 right-5">
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#d1ad65]">
                    {performance.category}
                  </p>

                  <h3 className="mt-3 font-display text-3xl leading-tight text-white">
                    {performance.title}
                  </h3>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {performance.year} · {performance.location}
                  </p>
                </div>

                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d1ad65] transition-all duration-700 group-hover:w-full" />
              </article>
            ))}
          </div>

          {/* Mobile-style slider preview */}
          <div className="mt-16 border-t border-white/10 pt-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                  Performance archive
                </p>

                <p className="mt-3 font-display text-3xl text-[#f8f0e3]">
                  {performances[activeSlide].title}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous performance"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-[#d1ad65] hover:text-[#d1ad65]"
                >
                  <ArrowLeft size={17} />
                </button>

                <p className="min-w-14 text-center text-[10px] tracking-[0.25em] text-white/35">
                  0{activeSlide + 1} / 0{performances.length}
                </p>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next performance"
                  className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-white/60 transition hover:border-[#d1ad65] hover:text-[#d1ad65]"
                >
                  <ArrowRight size={17} />
                </button>
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#d1ad65]"
              >
                View all performances
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </div>

          <p className="mt-7 text-[9px] leading-5 tracking-wide text-white/25">
            Temporary images and performance information are being used. Add
            official event photographs, titles, dates and YouTube video IDs
            before publication.
          </p>
        </div>
      </section>

      {/* Video modal */}
      {activePerformance && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activePerformance.title} video`}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setActivePerformance(null)}
        >
          <button
            type="button"
            onClick={() => setActivePerformance(null)}
            aria-label="Close video"
            className="absolute right-5 top-5 z-10 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition hover:border-[#d1ad65] hover:text-[#d1ad65] sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <div
            className="w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video overflow-hidden bg-[#17100f]">
              {activePerformance.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activePerformance.videoId}?autoplay=1`}
                  title={activePerformance.title}
                  className="h-full w-full"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="relative grid h-full place-items-center overflow-hidden text-center">
                  <img
                    src={activePerformance.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-25"
                  />

                  <div className="absolute inset-0 bg-[#0d0808]/65" />

                  <div className="relative max-w-lg px-6">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#d1ad65]/40 text-[#d1ad65]">
                      <Play size={20} />
                    </span>

                    <h3 className="mt-6 font-display text-3xl text-white sm:text-4xl">
                      {activePerformance.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      Add the official YouTube video ID to display this
                      performance.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0d0808] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d1ad65]">
                  {activePerformance.category}
                </p>

                <p className="mt-2 font-display text-2xl text-white">
                  {activePerformance.title}
                </p>
              </div>

              <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                {activePerformance.year} · {activePerformance.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
