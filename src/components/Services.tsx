import React from "react";

interface ServiceProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Service: React.FC<ServiceProps> = ({ title, description, imageSrc }) => (
  <div id="services" className="bg-black text-white flex-1 shrink-0 basis-0 min-w-[240px] bg-primary max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      className="object-contain w-full aspect-[1.78]"
      alt={`${title} service`}
    />
    <div className="px-12 py-9 max-md:px-5">
      <h3 className="text-3xl font-bold leading-tight text-secondary">
        {title}
      </h3>
      <p className="mt-2 text-base leading-6 text-secondary">{description}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "General Pest Control",
      description:
        "Our general pest control service starts with a conversation to understand your specific concerns. We conduct a thorough inspection of your premises ensuring no detail is overlooked. Our team will then remove accessible webs and follow up with an effective liquid treatment to keep your space pest-free. Trust us to provide a comprehensive solution tailored to your needs.",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/4e386a1600d814d87d1935c94e868c7d625d22f18fb7bae80f60ad5d5b66825f?apiKey=201c97aaaea7452ea91764ce57b99d71&",
    },
    {
      title: "Mosquito Service",
      description:
        "Keep your yard enjoyable all year round with our monthly mosquito service, designed to complement our general pest control. Say goodbye to pesky mosquitoes and hello to a comfortable outdoor space. Enjoy peace of mind knowing your yard is protected, allowing you to relax and make the most of your time outside!",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/46fdb262ae6c7598570afdf18100a664f769e239b1bf5bf67851a2f40c59dd09?apiKey=201c97aaaea7452ea91764ce57b99d71&",
    },
  ];

  return (
    <section
      className="w-full bg-secondary"
      role="region"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1440px] mx-auto px-16 pt-16 pb-20 max-md:px-5">
        <h2
          id="services-heading"
          className="text-5xl font-bold leading-tight text-center text-primary max-md:text-4xl"
        >
          Our Services
        </h2>
        <div className="flex flex-wrap gap-10 mt-16 max-md:mt-10">
          {services.map((service, index) => (
            <Service key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
