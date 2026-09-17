import { useLayoutEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  Mail,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  centre: "",
  artForm: "",
  studentAge: "",
  message: "",
  consent: false,
};

const centres = ["Coventry", "Birmingham", "Shirley", "Rugby"];

const artForms = [
  "Bharatanatyam",
  "Carnatic Vocal",
  "Violin",
  "Mridangam",
  "Veena",
  "Keyboard",
];

export default function HomeCTA() {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".cta-label", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".cta-title-line", {
        opacity: 0,
        yPercent: 120,
        stagger: 0.12,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".cta-title",
          start: "top 82%",
        },
      });

      gsap.from(".cta-information-item", {
        opacity: 0,
        y: 30,
        stagger: 0.13,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-information",
          start: "top 82%",
        },
      });

      gsap.from(".cta-form", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-form",
          start: "top 82%",
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const whatsappNumber = "94762146064";

    const message = `
New Class Enquiry – Chitrakalai Manram

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Student Age: ${formData.studentAge || "Not provided"}
Preferred Centre: ${formData.centre}
Interested Art Form: ${formData.artForm}

Message:
${formData.message || "No additional message provided"}
  `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData(initialForm);
    setSubmitted(false);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#541c28] px-5 py-24 sm:py-28 md:py-36 lg:px-10 lg:py-44"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6e2637] via-[#541c28] to-[#220d13]" />

      <div className="absolute right-[-15rem] top-[-12rem] h-[42rem] w-[42rem] rounded-full border border-[#d1ad65]/15">
        <div className="absolute inset-14 rounded-full border border-[#d1ad65]/10" />
        <div className="absolute inset-28 rounded-full border border-[#d1ad65]/5" />
      </div>

      <div className="absolute bottom-[-15rem] left-[-12rem] h-[35rem] w-[35rem] rounded-full bg-[#d1ad65]/10 blur-[120px]" />

      <div className="noise-overlay" />

      <div className="relative mx-auto max-w-[1450px]">
        {/* Header */}
        <div className="grid gap-10 border-b border-white/15 pb-14 md:grid-cols-[0.65fr_1.35fr] md:items-start lg:pb-20">
          <div className="cta-label flex items-center gap-4">
            <span className="h-px w-10 bg-[#f0d59b]" />

            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#f0d59b]">
              Join Chitrakalai Manram
            </p>
          </div>

          <h2 className="cta-title font-display text-5xl font-medium leading-[0.9] tracking-[-0.03em] text-[#f8f0e3] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            <span className="block overflow-hidden pb-2">
              <span className="cta-title-line block">Begin your</span>
            </span>

            <span className="block overflow-hidden pb-3">
              <span className="cta-title-line block italic text-[#f0d59b]">
                artistic journey.
              </span>
            </span>
          </h2>
        </div>

        {/* Main content */}
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* Left information */}
          <div className="cta-information">
            <p className="cta-information-item font-display text-3xl leading-tight text-[#f8f0e3] sm:text-4xl">
              Every meaningful journey begins with{" "}
              <span className="italic text-[#f0d59b]">one first step.</span>
            </p>

            <p className="cta-information-item mt-7 max-w-lg text-sm leading-8 text-white/60 sm:text-base">
              Tell us which art form interests you, and our team will help you
              find a suitable centre, class level and learning schedule.
            </p>

            {/* Process */}
            <div className="mt-12 border-t border-white/15">
              <div className="cta-information-item flex gap-5 border-b border-white/15 py-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#f0d59b]/35 font-display text-lg text-[#f0d59b]">
                  1
                </span>

                <div>
                  <h3 className="font-display text-2xl text-white">
                    Share your interest
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    Select an art form, preferred centre and provide basic
                    student information.
                  </p>
                </div>
              </div>

              <div className="cta-information-item flex gap-5 border-b border-white/15 py-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#f0d59b]/35 font-display text-lg text-[#f0d59b]">
                  2
                </span>

                <div>
                  <h3 className="font-display text-2xl text-white">
                    Speak with our team
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    We will help identify the appropriate class, level and
                    available timetable.
                  </p>
                </div>
              </div>

              <div className="cta-information-item flex gap-5 border-b border-white/15 py-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#f0d59b]/35 font-display text-lg text-[#f0d59b]">
                  3
                </span>

                <div>
                  <h3 className="font-display text-2xl text-white">
                    Start learning
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-white/45">
                    Join a supportive environment grounded in discipline,
                    culture and artistic expression.
                  </p>
                </div>
              </div>
            </div>

            {/* Response information */}
            <div className="cta-information-item mt-8 flex items-start gap-4">
              <Clock3 size={18} className="mt-1 shrink-0 text-[#f0d59b]" />

              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#f0d59b]">
                  Enquiry response
                </p>

                <p className="mt-2 text-xs leading-6 text-white/45">
                  Add the official response time once it has been confirmed by
                  the administration team.
                </p>
              </div>
            </div>
          </div>

          {/* Form container */}
          <div className="cta-form border border-white/15 bg-[#0d0808]/80 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            {!submitted ? (
              <>
                <div className="flex items-start justify-between border-b border-white/10 pb-7">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                      Student Enquiry
                    </p>

                    <h3 className="mt-3 font-display text-3xl text-[#f8f0e3] sm:text-4xl">
                      Find the right class
                    </h3>
                  </div>

                  <span className="hidden h-12 w-12 place-items-center rounded-full border border-[#d1ad65]/30 text-[#d1ad65] sm:grid">
                    <Sparkles size={18} />
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Parent or student name *
                      </label>

                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d1ad65]"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Email address *
                      </label>

                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="name@example.com"
                        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d1ad65]"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Phone number *
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d1ad65]"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label
                        htmlFor="studentAge"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Student age
                      </label>

                      <input
                        id="studentAge"
                        type="number"
                        name="studentAge"
                        min="3"
                        max="100"
                        value={formData.studentAge}
                        onChange={handleChange}
                        placeholder="Enter student age"
                        className="mt-3 w-full border-0 border-b border-white/15 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-[#d1ad65]"
                      />
                    </div>

                    {/* Centre */}
                    <div>
                      <label
                        htmlFor="centre"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Preferred centre *
                      </label>

                      <select
                        id="centre"
                        name="centre"
                        value={formData.centre}
                        onChange={handleChange}
                        required
                        className="mt-3 w-full border-0 border-b border-white/15 bg-[#0d0808] px-0 py-3 text-sm text-white outline-none transition focus:border-[#d1ad65]"
                      >
                        <option value="">Select a centre</option>

                        {centres.map((centre) => (
                          <option key={centre} value={centre}>
                            {centre}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Art form */}
                    <div>
                      <label
                        htmlFor="artForm"
                        className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                      >
                        Art form *
                      </label>

                      <select
                        id="artForm"
                        name="artForm"
                        value={formData.artForm}
                        onChange={handleChange}
                        required
                        className="mt-3 w-full border-0 border-b border-white/15 bg-[#0d0808] px-0 py-3 text-sm text-white outline-none transition focus:border-[#d1ad65]"
                      >
                        <option value="">Select an art form</option>

                        {artForms.map((artForm) => (
                          <option key={artForm} value={artForm}>
                            {artForm}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-7">
                    <label
                      htmlFor="message"
                      className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/45"
                    >
                      Tell us more
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about the student's experience or ask a question..."
                      className="mt-3 w-full resize-none border border-white/15 bg-white/[0.02] p-4 text-sm leading-7 text-white outline-none transition placeholder:text-white/20 focus:border-[#d1ad65]"
                    />
                  </div>

                  {/* Consent */}
                  <label className="mt-6 flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                      className="peer sr-only"
                    />

                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center border border-white/25 text-transparent transition peer-checked:border-[#d1ad65] peer-checked:bg-[#d1ad65] peer-checked:text-[#0d0808]">
                      <Check size={13} />
                    </span>

                    <span className="text-xs leading-6 text-white/40">
                      I agree that Chitrakalai Manram may contact me regarding
                      this enquiry.
                    </span>
                  </label>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-8 flex w-full items-center justify-between bg-[#d1ad65] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#0d0808] transition hover:bg-[#f0d59b]"
                  >
                    Send Enquiry
                    <ArrowUpRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <div className="mt-5 flex items-start gap-3">
                    <Mail size={14} className="mt-0.5 shrink-0 text-white/30" />

                    <p className="text-[10px] leading-5 text-white/30">
                      Development mode: the submitted information is currently
                      shown only in the browser console.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div
                className="flex min-h-[630px] flex-col items-center justify-center px-4 text-center"
                aria-live="polite"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full border border-[#d1ad65]/40 bg-[#d1ad65]/10 text-[#d1ad65]">
                  <CheckCircle2 size={32} />
                </span>

                <p className="mt-8 text-[9px] uppercase tracking-[0.35em] text-[#d1ad65]">
                  Enquiry prepared
                </p>

                <h3 className="mt-4 font-display text-4xl text-[#f8f0e3] sm:text-5xl">
                  Thank you, {formData.name}.
                </h3>

                <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
                  The form is working correctly on the frontend. Connect it to
                  your backend or email service before publishing the website.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-9 border border-[#d1ad65]/50 px-6 py-4 text-[10px] uppercase tracking-[0.23em] text-[#d1ad65] transition hover:bg-[#d1ad65] hover:text-[#0d0808]"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
