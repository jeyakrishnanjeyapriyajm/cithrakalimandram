import { useLayoutEffect, useRef } from "react";
import { ArrowUpRight, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AWARD_PLACEHOLDER =
  "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=1800&q=88";

const achievements = [
  {
    year: "2002",
    title: "The Journey Began",
    description:
      "Chitrakalai Manram began its journey of preserving and teaching Indian classical performing arts in the United Kingdom.",
  },
  {
    year: "Growth",
    title: "A Wider Learning Community",
    description:
      "The organisation expanded its teaching presence across Coventry, Birmingham, Shirley and Rugby.",
  },
  {
    year: "Today",
    title: "A New Generation of Artists",
    description:
      "Students continue to develop confidence, discipline, cultural knowledge and artistic expression through training and performance.",
  },
];

export default function Recognition() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".recognition-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".recognition-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".recognition-title",
          start: "top 82%",
        },
      });

      gsap.from(".award-image-wrapper", {
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        duration: 1.4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".award-image-wrapper",
          start: "top 80%",
        },
      });

      gsap.from(".award-content-item", {
        opacity: 0,
        y: 35,
        stagger: 0.14,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".award-content",
          start: "top 80%",
        },
      });

      gsap.from(".achievement-item", {
        opacity: 0,
        x: 35,
        stagger: 0.18,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".achievement-timeline",
          start: "top 82%",
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
            trigger: ".award-image-wrapper",
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
      id="recognition"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#17100f] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background decoration */}
      <div className="absolute right-[-14rem] top-[-10rem] h-[38rem] w-[38rem] rounded-full border border-[#d1ad65]/10">
        <div className="absolute inset-12 rounded-full border border-[#d1ad65]/5" />
        <div className="absolute inset-24 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="absolute bottom-[-12rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#541c28]/20 blur-[140px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
          <div className="recognition-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              Recognition
            </p>
          </div>

          <h2 className="recognition-title font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
            <span className="block overflow-hidden pb-2">
              <span className="recognition-title-line block">Moments of</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="recognition-title-line gold-text block italic">
                honour and progress.
              </span>
            </span>
          </h2>
        </div>

        {/* Recognition spotlight */}
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Image */}
          <div className="award-image-wrapper relative h-[500px] overflow-hidden bg-[#0d0808] sm:h-[650px] lg:h-[760px]">
            <img
              ref={imageRef}
              src={AWARD_PLACEHOLDER}
              alt="Temporary recognition and achievement visual"
              className="absolute inset-0 h-[110%] w-full object-cover"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0808]/90 via-[#0d0808]/10 to-black/20" />

            <div className="absolute left-5 top-5 flex items-center gap-3 border border-white/20 bg-black/30 px-4 py-3 backdrop-blur-md">
              <Award size={15} className="text-[#d1ad65]" />
            </div>

            <div className="absolute bottom-7 left-6 right-6 sm:bottom-9 sm:left-8 sm:right-8">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                A meaningful milestone
              </p>

              <p className="mt-3 max-w-xl font-display text-3xl leading-tight text-white sm:text-4xl">
                Celebrating dedication to arts, culture and community.
              </p>
            </div>
          </div>

          {/* Award information */}
          <div className="award-content flex flex-col justify-between">
            <div>
              <div className="award-content-item flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65]">
                  <ShieldCheck size={19} />
                </span>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#d1ad65]">
                    Special recognition
                  </p>

                  <p className="mt-2 text-xs text-white/40">
                    Official wording pending confirmation
                  </p>
                </div>
              </div>

              <h3 className="award-content-item mt-10 font-display text-4xl leading-tight text-[#f8f0e3] sm:text-5xl lg:text-6xl">
                Recognition connected with the{" "}
                <span className="italic text-[#d1ad65]">Lord Lieutenant.</span>
              </h3>

              <p className="award-content-item mt-8 text-sm leading-8 text-white/55 sm:text-base">
                Chitrakalai Manram received special recognition relating to its
                contribution and dedication to the performing arts and
                community.
              </p>

              <p className="award-content-item mt-5 text-sm leading-8 text-white/55 sm:text-base">
                Before publication, this paragraph should be replaced with the
                exact title, official authority, date, recipient and wording
                shown on the certificate or recognition letter.
              </p>

              {/* Verification notice */}
              <div className="award-content-item mt-10 border border-[#d1ad65]/20 bg-[#d1ad65]/5 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-[#d1ad65]"
                  />

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#d1ad65]">
                      Content verification required
                    </p>

                    <p className="mt-3 text-xs leading-6 text-white/45">
                      Confirm the official title, year, awarding organisation,
                      recipient name and approved photograph before making this
                      section public.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#performances"
              className="award-content-item group mt-12 inline-flex items-center gap-4 self-start text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d1ad65]"
            >
              Explore our performances
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d1ad65]/40 transition-all duration-300 group-hover:bg-[#d1ad65] group-hover:text-[#0d0808]">
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </a>
          </div>
        </div>

        {/* Achievement timeline */}
        <div className="mt-24 border-t border-white/10 pt-16 md:mt-36 md:pt-24">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d1ad65]">
                Our Journey
              </p>

              <h3 className="mt-6 font-display text-5xl leading-none text-[#f8f0e3] sm:text-6xl">
                Milestones
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                A continuing journey shaped by teaching, performance and
                cultural connection.
              </p>
            </div>

            <div className="achievement-timeline border-t border-white/10">
              {achievements.map((achievement, index) => (
                <article
                  key={achievement.title}
                  className="achievement-item group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[110px_1fr_auto] sm:items-start sm:gap-7"
                >
                  <p className="font-display text-2xl text-[#d1ad65]">
                    {achievement.year}
                  </p>

                  <div>
                    <h4 className="font-display text-3xl text-[#f8f0e3] transition-colors duration-300 group-hover:text-[#d1ad65]">
                      {achievement.title}
                    </h4>

                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                      {achievement.description}
                    </p>
                  </div>

                  <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/30 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#d1ad65] group-hover:text-[#d1ad65]">
                    <ArrowUpRight size={15} />
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
