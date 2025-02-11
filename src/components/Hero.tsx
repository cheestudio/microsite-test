import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full" role="banner" aria-label="Hero banner">
      <div className="mx-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/a633ea89f6ae6450be83cb7924b9e3da219640cad313c5b0eddf8bb97100548e?apiKey=201c97aaaea7452ea91764ce57b99d71&"
          className="object-cover w-full aspect-[3] h-[500px]"
          alt="Sentry Pest Solutions hero image showcasing pest control services"
        />
      </div>
    </section>
  );
};

export default Hero;
