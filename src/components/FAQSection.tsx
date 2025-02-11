import React, { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="mt-4 max-w-full bg-white text-black border border-primary w-[910px]">
      <button
        className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-primary">{question}</span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-6 py-6 text-base leading-6 text-primary">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What types of insects do you treat?",
      answer:
        "Our comprehensive pest control service covers over 28 different general insect species, including ants, spiders, roaches, silverfish, earwigs, and many more. We provide thorough and effective treatment for a wide range of household and garden pests.",
    },
    {
      question: "Do you offer organic pest control treatments?",
      answer:
        "Yes! We proudly offer organic treatment options for customers who prefer environmentally friendly solutions. Our organic treatments are effective in managing pest populations while being environmentally mindful.",
    },
    {
      question: "Are your treatments safe for my family and pets?",
      answer:
        "Our treatments are environmentally safe and designed to protect bees, pets, and your loved ones. We use carefully selected products and application methods that target pests while ensuring the safety of your household.",
    },
    {
      question:
        "Are you a local pest control company? What areas do you service?",
      answer:
        "Yes, we are locally owned and operated. As a local business, we understand the specific pest challenges in our community and provide personalized, responsive service. We service the Monterey County, CA area, including Seaside, Carmel, Marina, Prunedale, Del Rey Oaks.",
    },
    {
      question: "How long does a typical pest treatment take?",
      answer:
        "The initial service can take from 20-60 minutes. The maintenance service is typically 15-25 minutes. Length can vary depending on the size of your property and the extent of the pest infestation.",
    },
    {
      question: "How often should I schedule pest control services?",
      answer:
        "The standard service is every other month. Mosquito services require a monthly schedule. Keep in mind that certain pest concerns require a specific scheduled service, which can be determined at the time of initial service.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes, we provide complimentary initial inspections to assess your pest control needs and develop a tailored treatment strategy.",
    },
    {
      question:
        "What sets your company apart from other pest control services?",
      answer:
        "We distinguish ourselves through our comprehensive coverage, organic treatment options, local expertise, and commitment to environmentally safe practices. Our goal is not just to eliminate pests, but to do so responsibly and effectively.",
    },
  ];

  return (
    <section
    id="faqs"
      className="w-full text-white bg-black"
      role="region"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1440px] mx-auto px-16 pt-16 pb-20 max-md:px-5">
        <h2
          id="faq-heading"
          className="text-5xl font-bold leading-tight text-center text-secondary max-md:text-4xl"
        >
          FAQs
        </h2>
        <div className="flex flex-col items-center mt-16 max-md:mt-10">
          {faqs.map((faq, index) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
