import { useState } from "react";

export const useObserver = (element) => {
  const [intersecting, setIntersecting] = useState(false);

  let options = {
    // root: document.querySelector(element),
    rootMargin: "0px",
    threshold: 0.15,
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? setIntersecting(true) : setIntersecting(false);
    });
  };

  //   declaring observer
  let observer = new IntersectionObserver(callback, options);
  setTimeout(() => {
    observer.observe(document.querySelector(element));
  }, 0);

  return { observer, intersecting };
};
