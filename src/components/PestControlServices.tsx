import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceData {
  title: string;
  description: string;
  imageSrc?: string;
}

const services: ServiceData[] = [
  {
    title: "Thorough Assessment",
    description:
      "Our inspection services involve a detailed assessment of the property to identify any existing pest problems and potential risks. We develop customized treatment plans to address the specific needs of each client.",
  },
  {
    title: "Effective Pest Control",
    description:
      "Our expert pest control services focus on controlling pests using safe and targeted methods. We employ trained professionals who are equipped to handle various pest infestations, ensuring an efficient pest removal process.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/d9b9df5bbe054c3a1c2f8952418470f21af37bfdc7e042582211fe8428c7b8cd?apiKey=201c97aaaea7452ea91764ce57b99d71&",
  },
  {
    title: "Long-term Solutions",
    description:
      "We provide preventive strategies to minimize the risk of future pest infestations. By implementing proactive measures and regular maintenance programs, we work together with our clients maintain a pest-free environment and protect their properties from potential pest threats.",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/19739c7e677c902aec441022bafeebc02b17fadff2903c1ed9b38312bc9aba92?apiKey=201c97aaaea7452ea91764ce57b99d71&",
  },
];

const PestControlServices: React.FC = () => {
  return (
    <div id="solutions" className="flex overflow-hidden flex-col px-16 py-20 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col self-center text-center text-white max-w-[900px] mx-auto">
          <div className="self-center text-base font-semibold">
            Serving Monterey County, CA
          </div>
          <div className="flex flex-col mt-4 w-full max-md:max-w-full">
            <h1 className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Expert Pest Control Tailored to Your Needs and Environment
            </h1>
            <p className="mt-6 text-lg leading-7 max-md:max-w-full">
              Our comprehensive services include pest inspection, pest control,
              and long-term pest prevention for your residence, rental property or
              business. We use environmentally friendly methods and cutting-edge
              technology to address pest issues efficiently and effectively,
              ensuring a safe and healthy environment for our clients.
            </p>
          </div>
        </div>
        <div className="flex overflow-hidden flex-wrap gap-10 items-start mt-16 w-full max-md:mt-10 max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PestControlServices;
