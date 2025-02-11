import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black bg-primary" role="banner">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center px-16 py-4 max-md:px-5">
        <div className="flex justify-center items-center w-[175px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/07ea0b01413df4e25936d4e5ae16effaaf305513b9f8885f5421a8c3abbf80e9?apiKey=201c97aaaea7452ea91764ce57b99d71&"
            className="object-contain aspect-[2.33] w-[175px]"
            alt="Sentry Pest Solutions logo"
          />
        </div>
        <nav
          className="flex items-center justify-center gap-8 text-base"
          role="navigation"
        >
          <ul className="flex items-center gap-8 list-none text-secondary whitespace-nowrap">
            <li>
              <a
                href="#about"
                className="focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                className="focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faqs"
                className="focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                FAQs
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="px-6 py-3 border text-primary bg-secondary border-secondary focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
