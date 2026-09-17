import { useEffect, useState } from "react";
import { Expand, X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/8c4423f0-dd75-480c-9273-cab52c113be3.jpg",
    alt: "Chitrakalai Manram classical performance",
    featured: true,
  },
  {
    id: 2,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/de7c4414-465c-4a59-9c67-76993a78e8ac.jpg",
    alt: "Indian classical dance performance",
  },
  {
    id: 3,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/40be1d42-5872-4a21-94e1-f8678cb1f7d5.jpg",
    alt: "Cultural stage presentation",
  },
  {
    id: 4,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/a4280759-24e4-4b71-a462-9f06b4987597.jpg",
    alt: "Chitrakalai Manram cultural programme",
  },
  {
    id: 5,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/867202b6-ea3e-4fa7-b151-bcb75284b0e1.jpg",
    alt: "Traditional performing arts event",
  },
  {
    id: 6,
    image: "https://img1.wsimg.com/isteam/stock/DNNRrzQ",
    alt: "Classical music performance",
  },
  {
    id: 7,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/rax%20arangetram.jpg",
    alt: "Arangetram performance",
    featured: true,
  },
  {
    id: 8,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/usa%20photo%201.jpg",
    alt: "International cultural performance",
  },
  {
    id: 9,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/usa%20photo%202.jpg",
    alt: "Chitrakalai Manram international event",
  },
  {
    id: 10,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/india%20arangetram1.jpg",
    alt: "Arangetram celebration in India",
  },
  {
    id: 11,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/front%20cover%202018.jpg",
    alt: "Chitrakalai Manram 2018 production",
    featured: true,
  },
  {
    id: 12,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/cover.jpg",
    alt: "Chitrakalai Manram event programme",
  },
  {
    id: 13,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/IMG-20221122-WA0011.jpg",
    alt: "Chitrakalai Manram performance moment",
  },
  {
    id: 14,
    image:
      "https://img1.wsimg.com/isteam/ip/64c5a7d9-77e1-4681-b879-053094daf4ba/IMG_8082.jpg",
    alt: "Classical arts performance on stage",
  },
];

export default function PerformanceGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <section
        id="performance-gallery"
        className="relative overflow-hidden bg-[#eee1d0] py-20 sm:py-24 lg:py-28"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[30rem] w-[30rem] rounded-full bg-[#713548]/10 blur-[130px]" />

          <div className="absolute -bottom-40 right-0 h-[32rem] w-[32rem] rounded-full bg-[#b18445]/15 blur-[130px]" />

          <div className="centre-map-grid absolute inset-0 opacity-25" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-10">
          {/* Section heading */}
          <div className="mb-12 grid items-end gap-7 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-[#b18445]" />

                <p className="text-[9px] font-bold uppercase tracking-[0.4em] !text-[#713548] sm:text-[11px]">
                  Moments on Stage
                </p>
              </div>

              <h2 className="font-display text-5xl font-medium leading-[0.95] !text-[#48242f] sm:text-6xl lg:text-7xl">
                Our Performance
                <span className="mt-2 block italic text-[#9a6d30]">
                  Gallery
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-xl text-sm leading-7 !text-[#665356] sm:text-base sm:leading-8">
                Explore memorable moments from our performances, Arangetrams,
                cultural celebrations and international presentations.
              </p>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[#b18445]" />

                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] !text-[#887476]">
                  Select an image to view
                </p>
              </div>
            </div>
          </div>

          {/* Gallery grid */}
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[250px] lg:grid-cols-4">
            {galleryImages.map((item, index) => {
              const isLarge = item.featured;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`Open image: ${item.alt}`}
                  className={`group relative overflow-hidden border border-[#b18445]/20 bg-[#ddc7ac] text-left shadow-[0_12px_35px_rgba(72,36,47,0.1)] ${
                    isLarge ? "sm:col-span-2 sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#29191c]/80 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />

                  <div className="absolute inset-x-0 bottom-0 flex translate-y-2 items-end justify-between gap-4 p-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] !text-[#f8eddf]">
                      View Performance
                    </p>

                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#f8eddf]/40 bg-[#48242f]/50 text-[#f8eddf] backdrop-blur-md">
                      <Expand size={15} aria-hidden="true" />
                    </span>
                  </div>

                  <span className="absolute left-4 top-4 bg-[#48242f]/85 px-3 py-2 text-[8px] font-bold uppercase tracking-[0.18em] text-[#f8eddf] backdrop-blur-md">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="mt-10 flex items-center gap-4 border-t border-[#713548]/15 pt-5">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#b18445]" />

            <p className="text-[9px] uppercase tracking-[0.22em] !text-[#887476]">
              Images copyright reserved by Chitrakalai Manram
            </p>
          </div>
        </div>
      </section>

      {/* Image lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-[#160d10]/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Performance image preview"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image preview"
            className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full border border-[#f8eddf]/30 bg-[#48242f]/70 text-[#f8eddf] transition hover:border-[#d1ad70] hover:text-[#d1ad70] sm:right-8 sm:top-8"
          >
            <X size={20} />
          </button>

          <div
            className="relative max-h-[88vh] max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="max-h-[82vh] w-auto max-w-full object-contain shadow-[0_30px_100px_rgba(0,0,0,0.5)]"
            />

            <div className="mt-4 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#d1ad70]" />

              <p className="text-center text-[9px] font-semibold uppercase tracking-[0.22em] !text-[#f8eddf]">
                {selectedImage.alt}
              </p>

              <span className="h-px w-8 bg-[#d1ad70]" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
