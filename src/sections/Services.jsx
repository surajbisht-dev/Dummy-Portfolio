import React from "react";
import { FaCode, FaPaintBrush, FaWordpressSimple } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    icon: <FaCode className="text-accent text-2xl" />,
    description:
      "I create websites based on your ready-made design. Whether it’s a landing page or a business card website, I will make it look great and work smoothly on any device.",
  },
  {
    title: "Web Design",
    icon: <FaPaintBrush className="text-accent text-2xl" />,
    description:
      "I can design your website from scratch. I create modern, simple, and user-friendly designs that match your brand and goals.",
  },
  {
    title: "WordPress Development",
    icon: <FaWordpressSimple className="text-accent text-2xl" />,
    description:
      "I build websites on WordPress, making them easy to update and manage. It’s a great choice for blogs, small businesses, or portfolios.",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 md:px-12 py-20">
      <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-12">
        MY SERVICES
      </h2>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-600 rounded-lg p-6 flex items-start gap-4 bg-[#121826] hover:shadow-md transition"
          >
            {service.icon}
            <div>
              <h3 className="text-white font-bold text-lg">{service.title}</h3>
              <p className="text-lightText text-sm mt-2">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
