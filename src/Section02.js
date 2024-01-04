import React, { useEffect, useState, useRef } from "react";

const Section02 = () => {
  const [inView, setInView] = useState(false);
  const [outView, setOutView] = useState(false);

  let ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.isIntersecting ? `${setInView(true)}` : "";
        });
      },
      { threshold: 1, rootMargin: "0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      ref={ref}
      className={`card ${inView ? "slideIn" : "hide"}`}
    >
      <h2>Deoxyribose Sugar</h2>
      <br />
      <p>
        Deoxyribose is a five-carbon sugar that makes up the central part of
        each nucleotide. The deoxyribose sugar molecules link together to form
        the sugar-phosphate backbone of the DNA strand.
      </p>
    </section>
  );
};
export default Section02;
