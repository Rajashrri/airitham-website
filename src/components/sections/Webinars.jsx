import React, { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "../ui/Button";

const WEBINAR_DATA = [
  {
    id: 1,
    type: "Upcoming",
    title: "Implementing Autonomous Testing at Scale",
    desc: "Learn how to deploy autonomous testing across large enterprise environments.",
    speaker: "Dr. Sarah Chen, VP Engineering",
    date: "Dec 15, 2024",
    duration: "60 min",
  },
  {
    id: 2,
    type: "Upcoming",
    title: "AI Quality Engineering Best Practices",
    desc: "Explore advanced techniques for implementing AI-driven quality assurance.",
    speaker: "Dr. Sarah Chen, VP Engineering",
    date: "Dec 15, 2024",
    duration: "60 min",
  },
  {
    id: 3,
    type: "On-Demand",
    title: "Agentic AI in Enterprise Systems",
    desc: "Understand how agentic AI transforms QA workflows.",
    speaker: "Michael Adams, CTO",
    date: "Available Now",
    duration: "45 min",
  },
];

const Webinars = () => {
  const categories = ["Upcoming", "On-Demand"];
  const [activeCategory, setActiveCategory] = useState("Upcoming");

  const filteredWebinars = WEBINAR_DATA.filter(
    (item) => item.type === activeCategory
  );

  return (
    <>
      <section className="py-[80px] mt-[-100px] pb-[100px] md:rounded-t-[100px] rounded-t-[50px] bg-[#fff]">

        <SectionHeading
          title="Webinars & Events"
          subtitle="Live and on-demand sessions with experts in autonomous testing and agentic AI."
          titleClassName="sm:text-[48px] text-[#000]"
          subtitleClassName="sm:text-[16px] text-[#626161] max-w-[950px]"
        />

        {/* Filter Buttons */}
        <div className="flex gap-4 justify-center mt-8">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActiveCategory(item)}
              className={`text-[12px] font-seconadry py-3 hover:cursor-pointer px-5 rounded-[100px] font-[500] transition-all duration-300
              ${
                activeCategory === item
                  ? "bg-[#015190] text-[#fff]"
                  : "bg-[#fff] border border-[#015190] text-[#015190]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="max-w-[1224px] m-auto mt-[40px]">
          <div className="grid grid-cols-12 gap-4 md:px-0 px-5">
            {filteredWebinars.map((item) => (
              <div
                key={item.id}
                className="md:col-span-6 col-span-12 p-5 border border-[#D9D9D9] rounded-[18px] hover:shadow-lg transition-all duration-300"
              >
                {/* Badge */}
                <h4 className="bg-[#42ABDF40]
                w-fit p-2 rounded-[100px] px-[20px]">
                  <span
                    className="font-secondary text-[12px] font-[600]
                    bg-[#015190]
                    bg-clip-text text-transparent"
                  >
                    {item.type}
                  </span>
                </h4>

                <h2 className="font-primary text-[#1E1E1E] text-[24px] font-[600] mt-8">
                  {item.title}
                </h2>

                <p className="text-[#626161] text-[20px] font-secondary font-[500]">
                  {item.desc}
                </p>

                <ul className="md:mt-7 mt-3">
                  <li className="text-[#626161] mb-[4px] font-[600]">
                    Speaker:
                    <span className="text-[#015190]"> {item.speaker}</span>
                  </li>
                  <li className="text-[#626161] mb-[4px] font-[600]">
                    Date:
                    <span className="text-[#015190]"> {item.date}</span>
                  </li>
                  <li className="text-[#626161] mb-[4px] font-[600]">
                    Duration:
                    <span className="text-[#015190]"> {item.duration}</span>
                  </li>
                </ul>

                <Button
                  btnText={
                    activeCategory === "Upcoming"
                      ? "Register"
                      : "Watch Now"
                  }
                  className="text-[16px] min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium rounded-lg bg-primary-gradient text-white"
                  href="#"
                />
              </div>
            ))}
          </div>

          {filteredWebinars.length === 0 && (
            <div className="text-center mt-10 text-gray-400">
              No webinars available.
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Webinars;