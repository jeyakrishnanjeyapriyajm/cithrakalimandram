import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HERITAGE_IMAGE =
  "https://images.unsplash.com/photo-1746983062953-74c19d0dfc5d?auto=format&fit=crop&w=1600&q=88";

export default function Heritage() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const counterRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".heritage-label", {
        opacity: 0,
        y: 25,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".heritage-heading-line", {
        opacity: 0,
        yPercent: 110,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".heritage-heading",
          start: "top 82%",
        },
      });

      gsap.from(".heritage-copy", {
        opacity: 0,
        y: 35,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".heritage-copy-area",
          start: "top 82%",
        },
      });

      gsap.from(".heritage-image-wrapper", {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".heritage-image-wrapper",
          start: "top 80%",
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
            trigger: ".heritage-image-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        counterRef.current,
        {
          innerText: 0,
        },
        {
          innerText: 22,
          duration: 2,
          snap: {
            innerText: 1,
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: counterRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.from(".heritage-detail", {
        opacity: 0,
        x: -20,
        stagger: 0.12,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".heritage-details",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0808] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background decorations */}
      <div className="absolute left-[-15rem] top-[20%] h-[35rem] w-[35rem] rounded-full border border-[#d1ad65]/5" />

      <div className="absolute left-[-10rem] top-[27%] h-[25rem] w-[25rem] rounded-full border border-[#d1ad65]/5" />

      <div className="absolute right-[-10rem] top-[15%] h-96 w-96 rounded-full bg-[#541c28]/15 blur-[130px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Top heading */}
        <div className="grid gap-10 border-b border-white/10 pb-16 md:grid-cols-[0.7fr_1.3fr] md:items-start lg:pb-24">
          <div className="heritage-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              Our Heritage
            </p>
          </div>

          <h2 className="heritage-heading max-w-4xl font-display text-5xl font-medium leading-[0.95] tracking-[-0.025em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
            <span className="block overflow-hidden pb-2">
              <span className="heritage-heading-line block">
                More than a school.
              </span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="heritage-heading-line gold-text block italic">
                A living tradition.
              </span>
            </span>
          </h2>
        </div>

        {/* Main section */}
        <div className="mt-16 grid gap-14 lg:mt-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Image */}
          <div>
            <div className="heritage-image-wrapper relative h-[500px] overflow-hidden bg-[#17100f] sm:h-[620px] lg:h-[760px]">
              <img
                ref={imageRef}
                src={HERITAGE_IMAGE}
                alt="Bharatanatyam dancers performing in traditional dress"
                className="absolute inset-0 h-[110%] w-full object-cover"
                style={{
                  objectPosition: "center",
                }}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808]/60 via-transparent to-transparent" />

              {/* Image number */}
              <div className="absolute left-5 top-5 border border-white/20 bg-black/20 px-4 py-3 backdrop-blur-md">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                  Since
                </p>

                <p className="mt-1 font-display text-2xl text-[#f0d59b]">
                  2002
                </p>
              </div>

              {/* Image caption */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#f0d59b]">
                    Expression
                  </p>

                  <p className="mt-2 font-display text-2xl text-white">
                    Grace in every movement
                  </p>
                </div>

                <span className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/30 font-display text-lg text-white/80 sm:flex">
                  01
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Statistic */}
              <div className="flex items-start border-b border-white/10 pb-10">
                <span
                  ref={counterRef}
                  className="font-display text-[8rem] font-medium leading-[0.75] tracking-[-0.06em] text-[#f8f0e3] sm:text-[10rem] lg:text-[12rem]"
                >
                  0
                </span>

                <span className="ml-2 font-display text-5xl text-[#d1ad65] sm:text-7xl">
                  +
                </span>
              </div>

              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.38em] text-[#d1ad65]">
                Years of artistic dedication
              </p>

              <div className="heritage-copy-area mt-12">
                <p className="heritage-copy font-display text-3xl leading-tight text-[#f8f0e3] sm:text-4xl lg:text-5xl">
                  Preserving classical arts while inspiring confident,
                  expressive new generations.
                </p>

                <p className="heritage-copy mt-8 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                  Chitrakalai Manram is a UK-based centre dedicated to Indian
                  classical performing arts. Through structured teaching,
                  disciplined practice and meaningful performance, students
                  develop artistry, confidence and a lasting connection with
                  their cultural heritage.
                </p>

                <p className="heritage-copy mt-5 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                  Our learning environment brings together tradition and
                  contemporary teaching, giving every student the opportunity to
                  understand the meaning behind each movement, rhythm and
                  expression.
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="heritage-details mt-14 lg:mt-20">
              <div className="grid border-y border-white/10 sm:grid-cols-3">
                <div className="heritage-detail border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:pr-5">
                  <p className="font-display text-3xl text-[#f8f0e3]">04</p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/40">
                    UK Centres
                  </p>
                </div>

                <div className="heritage-detail border-b border-white/10 py-6 sm:border-b-0 sm:border-r sm:px-5">
                  <p className="font-display text-3xl text-[#f8f0e3]">06+</p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/40">
                    Art Forms
                  </p>
                </div>

                <div className="heritage-detail py-6 sm:pl-5">
                  <p className="font-display text-3xl text-[#f8f0e3]">All</p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.28em] text-white/40">
                    Experience Levels
                  </p>
                </div>
              </div>

              <a
                href="#tradition"
                className="group mt-10 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
              >
                Discover our tradition
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d1ad65]/40 transition-all duration-300 group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
