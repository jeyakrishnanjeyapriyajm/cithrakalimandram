import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (hash) {
        const elementId = hash.replace("#", "");
        const element = document.getElementById(elementId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          return;
        }
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 150);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname, hash]);

  return null;
}
