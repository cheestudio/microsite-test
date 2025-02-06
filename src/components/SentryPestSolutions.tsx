import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Welcome from "./Welcome";
import PestControlServices from "./PestControlServices";
import Services from "./Services";
import FAQSection from "./FAQSection";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const SentryPestSolutions: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <Header />
        <main>
          <Hero />
          <Welcome />
          <PestControlServices />
          <Services />
          <FAQSection />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SentryPestSolutions;
