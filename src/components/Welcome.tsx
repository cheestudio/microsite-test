import React from "react";

const Welcome: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-secondary"
      role="region"
      aria-labelledby="welcome-heading"
    >
      <div className="max-w-[1440px] mx-auto flex flex-wrap gap-5 items-start px-16 py-12 max-md:px-5">
        <div className="flex-1 shrink-0 basis-0 min-w-[240px] max-md:max-w-full">
          <h1
            id="welcome-heading"
            className="text-6xl font-bold leading-[67px] pl-16 border-l-[5px] border-red-500 max-md:pl-5 max-md:text-4xl max-md:leading-[54px]"
          >
            Welcome to Sentry Pest Solutions!
          </h1>
        </div>
        <div className="flex-1 shrink-0 basis-0 min-w-[240px] text-lg leading-7 max-md:max-w-full">
          <p>
            As a locally owned and operated business, we pride ourselves on
            putting customer service at the forefront of our mission. Your
            satisfaction is our top priority, and we're dedicated to providing
            you with effective pest control solutions tailored to your needs.
            Let us help you create a pest-free environment for your home or
            business!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
