import { useEffect, useLayoutEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";

const HERO_IMAGE =
  "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/rax%20arangetram.jpg";

const particles = [
  { left: "8%", top: "22%", size: 3, delay: "0s", duration: "6s" },
  { left: "16%", top: "72%", size: 2, delay: "1s", duration: "7s" },
  { left: "35%", top: "18%", size: 2, delay: "2s", duration: "5s" },
  { left: "50%", top: "78%", size: 3, delay: "0.5s", duration: "8s" },
  { left: "67%", top: "25%", size: 2, delay: "1.5s", duration: "6s" },
  { left: "75%", top: "68%", size: 3, delay: "2.5s", duration: "7s" },
  { left: "88%", top: "35%", size: 2, delay: "0.8s", duration: "5s" },
];

export default function Hero() {
  const sectionRef = useRef(null);
  const lightRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      timeline
        .from(".hero-background", {
          scale: 1.18,
          filter: "blur(8px)",
          duration: 2.4,
        })
        .from(
          ".hero-small-label",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=1.5",
        )
        .from(
          ".hero-heading-line",
          {
            opacity: 0,
            yPercent: 120,
            stagger: 0.13,
            duration: 1.2,
          },
          "-=1",
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.9,
          },
          "-=0.7",
        )
        .from(
          ".hero-action",
          {
            opacity: 0,
            y: 25,
            stagger: 0.12,
            duration: 0.8,
          },
          "-=0.5",
        )
        .from(
          ".hero-side-information",
          {
            opacity: 0,
            x: 30,
            duration: 0.9,
          },
          "-=0.7",
        )
        .from(
          ".hero-scroll",
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const light = lightRef.current;

    if (!section || !light) return;

    const handleMouseMove = (event) => {
      const bounds = section.getBoundingClientRect();

      gsap.to(light, {
        x: event.clientX - bounds.left - 175,
        y: event.clientY - bounds.top - 175,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    section.addEventListener("mousemove", handleMouseMove);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-end overflow-hidden bg-[#0d0808]"
    >
      {/* Temporary web-hosted image */}
      <img
        src={HERO_IMAGE}
        alt="Chitrakalai Manram Bharatanatyam Arangetram performance"
        className="hero-background absolute inset-0 h-full w-full object-cover"
        style={{
          objectPosition: "center 25%",
        }}
        fetchPriority="high"
      />

      {/* Main overlays */}
      <div className="absolute inset-0 z-[1] bg-black/25" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0d0808]/95 via-[#0d0808]/65 to-[#0d0808]/10" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0d0808] via-transparent to-black/65" />

      {/* Mobile overlay */}
      <div className="absolute inset-0 z-[1] bg-[#0d0808]/25 md:hidden" />

      {/* Mouse-following light */}
      <div
        ref={lightRef}
        className="pointer-events-none absolute left-0 top-0 z-[2] hidden h-[350px] w-[350px] rounded-full bg-[#d1ad65]/10 blur-[100px] lg:block"
      />

      {/* Background decorative circle */}
      <div className="hero-ornament absolute right-[-15rem] top-1/2 z-[2] hidden h-[42rem] w-[42rem] -translate-y-1/2 rounded-full border border-[#d1ad65]/15 lg:block">
        <div className="absolute inset-12 rounded-full border border-[#d1ad65]/10" />
        <div className="absolute inset-24 rounded-full border border-[#d1ad65]/10" />
      </div>

      {/* CSS particles */}
      <div className="pointer-events-none absolute inset-0 z-[3]">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="hero-particle absolute rounded-full bg-[#f0d59b] shadow-[0_0_12px_rgba(240,213,155,0.8)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      <div className="noise-overlay z-[3]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1450px] px-5 pb-12 pt-36 sm:pb-16 md:pb-20 lg:px-10 lg:pb-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_250px]">
          <div>
            <div className="hero-small-label mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d1ad65]" />

              <p className="text-[9px] font-medium uppercase tracking-[0.4em] text-[#e4c47f] sm:text-[11px]">
                Indian Classical Performing Arts
              </p>
            </div>

            <h1 className="font-display max-w-5xl text-[17vw] font-medium leading-[0.73] tracking-[-0.04em] text-[#f8f0e3] sm:text-[7rem] md:text-[8rem] lg:text-[9rem] xl:text-[10rem]">
              <span className="block overflow-hidden pb-3">
                <span className="hero-heading-line block">Tradition</span>
              </span>

              <span className="block overflow-hidden pb-5">
                <span className="hero-heading-line gold-text block italic">
                  in motion.
                </span>
              </span>
            </h1>

            <div className="mt-5 grid gap-7 md:ml-[20%] md:max-w-3xl md:grid-cols-[1fr_auto] md:items-end">
              <p className="hero-description max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Discover the discipline, elegance and expressive power of
                Bharatanatyam and Indian classical music through authentic
                teaching and meaningful performance.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#about"
                  className="hero-action group flex items-center gap-3 bg-[#d1ad65] px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0d0808] transition-colors duration-300 hover:bg-[#f0d59b] sm:px-6"
                >
                  Explore Our Story
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#school-song"
                  aria-label="Watch the Chitrakalai Manram school anthem"
                  className="hero-action group inline-flex items-center justify-center gap-3 border border-[#d1ad70] bg-[#713548] px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#e2bd76] hover:bg-[#48242f] sm:px-6"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[#f8eddf] text-[#f8eddf] transition-colors duration-300 group-hover:border-[#e2bd76] group-hover:text-[#e2bd76]">
                    <Play
                      size={10}
                      fill="currentColor"
                      className="text-[#f8eddf] transition-colors duration-300 group-hover:text-[#e2bd76]"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="whitespace-nowrap !text-[#f8eddf] transition-colors duration-300 group-hover:!text-[#e2bd76]">
                    Our Anthem
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right-side information */}
          <aside className="hero-side-information hidden border-l border-white/15 pl-6 lg:block">
            <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
              Established
            </p>

            <p className="mt-3 font-display text-4xl text-[#f8f0e3]">2002</p>

            <div className="my-6 h-px bg-white/10" />

            <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
              United Kingdom
            </p>

            <p className="mt-3 text-xs leading-6 text-white/55">
              Coventry
              <br />
              Birmingham
              <br />
              Shirley
              <br />
              Rugby
            </p>
          </aside>
        </div>

        {/* Bottom detail */}
        <div className="mt-12 flex items-end justify-between border-t border-white/10 pt-5">
          <div className="hidden items-center gap-5 text-[9px] uppercase tracking-[0.25em] text-white/35 sm:flex">
            <span>Bharatanatyam</span>
            <span className="h-1 w-1 rounded-full bg-[#d1ad65]" />
            <span>Carnatic Music</span>
            <span className="h-1 w-1 rounded-full bg-[#d1ad65]" />
            <span>Instrumental Arts</span>
          </div>

          <a
            href="#about"
            className="hero-scroll ml-auto flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-white/50 transition hover:text-[#d1ad65]"
          >
            Scroll to discover
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20">
              <ArrowDown size={14} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
