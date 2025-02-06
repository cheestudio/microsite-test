import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  concern: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    concern: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
    id="contact"
      className="w-full bg-secondary"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-[1440px] mx-auto px-16 py-20 max-md:px-5">
        <h2
          id="contact-heading"
          className="text-5xl font-bold leading-tight text-center text-primary max-md:text-4xl"
        >
          Contact Us
        </h2>
        <div className="flex flex-wrap gap-10 justify-center items-start mt-12 max-md:mt-10">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col text-base min-w-[240px] w-[573px] max-md:max-w-full"
          >
            <div className="text-lg font-semibold text-primary">
              Contact us today for a free pest control quote.
            </div>
            <div className="flex flex-col mt-6 w-full text-primary">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="py-3 mt-2 w-full border border-primary min-h-[48px]"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col mt-6 w-full text-primary">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-3 mt-2 w-full border border-primary min-h-[48px]"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col mt-6 w-full text-primary">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="py-3 mt-2 w-full border border-primary min-h-[48px]"
                required
                aria-required="true"
              />
            </div>
            <div className="flex flex-col mt-6 w-full min-h-[129px]">
              <label htmlFor="concern" className="text-primary">
                What is your area of concern? (i.e., ants, spiders..etc)
              </label>
              <textarea
                id="concern"
                name="concern"
                value={formData.concern}
                onChange={handleChange}
                className="flex-1 px-3 pt-3 pb-16 mt-2 w-full border border-primary min-h-[97px] text-primary"
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 mt-6 text-secondary bg-primary border border-primary w-[99px]"
            >
              Submit
            </button>
          </form>
          <div className="flex flex-col w-[228px]">
            <div className="flex gap-6 items-start w-full whitespace-nowrap">
              <div className="flex flex-col flex-1 shrink w-full basis-0">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/5b7dfb78eab8bbe4d9e98e167ff84288ffe7395180e59c494f52e3a97222739a?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                  className="object-contain w-8 aspect-square"
                  alt="Email icon"
                />
                <div className="flex flex-col mt-4 w-full">
                  <div className="text-xl font-bold leading-snug text-primary">
                    Email
                  </div>
                  <a
                    href="mailto:info@sentrypest.net"
                    className="mt-2 text-base text-primary underline"
                  >
                    info@sentrypest.net
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-1 mt-10 max-w-full w-[228px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/d021c7943d69389ac850515f543f6c8cd1096a44ca864e51149a7f26b562498a?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                className="object-contain w-8 aspect-square"
                alt="Phone icon"
              />
              <div className="flex flex-col mt-4 w-full">
                <div className="text-xl font-bold leading-snug text-primary">
                  Phone
                </div>
                <a
                  href="tel:+18313301744"
                  className="mt-2 text-base text-primary underline"
                >
                  (831) 330-1744
                </a>
              </div>
            </div>
            <div className="flex overflow-hidden flex-col flex-1 items-start mt-10 max-w-full text-primary w-[228px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/f4dd91903488e4af5ed998d8a8be249b3cadb7d0e6afabca25581b612d9c32cf?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                  className="object-contain w-8 aspect-square"
                  alt="Office location icon"
                />
                <div className="flex flex-col mt-4 w-full">
                  <div className="text-xl font-bold leading-snug">Office</div>
                  <address className="mt-2 text-base leading-6 not-italic">
                    8 Thomas Owens Way
                    <br />
                    Monterey, CA 93940
                  </address>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-10 max-w-full h-6 w-[296px]">
              <div className="flex gap-4 items-start">
                <a href="#" aria-label="Visit our Facebook page">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/a56020a698ebb48ec5cae1822c5e0d0b95f5824b2202df7c6c34465a05fb98cd?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                    alt="Facebook icon"
                  />
                </a>
                <a href="#" aria-label="Visit our Twitter page">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/a2c29884b9a9feb13a94d6fe0bd54c19ec0ced395cdb45bc27cd8d7387ea4138?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                    alt="Twitter icon"
                  />
                </a>
                <a href="#" aria-label="Visit our Instagram page">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/201c97aaaea7452ea91764ce57b99d71/7e44d87335dd43bf7ab7ef886740dbd38862690ec6bf06f899871cdccf8a9ed5?apiKey=201c97aaaea7452ea91764ce57b99d71&"
                    className="object-contain shrink-0 aspect-square w-[30px]"
                    alt="Instagram icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
