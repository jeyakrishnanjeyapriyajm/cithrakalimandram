import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, MapPin, Navigation } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const centres = [
  {
    id: "coventry",
    number: "01",
    city: "Coventry",
    region: "West Midlands",
    address: "Add the exact Coventry venue address",
    postcode: "Add postcode",
    mapQuery: "Coventry, United Kingdom",
    classes: ["Bharatanatyam", "Carnatic Vocal", "Instrumental Music"],
  },
  {
    id: "birmingham",
    number: "02",
    city: "Birmingham",
    region: "West Midlands",
    address: "Add the exact Birmingham venue address",
    postcode: "Add postcode",
    mapQuery: "Birmingham, United Kingdom",
    classes: ["Bharatanatyam", "Carnatic Vocal", "Violin", "Mridangam"],
  },
  {
    id: "shirley",
    number: "03",
    city: "Shirley",
    region: "Solihull",
    address: "Add the exact Shirley venue address",
    postcode: "Add postcode",
    mapQuery: "Shirley, Solihull, United Kingdom",
    classes: ["Bharatanatyam", "Carnatic Vocal", "Keyboard"],
  },
  {
    id: "rugby",
    number: "04",
    city: "Rugby",
    region: "Warwickshire",
    address: "Add the exact Rugby venue address",
    postcode: "Add postcode",
    mapQuery: "Rugby, Warwickshire, United Kingdom",
    classes: ["Bharatanatyam", "Carnatic Vocal", "Instrumental Music"],
  },
];

