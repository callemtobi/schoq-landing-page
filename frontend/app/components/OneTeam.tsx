import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Server,
} from "lucide-react";
import { image1, image2, image3, image4, image5, image6 } from "@/assets";

const OneTeam: React.FC = () => {
  const services = [
    {
      image: image1,
      title: "Custom Software",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image2,
      title: "AI & Machine Learning",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image3,
      title: "Web Development",
      description:
        "From business websites to custom web applications, delivering fast, reliable, and user-focused digital experiences.",
    },
    {
      image: image4,
      title: "Mobile Apps",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image5,
      title: "UI/UX Design",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
    {
      image: image1,
      title: "SaaS Development",
      description:
        "Build and scale secure, multi-tenant software-as-a-service platforms globally.",
    },
    {
      image: image2,
      title: "DevOps & Cloud Infrastructure",
      description:
        "Tailored enterprise software solutions and custom system development for unique business requirements.",
    },
  ];
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  return (
    <section className="w-full bg-gray-50 px-6 py-16 md:px-12 lg:px-20 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            ONE TEAM. COMPLETE
            <br />
            PRODUCT EXPERTISE.
          </h2>
        </div>

        {/* Description and CTA */}
        <div className="grid grid-cols-1 mx-auto text-center w-1/2 justify-items-center lg:grid-cols-1 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            From product strategy and UX to web, mobile, AI and cloud, Schoq
            brings the expertise required to design, build and scale digital
            products.
          </p>
          {/* <div className="flex items-start lg:justify-end"></div> */}
          <Link
            href="#"
            className="inline-block bg-linear-to-r from-[#4A4CE6] via-[#34A1B4] to-[#4BE191] text-white text-base sm:text-lg font-medium px-8 py-3.5 rounded hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Start a Project
          </Link>
        </div>

        <div className="space-y-8">
          {/* First Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {firstRow.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-15 h-15 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4 group-hover:bg-gray-900/10 transition-colors">
                  {/* <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} /> */}
                  <Image
                    alt="Icons"
                    src={service.image}
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {secondRow.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-15 h-15 rounded-xl bg-gray-900/5 flex items-center justify-center mb-4 group-hover:bg-gray-900/10 transition-colors">
                  {/* <Icon className="w-6 h-6 text-gray-900" strokeWidth={1.5} /> */}
                  <Image
                    alt="Icons"
                    src={service.image}
                    width={100}
                    height={100}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Services Grid */}
      </div>
    </section>
  );
};

export default OneTeam;
