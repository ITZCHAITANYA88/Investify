import React from "react";
import Hero from "./Hero";
import CreateTicket from "./CreateTicket";

function SupportPage() {
  return (
    <main className="support-page">
      {/* Hero Section */}
      <Hero />

      {/* Create Ticket Section */}
      <section className="container my-5">
        <CreateTicket />
      </section>
    </main>
  );
}

export default SupportPage;
