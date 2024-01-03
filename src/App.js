import "./styles.css";
import React from "react";
import Bg from "./Bg";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Bg />
      <div className="Contingent">
        <section id="hero" className="card">
          <h2>Phosphate Group</h2>
          <br />
          <p>
            This is a chemical group made up of phosphorus and oxygen atoms. In
            the structure of DNA, the phosphate groups form the `backbone` or
            the outer edges of the DNA molecule.
          </p>
          <div className="lightm" />
        </section>
        <section id="about" className="card">
          <h2>Deoxyribose Sugar</h2>
          <br />
          <p>
            Deoxyribose is a five-carbon sugar that makes up the central part of
            each nucleotide. The deoxyribose sugar molecules link together to
            form the sugar-phosphate backbone of the DNA strand.
          </p>
          <div className="lightb" />
        </section>
        <section id="projects" className="card">
          <h2>Nitrogenous Bases</h2>
          <br />
          <p>
            The nitrogenous bases are the `rungs` of the DNA ladder, connecting
            the two strands of the double helix. The specific `airing rules are
            Adenine (A) always pairs with Thymine (T), and Guanine (G) always
            pairs with Cytosine (C). These base pairs are held together by
            hydrogen bonds.
          </p>
          <div className="lightf" />
        </section>
        <section id="contact" className="card">
          <h2>In summary</h2>
          <br />
          <p>
            DNA building blocks, or nucleotides, are composed of a phosphate
            group, a deoxyribose sugar molecule, and one of four nitrogenous
            bases. The sequence of these nitrogenous bases encodes genetic
            information in the form of genes, which ultimately determine the
            traits and characteristics of an organism.
          </p>
        </section>
      </div>
    </div>
  );
}
