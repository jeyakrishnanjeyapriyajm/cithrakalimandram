import { useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import templeBackground from "../../assets/story/temple-background.webp";
import natarajaImage from "../../assets/story/nataraja.png";
import redSilkImage from "../../assets/story/red-silk.png";

gsap.registerPlugin(ScrollTrigger);

export default function NatarajaScrollStory() {
  const sectionRef = useRef(null);
  const sceneRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => ({
        id: index,
        left: `${(index * 37) % 100}%`,
        top: `${(index * 61) % 100}%`,
        size: 2 + (index % 4),
        delay: (index % 7) * 0.15,
      })),
    [],
  );

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const scene = sceneRef.current;

    if (!section || !scene) return undefined;

    const context = gsap.context(() => {
      gsap.set(".story-circle-path", {
        strokeDasharray: 1600,
        strokeDashoffset: 1600,
      });

      gsap.set(".story-statue", {
        opacity: 0.06,
        scale: 0.88,
        filter: "brightness(0.15) blur(5px)",
      });

      gsap.set(".story-label", {
        opacity: 0,
        y: 20,
      });

      gsap.set(".story-callout", {
        opacity: 0,
        x: 20,
      });

      gsap.set(".story-silk", {
        opacity: 0,
        xPercent: -20,
        yPercent: 30,
      });

      gsap.set(".story-outro", {
        opacity: 0,
        y: 30,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
          invalidateOnRefresh: true,
        },
      });

      // 0%–15%: opening title disappears and circle begins.
      timeline
        .to(
          ".story-intro",
          {
            opacity: 0,
            y: -30,
            duration: 0.1,
          },
          0.04,
        )
        .to(
          ".story-circle-path",
          {
            strokeDashoffset: 0,
            duration: 0.2,
          },
          0.08,
        )
        .to(
          ".story-light-ring",
          {
            opacity: 1,
            scale: 1,
            duration: 0.17,
          },
          0.08,
        )
        .to(
          ".story-message-one",
          {
            opacity: 1,
            x: 0,
            duration: 0.1,
          },
          0.12,
        )

        // 15%–30%: Nataraja begins appearing.
        .to(
          ".story-statue",
          {
            opacity: 0.55,
            scale: 0.96,
            filter: "brightness(0.65) blur(1px)",
            duration: 0.17,
          },
          0.2,
        )
        .to(
          ".story-message-one",
          {
            opacity: 0,
            x: 20,
            duration: 0.06,
          },
          0.25,
        )
        .to(
          ".story-message-two",
          {
            opacity: 1,
            x: 0,
            duration: 0.1,
          },
          0.27,
        )

        // 30%–50%: full statue and educational callouts.
        .to(
          ".story-statue",
          {
            opacity: 1,
            scale: 1,
            filter: "brightness(1) blur(0px)",
            duration: 0.18,
          },
          0.32,
        )
        .to(
          ".story-message-two",
          {
            opacity: 0,
            duration: 0.06,
          },
          0.44,
        )
        .to(
          ".story-label",
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 0.1,
          },
          0.46,
        )

        // 50%–70%: callouts disappear and golden energy appears.
        .to(
          ".story-label",
          {
            opacity: 0,
            y: -15,
            stagger: 0.01,
            duration: 0.07,
          },
          0.61,
        )
        .to(
          ".story-energy",
          {
            opacity: 1,
            scale: 1,
            rotation: 18,
            duration: 0.14,
          },
          0.61,
        )
        .to(
          ".story-message-three",
          {
            opacity: 1,
            x: 0,
            duration: 0.08,
          },
          0.64,
        )

        // 70%–85%: red silk enters.
        .to(
          ".story-message-three",
          {
            opacity: 0,
            duration: 0.05,
          },
          0.76,
        )
        .to(
          ".story-silk",
          {
            opacity: 0.9,
            xPercent: 0,
            yPercent: 0,
            duration: 0.12,
          },
          0.75,
        )
        .to(
          ".story-message-four",
          {
            opacity: 1,
            x: 0,
            duration: 0.08,
          },
          0.79,
        )

        // 85%–100%: close the statue scene and show final branding.
        .to(
          [
            ".story-statue",
            ".story-circle",
            ".story-energy",
            ".story-silk",
            ".story-message-four",
          ],
          {
            opacity: 0,
            scale: 1.04,
            duration: 0.1,
          },
          0.89,
        )
        .to(
          ".story-background",
          {
            filter: "blur(5px) brightness(0.55)",
            scale: 1.06,
            duration: 0.1,
          },
          0.89,
        )
        .to(
          ".story-outro",
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
          },
          0.9,
        );

      gsap.to(".story-particle", {
        y: -100,
        x: "random(-35, 35)",
        opacity: 0,
        duration: "random(2.5, 5)",
        repeat: -1,
        stagger: 0.12,
        ease: "none",
      });

      gsap.to(".story-glow", {
        opacity: 0.8,
        scale: 1.12,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, scene);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="nataraja-scroll-section">
      <div ref={sceneRef} className="nataraja-scene">
        <img src={templeBackground} alt="" className="story-background" />

        <div className="story-dark-overlay" />
        <div className="story-glow" />

        <div className="story-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="story-particle"
              style={{
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>

        {/* Opening content */}
        <div className="story-intro">
          <p className="story-eyebrow">Centre for Performing Arts</p>

          <h1>
            Chitrakalai
            <br />
            Manram
          </h1>

          <div className="story-divider" />

          <p className="story-tagline">
            Dance <span>•</span> Discipline <span>•</span> Devotion
          </p>
        </div>

        {/* Main statue composition */}
        <div className="story-main">
          <div className="story-circle">
            <svg
              viewBox="0 0 540 540"
              className="story-circle-svg"
              aria-hidden="true"
            >
              <defs>
                <filter id="goldGlow">
                  <feGaussianBlur stdDeviation="6" result="blur" />

                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7c3d0e" />
                  <stop offset="45%" stopColor="#fff0a5" />
                  <stop offset="70%" stopColor="#e78825" />
                  <stop offset="100%" stopColor="#6e2c08" />
                </linearGradient>
              </defs>

              <circle
                className="story-circle-path"
                cx="270"
                cy="270"
                r="235"
                fill="none"
                stroke="url(#goldStroke)"
                strokeWidth="5"
                filter="url(#goldGlow)"
              />
            </svg>

            <div className="story-light-ring" />
          </div>

          <div className="story-energy" />

          <img
            src={natarajaImage}
            alt="Nataraja, the divine form of dance"
            className="story-statue"
          />
        </div>

        {/* Messages */}
        <div className="story-callout story-message-one">
          <p>Where rhythm begins.</p>
          <span />
        </div>

        <div className="story-callout story-message-two">
          <p>Where movement becomes expression.</p>
          <span />
        </div>

        <div className="story-callout story-message-three">
          <p>Where dance becomes devotion.</p>
          <span />
        </div>

        <div className="story-callout story-message-four">
          <p>Where tradition moves forever.</p>
          <span />
        </div>

        {/* Educational labels */}
        <div className="story-label story-label-left story-label-one">
          <strong>Damaru</strong>
          <small>Creation</small>
          <span />
        </div>

        <div className="story-label story-label-left story-label-two">
          <strong>Abhaya</strong>
          <small>Protection</small>
          <span />
        </div>

        <div className="story-label story-label-right story-label-three">
          <strong>Agni</strong>
          <small>Transformation</small>
          <span />
        </div>

        <div className="story-label story-label-right story-label-four">
          <strong>Raised Foot</strong>
          <small>Liberation</small>
          <span />
        </div>

        <div className="story-label story-label-right story-label-five">
          <strong>Apasmara</strong>
          <small>Ignorance</small>
          <span />
        </div>

        <img src={redSilkImage} alt="" className="story-silk" />

        {/* Final content */}
        <div className="story-outro">
          <h2>Chitrakalai Manram</h2>
          <p>Centre for Performing Arts</p>
          <div />
          <small>Nurturing Art. Empowering Generations.</small>
        </div>
      </div>

      <style>{`
        .nataraja-scroll-section {
          position: relative;
          height: 700vh;
          background: #050302;
        }

        .nataraja-scene {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
          background: #050302;
          color: #f8e8c7;
        }

        .story-background {
          position: absolute;
          inset: -3%;
          width: 106%;
          height: 106%;
          object-fit: cover;
          filter: brightness(0.42);
          transform: scale(1);
          will-change: transform, filter;
        }

        .story-dark-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.72),
              rgba(0, 0, 0, 0.08) 50%,
              rgba(0, 0, 0, 0.72)
            ),
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.35),
              transparent 45%,
              rgba(0, 0, 0, 0.75)
            );
        }

        .story-glow {
          position: absolute;
          left: 50%;
          top: 48%;
          width: min(70vw, 800px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(242, 162, 56, 0.22),
            rgba(173, 72, 14, 0.08) 45%,
            transparent 72%
          );
          transform: translate(-50%, -50%);
          filter: blur(20px);
        }

        .story-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .story-particle {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: #ffb347;
          box-shadow:
            0 0 7px #ff9e2c,
            0 0 16px rgba(255, 125, 25, 0.85);
          opacity: 0.75;
        }

        .story-intro {
          position: absolute;
          left: 7vw;
          top: 50%;
          z-index: 8;
          transform: translateY(-50%);
          max-width: 500px;
        }

        .story-eyebrow,
        .story-tagline,
        .story-outro p,
        .story-outro small {
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .story-eyebrow {
          margin-bottom: 22px;
          color: #c89a5b;
          font-family: Manrope, sans-serif;
          font-size: 10px;
        }

        .story-intro h1 {
          margin: 0;
          color: #f4ddba;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(50px, 6vw, 90px);
          font-weight: 400;
          line-height: 0.84;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .story-divider {
          width: 40px;
          height: 1px;
          margin: 38px 0 20px;
          background: #d6a563;
        }

        .story-tagline {
          color: #c9a878;
          font-family: Manrope, sans-serif;
          font-size: 9px;
        }

        .story-tagline span {
          margin: 0 10px;
          color: #8e532d;
        }

        .story-main {
          position: absolute;
          left: 50%;
          top: 50%;
          z-index: 4;
          width: min(68vw, 760px);
          height: min(90vh, 850px);
          transform: translate(-50%, -50%);
        }

        .story-circle,
        .story-energy {
          position: absolute;
          left: 50%;
          top: 50%;
          width: min(64vw, 690px);
          aspect-ratio: 1;
          transform: translate(-50%, -50%);
        }

        .story-circle-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
          transform: rotate(-90deg);
        }

        .story-light-ring {
          position: absolute;
          inset: 7%;
          border: 1px solid rgba(255, 178, 64, 0.65);
          border-radius: 50%;
          box-shadow:
            0 0 14px rgba(255, 148, 35, 0.8),
            inset 0 0 25px rgba(255, 135, 20, 0.25);
          opacity: 0;
          transform: scale(0.8);
        }

        .story-statue {
          position: absolute;
          left: 50%;
          bottom: 0;
          z-index: 5;
          width: auto;
          height: min(88vh, 820px);
          max-width: 88vw;
          object-fit: contain;
          transform: translateX(-50%);
          transform-origin: center bottom;
          will-change: opacity, filter, transform;
        }

        .story-energy {
          z-index: 3;
          border: 2px solid rgba(255, 154, 37, 0.6);
          border-radius: 50%;
          box-shadow:
            0 0 15px rgba(255, 139, 25, 0.7),
            0 0 60px rgba(255, 101, 10, 0.25);
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.75);
        }

        .story-callout {
          position: absolute;
          right: 7vw;
          top: 50%;
          z-index: 8;
          width: min(230px, 22vw);
          color: #efd8b6;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(27px, 3vw, 47px);
          line-height: 1.05;
          transform: translateY(-50%);
          opacity: 0;
        }

        .story-callout span {
          display: block;
          width: 38px;
          height: 1px;
          margin-top: 25px;
          background: #d19b54;
        }

        .story-label {
          position: absolute;
          z-index: 10;
          display: flex;
          flex-direction: column;
          min-width: 130px;
          color: #ebc98e;
          font-family: "Cormorant Garamond", Georgia, serif;
          line-height: 1;
        }

        .story-label strong {
          font-size: 22px;
          font-weight: 500;
        }

        .story-label small {
          margin-top: 4px;
          font-size: 15px;
          color: #b98b54;
        }

        .story-label span {
          position: absolute;
          top: 15px;
          width: 80px;
          height: 1px;
          background: linear-gradient(
            90deg,
            #c68c45,
            rgba(198, 140, 69, 0.15)
          );
        }

        .story-label-left {
          left: 16vw;
          text-align: right;
        }

        .story-label-left span {
          left: calc(100% + 15px);
        }

        .story-label-right {
          right: 15vw;
        }

        .story-label-right span {
          right: calc(100% + 15px);
          transform: rotate(180deg);
        }

        .story-label-one {
          top: 29%;
        }

        .story-label-two {
          top: 48%;
        }

        .story-label-three {
          top: 27%;
        }

        .story-label-four {
          top: 48%;
        }

        .story-label-five {
          top: 68%;
        }

        .story-silk {
          position: absolute;
          left: -5%;
          bottom: -5%;
          z-index: 7;
          width: 110%;
          height: 42%;
          object-fit: cover;
          pointer-events: none;
          filter: brightness(0.58) saturate(1.1);
        }

        .story-outro {
          position: absolute;
          inset: 0;
          z-index: 12;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .story-outro h2 {
          margin: 0;
          color: #f1d1aa;
          font-family: "Cormorant Garamond", Georgia, serif;
          font-size: clamp(35px, 5vw, 72px);
          font-weight: 400;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .story-outro p {
          margin-top: 18px;
          color: #d1ae7c;
          font-family: Manrope, sans-serif;
          font-size: 10px;
        }

        .story-outro div {
          width: 42px;
          height: 1px;
          margin: 30px 0;
          background: #cf9851;
        }

        .story-outro small {
          color: #d4b98d;
          font-family: Manrope, sans-serif;
          font-size: 9px;
        }

        @media (max-width: 900px) {
          .nataraja-scroll-section {
            height: 600vh;
          }

          .story-intro {
            left: 7%;
            right: 7%;
            top: 45%;
          }

          .story-main {
            width: 95vw;
          }

          .story-circle,
          .story-energy {
            width: 92vw;
          }

          .story-statue {
            height: 72vh;
            max-width: 96vw;
          }

          .story-callout {
            left: 8%;
            right: auto;
            top: auto;
            bottom: 8%;
            width: 62%;
            font-size: 30px;
          }

          .story-label {
            display: none;
          }

          .story-silk {
            width: 140%;
            left: -20%;
          }

          .story-outro {
            padding: 24px;
          }

          .story-outro h2 {
            line-height: 1.05;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .nataraja-scroll-section {
            height: 100vh;
          }

          .story-intro,
          .story-callout,
          .story-label,
          .story-silk,
          .story-circle,
          .story-energy {
            display: none;
          }

          .story-outro {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
