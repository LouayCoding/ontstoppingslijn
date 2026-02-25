"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left, .reveal-scale, .reveal-stagger";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe existing elements
    document.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    // Watch for dynamically added elements
    const mutation = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.matches(selectors)) observer.observe(node);
            node.querySelectorAll(selectors).forEach((el) => observer.observe(el));
          }
        });
      });
    });

    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return null;
}
