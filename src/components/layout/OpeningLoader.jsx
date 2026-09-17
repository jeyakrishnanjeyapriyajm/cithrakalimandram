import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function OpeningLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  onCompleteRef.current = onComplete;

  useLayoutEffect(() => {
    const loader = loaderRef.current;

    if (!loader) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (reduceMotion) {
        const reducedTimeline = gsap.timeline({
          onComplete: () => {
            gsap.set(loader, {
              autoAlpha: 0,
              pointerEvents: "none",
            });

            onCompleteRef.current?.();
          },
        });

        reducedTimeline
          .from(".loader-content", {
            autoAlpha: 0,
            duration: 0.3,
          })
          .to(".loader-content", {
            autoAlpha: 0,
            duration: 0.25,
            delay: 0.5,
          });

        return;
      }

      const loadingDots = gsap.to(".loader-dot", {
        opacity: 0.25,
        scale: 0.7,
        duration: 0.55,
        stagger: {
          each: 0.16,
          repeat: -1,
          yoyo: true,
        },
        ease: "sine.inOut",
      });

      const timeline = gsap.timeline({
        delay: 0.25,
        onComplete: () => {
          loadingDots.kill();

          gsap.set(loader, {
            autoAlpha: 0,
            pointerEvents: "none",
          });

          onCompleteRef.current?.();
        },
      });

      timeline
        .from(".loader-eyebrow", {
          autoAlpha: 0,
          y: 15,
          duration: 0.65,
          ease: "power3.out",
        })
        .from(
          ".loader-divider",
          {
            scaleX: 0,
            duration: 0.7,
            ease: "power3.inOut",
          },
          "-=0.35",
        )
        .from(
          ".loader-title",
          {
            autoAlpha: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.35",
        )
        .from(
          ".loader-subtitle",
          {
            autoAlpha: 0,
            y: 14,
            duration: 0.65,
            ease: "power3.out",
          },
          "-=0.45",
        )
        .from(
          ".loader-loading",
          {
            autoAlpha: 0,
            duration: 0.4,
          },
          "-=0.2",
        )
        .to(".loader-content", {
          autoAlpha: 0,
          scale: 0.97,
          duration: 0.5,
          delay: 0.7,
          ease: "power2.in",
        })
        .to(
          ".stage-curtain-left",
          {
            xPercent: -103,
            skewX: -1.5,
            duration: 1.8,
            ease: "power4.inOut",
          },
          "-=0.05",
        )
        .to(
          ".stage-curtain-right",
          {
            xPercent: 103,
            skewX: 1.5,
            duration: 1.8,
            ease: "power4.inOut",
          },
          "<",
        )
        .to(
          ".stage-valance",
          {
            yPercent: -105,
            duration: 1.15,
            ease: "power3.inOut",
          },
          "<0.35",
        );
    }, loader);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        .opening-stage {
          isolation: isolate;
          background:
            radial-gradient(
              ellipse at 50% 45%,
              rgba(216, 178, 104, 0.12) 0%,
              rgba(27, 13, 16, 0.45) 38%,
              rgba(6, 4, 5, 0.97) 78%
            ),
            #070405;
        }

        .stage-curtain {
          background-color: #68192b;
          background-image:
            linear-gradient(
              90deg,
              #24040c 0%,
              #651126 8%,
              #9c2942 15%,
              #4d0a1b 23%,
              #a82f49 31%,
              #3b0714 40%,
              #92233d 50%,
              #430817 60%,
              #a32b45 70%,
              #4d0a1b 80%,
              #8a2038 90%,
              #26040d 100%
            );
          box-shadow:
            inset 0 0 90px rgba(0, 0, 0, 0.7),
            inset 0 -90px 90px rgba(0, 0, 0, 0.36);
        }

        .stage-curtain-right {
          background-image:
            linear-gradient(
              90deg,
              #26040d 0%,
              #8a2038 10%,
              #4d0a1b 20%,
              #a32b45 30%,
              #430817 40%,
              #92233d 50%,
              #3b0714 60%,
              #a82f49 69%,
              #4d0a1b 77%,
              #9c2942 85%,
              #651126 92%,
              #24040c 100%
            );
        }

        .curtain-texture {
          background-image:
            repeating-linear-gradient(
              90deg,
              transparent 0,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 3px,
              transparent 9px
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.05),
              transparent 30%,
              rgba(0, 0, 0, 0.25)
            );
          mix-blend-mode: soft-light;
        }

        .curtain-centre-shadow-left {
          background: linear-gradient(
            90deg,
            transparent 65%,
            rgba(0, 0, 0, 0.85) 100%
          );
        }

        .curtain-centre-shadow-right {
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.85) 0%,
            transparent 35%
          );
        }

        .stage-valance-fabric {
          background:
            linear-gradient(
              90deg,
              #26040d 0%,
              #821d35 12%,
              #450817 25%,
              #9b2942 38%,
              #3e0715 50%,
              #9b2942 62%,
              #450817 75%,
              #821d35 88%,
              #26040d 100%
            );
          box-shadow:
            inset 0 -30px 45px rgba(0, 0, 0, 0.5),
            0 16px 30px rgba(0, 0, 0, 0.55);
        }

        .valance-curve {
          background: linear-gradient(
            180deg,
            #8f233c 0%,
            #661329 45%,
            #310610 100%
          );
          border-bottom: 2px solid rgba(213, 177, 99, 0.8);
          box-shadow:
            inset 0 -15px 22px rgba(0, 0, 0, 0.45),
            0 6px 12px rgba(0, 0, 0, 0.28);
        }

        .gold-trim {
          background: linear-gradient(
            180deg,
            #f0d58f 0%,
            #ba8538 48%,
            #e3bd68 72%,
            #82551f 100%
          );
        }

        .loader-glow {
          background: radial-gradient(
            circle,
            rgba(219, 181, 102, 0.14) 0%,
            transparent 68%
          );
        }
      `}</style>

      <div
        ref={loaderRef}
        className="opening-stage fixed inset-0 z-[200] overflow-hidden"
        role="status"
        aria-live="polite"
        aria-label="Opening Chitrakalai Manram"
      >
        <div className="loader-glow pointer-events-none absolute inset-0 z-[1]" />

        {/* Left curtain */}
        <div className="stage-curtain stage-curtain-left absolute inset-y-0 left-0 z-[4] w-[51%] will-change-transform">
          <div className="curtain-texture absolute inset-0 opacity-80" />
          <div className="curtain-centre-shadow-left absolute inset-0" />

          <div className="absolute inset-y-0 left-[14%] w-[7%] bg-black/20 blur-md" />
          <div className="absolute inset-y-0 left-[37%] w-[8%] bg-black/25 blur-md" />
          <div className="absolute inset-y-0 left-[62%] w-[8%] bg-black/30 blur-md" />
          <div className="absolute inset-y-0 left-[85%] w-[9%] bg-black/45 blur-md" />

          <div className="absolute inset-y-0 left-[25%] w-[4%] bg-white/[0.04] blur-md" />
          <div className="absolute inset-y-0 left-[50%] w-[4%] bg-white/[0.045] blur-md" />
          <div className="absolute inset-y-0 left-[75%] w-[4%] bg-white/[0.04] blur-md" />

          <div className="gold-trim absolute right-0 top-0 h-full w-[2px]" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        {/* Right curtain */}
        <div className="stage-curtain stage-curtain-right absolute inset-y-0 right-0 z-[4] w-[51%] will-change-transform">
          <div className="curtain-texture absolute inset-0 opacity-80" />
          <div className="curtain-centre-shadow-right absolute inset-0" />

          <div className="absolute inset-y-0 left-[6%] w-[9%] bg-black/45 blur-md" />
          <div className="absolute inset-y-0 left-[30%] w-[8%] bg-black/30 blur-md" />
          <div className="absolute inset-y-0 left-[55%] w-[8%] bg-black/25 blur-md" />
          <div className="absolute inset-y-0 left-[79%] w-[7%] bg-black/20 blur-md" />

          <div className="absolute inset-y-0 left-[21%] w-[4%] bg-white/[0.04] blur-md" />
          <div className="absolute inset-y-0 left-[46%] w-[4%] bg-white/[0.045] blur-md" />
          <div className="absolute inset-y-0 left-[71%] w-[4%] bg-white/[0.04] blur-md" />

          <div className="gold-trim absolute left-0 top-0 h-full w-[2px]" />

          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        {/* Top curtain */}
        <div className="stage-valance absolute inset-x-0 top-0 z-[8] h-24 will-change-transform sm:h-32">
          <div className="stage-valance-fabric absolute inset-x-0 top-0 h-[75%]">
            <div className="curtain-texture absolute inset-0 opacity-60" />

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#75501e] via-[#e4c273] to-[#75501e]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex h-[52%] overflow-hidden">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="valance-curve relative -ml-px flex-1 rounded-b-[50%]"
              >
                <div className="curtain-texture absolute inset-0 rounded-b-[50%] opacity-45" />

                <div className="absolute left-1/2 top-0 h-[75%] w-[16%] -translate-x-1/2 bg-black/20 blur-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Text content — no logo */}
        <div className="loader-content absolute inset-0 z-10 flex items-center justify-center px-5 pt-12 text-center sm:pt-16">
          <div className="w-full max-w-3xl">
            <p className="loader-eyebrow text-[8px] font-medium uppercase tracking-[0.32em] text-[#d5b66b] sm:text-[10px] sm:tracking-[0.48em]">
              Centre for Performing Arts
            </p>

            <div className="loader-divider mx-auto my-6 h-px w-28 origin-center bg-gradient-to-r from-transparent via-[#ddbd70] to-transparent sm:w-40" />

            <h1 className="loader-title font-display text-4xl leading-tight text-[#fff8eb] drop-shadow-[0_5px_16px_rgba(0,0,0,0.75)] sm:text-6xl lg:text-7xl">
              Chitrakalai Manram
            </h1>

            <p className="loader-subtitle mt-4 font-display text-lg italic tracking-wide text-white/60 sm:text-xl">
              Tradition in Motion
            </p>

            <div
              className="loader-loading mt-9 flex items-center justify-center gap-2.5"
              aria-hidden="true"
            >
              <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#dfbf72]" />
              <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#dfbf72]" />
              <span className="loader-dot h-1.5 w-1.5 rounded-full bg-[#dfbf72]" />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
      </div>
    </>
  );
}
