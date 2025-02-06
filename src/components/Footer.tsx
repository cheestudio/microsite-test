import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary" role="contentinfo">
      <div className="max-w-[1440px] mx-auto px-16 pb-10 text-sm max-md:px-5">
        <div className="w-full bg-primary border-t border-secondary min-h-[1px]" />
        <div className="flex flex-wrap gap-6 items-start justify-center mt-8">
          <div className="text-secondary max-md:max-w-full">
            © 2025 Sentry Pest Solutions. All rights reserved. License # OPR
            14766, FR53012
          </div>
          <div className="flex gap-6 items-start text-secondary">
            <a href="#" className="underline">
              Privacy Policy
            </a>
            <a href="#" className="underline">
              Opt-Out Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