export default function Centres() {
  const sectionRef = useRef(null);
  const mapFrameRef = useRef(null);
  const detailsRef = useRef(null);

  const [activeCentre, setActiveCentre] = useState(centres[0]);

  const googleMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    activeCentre.mapQuery,
  )}&output=embed`;

  const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    activeCentre.mapQuery,
  )}`;

  /*
   * Section entrance animations.
   * The location list is intentionally not given opacity: 0,
   * so it will always remain visible.
   */
  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        ".centres-label",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".centres-title-line",
        {
          opacity: 0,
          yPercent: 100,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".centres-title",
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".centre-map",
        {
          opacity: 0,
          x: 40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".centre-map",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  /*
   * Animate only the map and information when a user
   * chooses a different centre.
   */
  useEffect(() => {
    if (mapFrameRef.current) {
      gsap.fromTo(
        mapFrameRef.current,
        {
          opacity: 0,
          scale: 1.025,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.65,
          ease: "power3.out",
        },
      );
    }

    if (detailsRef.current) {
      gsap.fromTo(
        detailsRef.current,
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
      );
    }
  }, [activeCentre.id]);

  const selectCentre = (centre) => {
    if (centre.id !== activeCentre.id) {
      setActiveCentre(centre);
    }
  };

  return (
    <section
      id="centres"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#17100f] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute right-[-12rem] top-[10%] h-[34rem] w-[34rem] rounded-full border border-[#d1ad65]/10">
        <div className="absolute inset-12 rounded-full border border-[#d1ad65]/5" />

        <div className="absolute inset-24 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="pointer-events-none absolute bottom-[-10rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#541c28]/20 blur-[130px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Section heading */}
        <div className="grid gap-10 border-b border-white/10 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
          <div className="centres-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#d1ad65]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#d1ad65]">
              Find Us Near You
            </p>
          </div>

          <div>
            <h2 className="centres-title font-display text-5xl font-medium leading-[0.92] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6rem]">
              <span className="block overflow-hidden pb-2">
                <span className="centres-title-line block">Four centres.</span>
              </span>

              <span className="block overflow-hidden pb-3">
                <span className="centres-title-line gold-text block italic">
                  One artistic family.
                </span>
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50 sm:text-base">
              Explore our learning locations across the West Midlands and
              Warwickshire. Select a centre to view its Google Map, address,
              available classes and directions.
            </p>
          </div>
        </div>

        {/* Locations and Google Map */}
        <div className="centres-content relative mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-[minmax(360px,0.75fr)_minmax(0,1.25fr)] lg:items-start lg:gap-16">
          {/* Left location selector */}
          <div className="centre-selector relative z-10 min-w-0 opacity-100">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/50">
                Select a centre
              </p>

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#d1ad65]">
                04 Locations
              </span>
            </div>

            <div className="border-t border-white/15">
              {centres.map((centre) => {
                const isActive = activeCentre.id === centre.id;

                return (
                  <button
                    key={centre.id}
                    type="button"
                    onClick={() => selectCentre(centre)}
                    aria-pressed={isActive}
                    className={`centre-list-item group relative flex w-full items-center border-b py-6 text-left opacity-100 transition-all duration-300 sm:py-7 ${
                      isActive
                        ? "border-[#d1ad65]/35 bg-[#d1ad65]/[0.04] pl-3 text-[#d1ad65]"
                        : "border-white/10 text-[#f8f0e3] hover:bg-white/[0.02] hover:pl-3 hover:text-[#d1ad65]"
                    }`}
                  >
                    {/* Active line */}
                    <span
                      className={`absolute bottom-0 left-0 top-0 w-[2px] origin-center bg-[#d1ad65] transition-transform duration-300 ${
                        isActive
                          ? "scale-y-100"
                          : "scale-y-0 group-hover:scale-y-100"
                      }`}
                    />

                    {/* Number */}
                    <span
                      className={`w-12 shrink-0 text-[10px] tracking-widest ${
                        isActive ? "text-[#d1ad65]" : "text-white/35"
                      }`}
                    >
                      {centre.number}
                    </span>

                    {/* City */}
                    <span className="min-w-0">
                      <span className="block font-display text-4xl leading-none sm:text-5xl">
                        {centre.city}
                      </span>

                      <span className="mt-2 block text-[8px] uppercase tracking-[0.25em] text-white/35 sm:hidden">
                        {centre.region}
                      </span>
                    </span>

                    {/* Region */}
                    <span className="ml-auto hidden px-4 text-[9px] uppercase tracking-[0.2em] text-white/35 sm:block">
                      {centre.region}
                    </span>

                    <ArrowRight
                      size={18}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-[#d1ad65]"
                          : "text-white/30 group-hover:translate-x-1 group-hover:text-[#d1ad65]"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected location preview */}
            <div className="mt-8 border border-white/10 bg-[#0d0808]/40 p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65]">
                  <MapPin size={16} />
                </span>

                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-[#d1ad65]">
                    Currently selected
                  </p>

                  <p className="mt-2 font-display text-2xl text-[#f8f0e3]">
                    {activeCentre.city}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    {activeCentre.address}
                  </p>

                  <p className="text-xs text-white/35">
                    {activeCentre.postcode}
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-7 max-w-md text-xs leading-6 text-white/45">
              Select a location to update the Google Map and view its available
              classes.
            </p>
          </div>

          {/* Right Google Map */}
          <div className="centre-map relative z-0 min-h-[720px] min-w-0 overflow-hidden border border-white/10 bg-[#0d0808] opacity-100 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            {/* Embedded map */}
            <div ref={mapFrameRef} className="absolute inset-0">
              <iframe
                key={activeCentre.id}
                src={googleMapEmbedUrl}
                title={`${activeCentre.city} centre Google Map`}
                className="h-full w-full border-0 grayscale-[70%] contrast-[1.08]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map colour treatment */}
            <div className="pointer-events-none absolute inset-0 bg-[#541c28]/10 mix-blend-color" />

            {/* Top and bottom shading */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0808] via-transparent to-[#0d0808]/20" />

            {/* Selected location badge */}
            <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-3 border border-white/15 bg-[#0d0808]/85 px-4 py-3 shadow-lg backdrop-blur-xl sm:left-7 sm:top-7">
              <span className="grid h-9 w-9 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65]">
                <MapPin size={15} />
              </span>

              <div>
                <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                  Selected centre
                </p>

                <p className="mt-1 font-display text-xl text-[#f8f0e3]">
                  {activeCentre.city}
                </p>
              </div>
            </div>

            {/* Centre details panel */}
            <div
              ref={detailsRef}
              className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#0d0808]/92 p-6 shadow-[0_-20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <MapPin size={15} className="text-[#d1ad65]" />

                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#d1ad65]">
                      {activeCentre.region}
                    </p>
                  </div>

                  <h3 className="mt-3 font-display text-4xl text-[#f8f0e3] sm:text-5xl">
                    {activeCentre.city}
                  </h3>
                </div>

                <span className="font-display text-4xl text-white/15">
                  {activeCentre.number}
                </span>
              </div>

              {/* Address */}
              <div className="mt-6 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <Navigation
                    size={16}
                    className="mt-1 shrink-0 text-[#d1ad65]"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                      Centre address
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      {activeCentre.address}
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      {activeCentre.postcode}
                    </p>
                  </div>
                </div>
              </div>

              {/* Available classes */}
              <div className="mt-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Available classes
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {activeCentre.classes.map((className) => (
                    <span
                      key={className}
                      className="border border-white/10 bg-white/[0.03] px-3 py-2 text-[8px] uppercase tracking-[0.18em] text-white/50"
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/classes#contact"
                  className="group inline-flex items-center gap-3 bg-[#d1ad65] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#0d0808] transition hover:bg-[#f0d59b]"
                >
                  Enquire About Classes
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <a
                  href={googleDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 bg-[#0d0808]/50 px-5 py-3.5 text-[9px] uppercase tracking-[0.2em] text-white/65 transition hover:border-[#d1ad65] hover:text-[#d1ad65]"
                >
                  <Navigation size={14} />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-7 text-[9px] leading-5 tracking-wide text-white/25">
          Update each centre’s exact address, postcode and Google Maps query
          before publication.
        </p>
      </div>
    </section>
  );
}
