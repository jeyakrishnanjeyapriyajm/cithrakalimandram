import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = {
  dancer:
    "https://images.unsplash.com/photo-1746983047239-cb817eba7d05?auto=format&fit=crop&w=1800&q=88",

  sculpture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/12th_century_dancer_sculpture_at_Belur_Vaishnava_Hindu_temple_Karnataka_3.jpg/1920px-12th_century_dancer_sculpture_at_Belur_Vaishnava_Hindu_temple_Karnataka_3.jpg",
};

const principles = [
  {
    number: "01",
    title: "Bhava",
    subtitle: "Expression",
    description:
      "Emotion and storytelling expressed through movement, gesture and facial expression.",
  },
  {
    number: "02",
    title: "Raga",
    subtitle: "Melody",
    description:
      "The melodic foundation that gives the performance its distinctive mood and character.",
  },
  {
    number: "03",
    title: "Tala",
    subtitle: "Rhythm",
    description:
      "The rhythmic framework that brings structure, precision and energy to every movement.",
  },
];

export default function Tradition() {
  const sectionRef = useRef(null);
  const mainImageRef = useRef(null);
  const sculptureImageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".tradition-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".tradition-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".tradition-title",
          start: "top 80%",
        },
      });

      gsap.from(".tradition-main-image", {
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".tradition-main-image",
          start: "top 82%",
        },
      });

      gsap.from(".tradition-sculpture", {
        opacity: 0,
        y: 60,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tradition-sculpture",
          start: "top 85%",
        },
      });

      gsap.from(".tradition-copy", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tradition-content",
          start: "top 80%",
        },
      });

      gsap.from(".principle-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".principles-grid",
          start: "top 82%",
        },
      });

      gsap.fromTo(
        mainImageRef.current,
        {
          scale: 1.15,
          yPercent: -5,
        },
        {
          scale: 1.05,
          yPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".tradition-main-image",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        sculptureImageRef.current,
        {
          scale: 1.12,
          yPercent: -4,
        },
        {
          scale: 1.03,
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: ".tradition-sculpture",
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
      id="tradition"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#17100f] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background details */}
      <div className="absolute right-[-15rem] top-[-12rem] h-[38rem] w-[38rem] rounded-full border border-[#d1ad65]/10">
        <div className="absolute inset-12 rounded-full border border-[#d1ad65]/5" />
        <div className="absolute inset-24 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="absolute bottom-[20%] left-[-10rem] h-96 w-96 rounded-full bg-[#541c28]/20 blur-[130px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Section label */}
        <div className="tradition-label mb-12 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              The Art of Expression
            </p>
          </div>

          <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/30 sm:block">
            Dance · Music · Storytelling
          </p>
        </div>

        {/* Large heading */}
        <div className="tradition-title">
          <h2 className="font-display text-[16vw] font-medium leading-[0.72] tracking-[-0.045em] text-[#f8f0e3] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
            <span className="block overflow-hidden pb-4">
              <span className="tradition-title-line block">Bharata</span>
            </span>

            <span className="block overflow-hidden pb-6 md:ml-[22%]">
              <span className="tradition-title-line gold-text block italic">
                natyam.
              </span>
            </span>
          </h2>
        </div>

        {/* Story layout */}
        <div className="mt-8 grid gap-12 lg:mt-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Main image */}
          <div>
            <div className="tradition-main-image relative h-[500px] overflow-hidden bg-[#0d0808] sm:h-[650px] lg:h-[820px]">
              <img
                ref={mainImageRef}
                src={images.dancer}
                alt="Bharatanatyam dancers performing together"
                className="absolute inset-0 h-[110%] w-full object-cover"
                style={{
                  objectPosition: "center",
                }}
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808]/80 via-transparent to-black/10" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#e4c47f]">
                    Movement as language
                  </p>

                  <p className="mt-3 max-w-md font-display text-2xl leading-tight text-white sm:text-3xl">
                    Every gesture carries meaning.
                  </p>
                </div>

                <span className="hidden font-display text-5xl text-white/30 sm:block">
                  02
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="tradition-content flex flex-col justify-between">
            <div>
              <p className="tradition-copy font-display text-3xl leading-tight text-[#f8f0e3] sm:text-4xl lg:text-5xl">
                A classical language of movement, rhythm and{" "}
                <span className="italic text-[#d1ad65]">human emotion.</span>
              </p>

              <p className="tradition-copy mt-8 text-sm leading-8 text-white/55 sm:text-base">
                Bharatanatyam brings movement, music, rhythm and expression
                together to communicate stories and ideas. Every posture,
                gesture and glance contributes to the meaning of the
                performance.
              </p>

              <p className="tradition-copy mt-5 text-sm leading-8 text-white/55 sm:text-base">
                At Chitrakalai Manram, students are introduced to both the
                physical discipline and expressive purpose of the art. Training
                develops coordination, musical awareness, confidence and a
                deeper understanding of cultural tradition.
              </p>

              <a
                href="#classes"
                className="tradition-copy group mt-10 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
              >
                Explore Bharatanatyam classes
                <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d1ad65]/40 transition-all duration-300 group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </div>

            {/* Small sculpture image */}
            <div className="tradition-sculpture mt-16 grid grid-cols-[130px_1fr] gap-6 border-t border-white/10 pt-7 sm:grid-cols-[180px_1fr] lg:mt-24">
              <div className="relative h-52 overflow-hidden bg-[#0d0808] sm:h-64">
                <img
                  ref={sculptureImageRef}
                  src={images.sculpture}
                  alt="Historic South Indian temple dancer sculpture"
                  className="absolute inset-0 h-[110%] w-full object-cover grayscale"
                  style={{
                    objectPosition: "center",
                  }}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-[#541c28]/15 mix-blend-color" />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                  Rooted in heritage
                </p>

                <h3 className="mt-4 font-display text-2xl leading-tight text-[#f8f0e3] sm:text-3xl">
                  Ancient knowledge, taught with contemporary care.
                </h3>

                <p className="mt-4 hidden text-xs leading-6 text-white/45 sm:block">
                  Traditional foundations are preserved while students are
                  supported through a clear and encouraging learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vazhuvoor subsection */}
        <div className="mt-24 border-t border-white/10 pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d1ad65]">
                Our Classical Foundation
              </p>

              <p className="mt-5 font-display text-6xl leading-none text-[#f8f0e3] md:text-8xl">
                Vazhuvoor
              </p>

              <p className="mt-2 font-display text-4xl italic text-[#d1ad65] md:text-5xl">
                tradition
              </p>
            </div>

            <div>
              <p className="max-w-3xl font-display text-3xl leading-tight text-[#f8f0e3] sm:text-4xl">
                Graceful movement, expressive storytelling and a deep
                relationship between rhythm and emotion.
              </p>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/55 sm:text-base">
                The Vazhuvoor tradition is recognised for its flowing movement,
                elegant presentation and expressive quality. Students are guided
                to understand not only how a movement is performed, but also the
                intention and feeling it communicates.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="principles-grid mt-16 grid border-t border-white/10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <article
                key={principle.number}
                className={`principle-card group relative py-8 md:px-8 md:py-10 ${
                  index !== principles.length - 1
                    ? "border-b border-white/10 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg text-[#d1ad65]">
                    {principle.number}
                  </span>

                  <span className="h-2 w-2 rounded-full border border-[#d1ad65]/50 transition-all duration-300 group-hover:bg-[#d1ad65]" />
                </div>

                <h3 className="mt-12 font-display text-5xl text-[#f8f0e3] transition-colors duration-300 group-hover:text-[#d1ad65]">
                  {principle.title}
                </h3>

                <p className="mt-2 text-[9px] uppercase tracking-[0.32em] text-[#d1ad65]">
                  {principle.subtitle}
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                  {principle.description}
                </p>

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#d1ad65] transition-all duration-500 group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
