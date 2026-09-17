import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/about",
  },
  {
    id: 3,
    label: "Classes",
    href: "/classes",
  },
  {
    id: 4,
    label: "Performances",
    href: "/performances",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[#0d0808]/85 py-3 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/60 to-transparent py-5"
        }`}
      >
        <nav className="mx-auto flex max-w-[1450px] items-center justify-between px-5 lg:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="Chitrakalai Manram home"
            className="relative z-[60] flex items-center gap-3"
          >
            <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d1ad65]/70">
              <span className="font-display text-base font-semibold tracking-wide text-[#d1ad65]">
                CKM
              </span>

              <span className="absolute inset-[3px] rounded-full border border-[#d1ad65]/20" />
            </div>

            <div>
              <p className="font-display text-lg font-semibold leading-none tracking-wide text-[#f8f0e3] sm:text-xl">
                Chitrakalai Manram
              </p>

              <p className="mt-1.5 hidden text-[8px] font-medium uppercase tracking-[0.3em] text-[#d1ad65] sm:block">
                Centre for Performing Arts
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 xl:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.id}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `group relative py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#d1ad65]"
                      : "text-white/70 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    <span
                      className={`absolute bottom-0 left-0 h-px bg-[#d1ad65] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            to="/classes#contact"
            className="group hidden items-center gap-2 border border-[#d1ad65]/60 bg-[#d1ad65]/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e4c47f] transition-all duration-300 hover:bg-[#d1ad65] hover:text-[#0d0808] xl:flex"
          >
            Join a Class
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => {
              setMenuOpen((current) => !current);
            }}
            className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-[#f8f0e3] backdrop-blur-md transition hover:border-[#d1ad65]/70 hover:text-[#d1ad65] xl:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-40 overflow-y-auto bg-[#0d0808] transition-all duration-500 xl:hidden ${
          menuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="absolute right-[-120px] top-[-100px] h-80 w-80 rounded-full bg-[#6f2332]/30 blur-[100px]" />

        <div className="absolute bottom-[-120px] left-[-100px] h-80 w-80 rounded-full bg-[#d1ad65]/10 blur-[100px]" />

        <div className="noise-overlay" />

        <div className="relative flex min-h-screen flex-col px-6 pb-10 pt-32 sm:px-10">
          <p
            className={`mb-6 text-[10px] uppercase tracking-[0.4em] text-[#d1ad65] transition-all duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Navigation
          </p>

          <div>
            {navigation.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href);

              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: menuOpen ? `${150 + index * 60}ms` : "0ms",
                  }}
                  className={`group flex items-center border-b py-4 transition-all duration-500 ${
                    isActive ? "border-[#d1ad65]/30" : "border-white/10"
                  } ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <span
                    className={`w-10 text-[10px] tracking-widest ${
                      isActive ? "text-[#d1ad65]" : "text-white/30"
                    }`}
                  >
                    0{item.id}
                  </span>

                  <span
                    className={`font-display text-4xl transition-colors sm:text-5xl ${
                      isActive
                        ? "text-[#d1ad65]"
                        : "text-[#f8f0e3] group-hover:text-[#d1ad65]"
                    }`}
                  >
                    {item.label}
                  </span>

                  <ArrowUpRight
                    size={20}
                    className={`ml-auto transition-all duration-300 ${
                      isActive
                        ? "text-[#d1ad65]"
                        : "text-white/25 group-hover:text-[#d1ad65]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div
            className={`mt-auto pt-12 transition-all delay-500 duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            <Link
              to="/classes#contact"
              onClick={closeMenu}
              className="flex w-full items-center justify-between bg-[#d1ad65] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0d0808] transition hover:bg-[#f0d59b]"
            >
              Begin Your Journey
              <ArrowUpRight size={17} />
            </Link>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-[10px] uppercase tracking-[0.18em] text-white/40">
              <a href="#" className="transition hover:text-[#d1ad65]">
                Instagram
              </a>

              <a href="#" className="transition hover:text-[#d1ad65]">
                Facebook
              </a>

              <a href="#" className="transition hover:text-[#d1ad65]">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
