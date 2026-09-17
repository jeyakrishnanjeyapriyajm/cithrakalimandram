import { ExternalLink, MapPin, Play } from "lucide-react";

const videos = [
  {
    id: "WIArznjI5xg",
    title: "Our New Birmingham Branch",
    subtitle: "Opening Ceremony — West Bromwich, Birmingham",
    description:
      "Celebrating the opening of our new Birmingham branch, offering Bharatanatyam, Violin, Keyboard, Mridangam and Carnatic Music.",
    url: "https://youtu.be/WIArznjI5xg",
    location: "West Bromwich, Birmingham",
  },
  {
    id: "xzI5Abl4Fdo",
    title: "Bharathavedham 2022",
    subtitle: "Official Trailer",
    description:
      "Watch the official trailer of Bharathavedham 2022, celebrating classical performance, culture, music and artistic expression.",
    url: "https://youtu.be/xzI5Abl4Fdo",
    location: "Chitrakalai Manram",
  },
];

export default function VideoHighlights() {
  return (
    <section
      id="video-highlights"
      className="relative overflow-hidden bg-[#e5d3bd] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#713548]/10 blur-[120px]" />

        <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-[#b18445]/15 blur-[120px]" />

        <div className="centre-map-grid absolute inset-0 opacity-30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1350px] px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mb-12 grid items-end gap-7 lg:grid-cols-[1fr_0.7fr] lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#b18445]" />

              <p className="text-[9px] font-bold uppercase tracking-[0.4em] !text-[#713548] sm:text-[11px]">
                Performances & Celebrations
              </p>
            </div>

            <h2 className="font-display text-5xl font-medium leading-[0.95] !text-[#48242f] sm:text-6xl lg:text-7xl">
              Stories from
              <span className="mt-2 block italic text-[#9a6d30]">
                our stage.
              </span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 !text-[#665356] sm:text-base sm:leading-8">
            Explore moments from our branch celebrations, cultural programmes
            and classical performing arts productions.
          </p>
        </div>

        {/* Video cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {videos.map((video, index) => (
            <article
              key={video.id}
              className="group overflow-hidden border border-[#b18445]/25 bg-[#f7eee2] shadow-[0_20px_55px_rgba(72,36,47,0.12)]"
            >
              {/* Embedded YouTube video */}
              <div className="relative aspect-video overflow-hidden bg-[#29191c]">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 bg-[#48242f]/90 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.2em] text-[#f8eddf] backdrop-blur-md">
                  <Play size={11} fill="currentColor" aria-hidden="true" />
                  Video {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Video information */}
              <div className="p-6 sm:p-8">
                <div className="mb-4 flex items-center gap-2 text-[#8c6427]">
                  <MapPin size={14} aria-hidden="true" />

                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] !text-[#8c6427]">
                    {video.location}
                  </p>
                </div>

                <h3 className="font-display text-3xl font-semibold leading-tight !text-[#48242f] sm:text-4xl">
                  {video.title}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] !text-[#95596a]">
                  {video.subtitle}
                </p>

                <div className="my-5 h-px bg-gradient-to-r from-[#b18445]/50 to-transparent" />

                <p className="text-sm leading-7 !text-[#665356]">
                  {video.description}
                </p>

                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center justify-center gap-3 border border-[#713548] bg-[#713548] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.17em] shadow-[0_8px_20px_rgba(72,36,47,0.16)] transition-all duration-300 hover:border-[#48242f] hover:bg-[#48242f]"
                >
                  <span className="whitespace-nowrap !text-[#f8eddf]">
                    Watch on YouTube
                  </span>

                  <ExternalLink
                    size={15}
                    className="shrink-0 text-[#f8eddf]"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 flex items-center gap-4 border-t border-[#713548]/15 pt-5">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b18445]" />

          <p className="text-[9px] uppercase tracking-[0.22em] !text-[#887476]">
            Video content copyright reserved by Chitrakalai Manram
          </p>
        </div>
      </div>
    </section>
  );
}
