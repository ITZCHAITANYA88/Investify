import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';

function HomePage() {
  return (
    <main>
      <section id="hero">
        <Hero />
      </section>

      <section id="awards" className="bg-light">
        <Awards />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="pricing" className="bg-light">
        <Pricing />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="open-account" className="bg-light">
        <OpenAccount />
      </section>
    </main>
  );
}

export default HomePage;
