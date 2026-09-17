import { ExternalLink, Music2 } from "lucide-react";

const VIDEO_ID = "PE673DWaN5o";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

export default function SchoolSong() {
  return (
    <section
      id="school-song"
      className="relative overflow-hidden bg-[#48242f] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#95596a]/20 blur-[120px]" />

        <div className="absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-[#b18445]/15 blur-[130px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(209,173,112,0.12),transparent_38%)]" />

        <div className="centre-map-grid absolute inset-0 opacity-25" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Content */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[#d1ad70]" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#d1ad70] sm:text-[11px]">
                Chitrakalai Manram
              </p>
            </div>

            <div className="mb-6 grid h-14 w-14 place-items-center rounded-full border border-[#d1ad70]/40 bg-[#713548]/50 text-[#d1ad70]">
              <Music2 size={23} strokeWidth={1.6} />
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.95] text-[#f8eddf] sm:text-6xl lg:text-7xl">
              Our School
              <span className="mt-2 block italic text-[#d1ad70]">Song</span>
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-7 text-[#e1d3c8] sm:text-base sm:leading-8">
              Experience the official anthem of Chitrakalai Manram—a celebration
              of our heritage, shared values and dedication to the performing
              arts.
            </p>

            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch Chitrakalai Manram School Song on YouTube"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-sm border border-[#d1ad70] bg-[#d1ad70] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#321820] shadow-[0_10px_25px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[#f0d59b] hover:bg-[#f0d59b] hover:text-[#321820] hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0d59b]"
            >
              <span className="text-[#321820]">Watch on YouTube</span>

              <ExternalLink
                size={16}
                strokeWidth={2}
                className="shrink-0 text-[#321820]"
                aria-hidden="true"
              />
            </a>

            <p className="mt-8 border-l-2 border-[#b18445] pl-4 text-xs leading-6 text-[#cbbcb2]">
              Copyright reserved by Chitrakalai Manram.
            </p>
          </div>

          {/* YouTube video */}
          <div className="relative">
            <div className="absolute -inset-3 border border-[#d1ad70]/15 sm:-inset-5" />

            <div className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-[#d1ad70]/70 sm:-right-5 sm:-top-5 sm:h-24 sm:w-24" />

            <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-[#d1ad70]/70 sm:-bottom-5 sm:-left-5 sm:h-24 sm:w-24" />

            <div className="relative aspect-video overflow-hidden bg-[#29191c] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Chitrakalai Manram School Song"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-[9px] uppercase tracking-[0.28em] text-[#cbbcb2]">
                Official School Anthem
              </p>

              <span className="h-px flex-1 bg-gradient-to-r from-[#d1ad70]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
