import { useEffect } from "react";

export function useSiteMotion() {
  useEffect(() => {
    let cleanup;
    let cancelled = false;

    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();
      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          desktop: "(min-width: 1024px)",
        },
        (ctx) => {
          const { motion, desktop } = ctx.conditions;
          if (!motion) return;

          gsap.utils.toArray("[data-reveal]").forEach((el) => {
            gsap.from(el, {
              y: 48,
              autoAlpha: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          gsap.utils.toArray("[data-stagger]").forEach((group) => {
            gsap.from(group.children, {
              y: 40,
              autoAlpha: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.09,
              scrollTrigger: { trigger: group, start: "top 85%", once: true },
            });
          });

          gsap.utils.toArray("[data-mask]").forEach((el) => {
            const lines = el.querySelectorAll("[data-mask-line]");
            gsap.from(lines, {
              yPercent: 110,
              duration: 1.1,
              ease: "power4.out",
              stagger: 0.08,
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            });
          });

          gsap.utils.toArray("[data-parallax]").forEach((el) => {
            const speed = parseFloat(el.dataset["parallax"] || "0.15");
            gsap.fromTo(
              el,
              { yPercent: speed * 50 },
              {
                yPercent: -speed * 50,
                ease: "none",
                scrollTrigger: {
                  trigger: el.closest("section") ?? el,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });

          gsap.utils.toArray("[data-count]").forEach((el) => {
            const target = parseFloat(el.dataset["count"] || "0");
            const obj = { v: 0 };
            gsap.to(obj, {
              v: target,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
              onUpdate: () => {
                el.textContent = Math.round(obj.v).toLocaleString("en-CA");
              },
            });
          });

          gsap.utils.toArray("[data-progress-root]").forEach((root) => {
            const line = root.querySelector("[data-progress-line]");
            if (!line) return;
            gsap.fromTo(
              line,
              { scaleY: 0 },
              {
                scaleY: 1,
                ease: "none",
                scrollTrigger: { trigger: root, start: "top 65%", end: "bottom 60%", scrub: true },
              },
            );
          });

          if (desktop) {
            gsap.utils.toArray("[data-hscroll]").forEach((track) => {
              gsap.fromTo(
                track,
                { xPercent: 4 },
                {
                  xPercent: -6,
                  ease: "none",
                  scrollTrigger: {
                    trigger: track.closest("section") ?? track,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                  },
                },
              );
            });
          }
        },
      );

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);
      document.fonts?.ready.then(refresh).catch(() => {});

      cleanup = () => {
        window.removeEventListener("load", refresh);
        mm.revert();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);
}
