import React, { useState } from "react";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";
import MainBanner from "../components/services/MainBanner";
import Button from "../components/ui/Button";

const blogs = [
  {
    id: 1,
    category: "Artificial Intelligence",
    date: "April 15, 2026",
    title: "Revolutionizing AI With Neural Networks",
    desc: "Dive into the latest breakthroughs in neural network architectures transforming AI capabilities across industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800",
  },
  {
    id: 2,
    category: "Quantum Computing",
    date: "May 3, 2026",
    title: "Exploring Quantum Algorithms For Cryptography",
    desc: "An in-depth analysis of how quantum algorithms are reshaping encryption and data security paradigms.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
  },
  {
    id: 3,
    category: "Quantum Computing",
    date: "June 10, 2026",
    title: "Innovations In Renewable Energy Storage",
    desc: "Examining cutting-edge technologies enhancing battery capacity and scalability of renewable energy storage solutions.",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=800",
  },
  {
    id: 4,
    category: "AI Ethics",
    date: "July 15, 2026",
    title: "Balancing Innovation And Responsibility",
    desc: "Exploring frameworks to ensure ethical AI development while promoting technological advancement.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",
  },
  {
    id: 5,
    category: "Urban Farming",
    date: "August 5, 2026",
    title: "Transforming Cityscapes With Vertical Gardens",
    desc: "How vertical farming is revolutionizing urban food production and sustainability.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800",
  },
  {
    id: 6,
    category: "Space Exploration",
    date: "September 20, 2026",
    title: "Next-Gen Propulsion Systems",
    desc: "Developing faster and more efficient propulsion technologies for interplanetary travel.",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=800",
  },
];

const categories = ["All", "Machine Learning", "Natural Language Processing", "Computer Vision"];

const BlogPage = () => {
  const [active, setActive] = useState("All");

  const blog_HEADER_CONFIG = {
    heading: "Blog",
    headclass: "false",
    headingclass: "text-[#fff]",
    buttons: [],
  };

  return (
    <>
      <Navbar />

      <section>
        {/* Banner */}
        <div className="rounded-[50px] lg:mt-[100px] mt-[80px] space-y-[70px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] lg:py-[110px] py-[100px] pt-[118px] pb-[90px] text-white">
          <MainBanner data={blog_HEADER_CONFIG} />
        </div>

        {/* Blog Section */}
        <div className="py-[80px] lg:px-0 px-4 max-w-[1130px]  m-auto">
            
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActive(cat)}
                className={` rounded-lg font-secondary text-[16px]  p-[16px] transition-all duration-300 hover:text-[#fff] hover:bg-[#015190] ${
                  active === cat
                    ? " bg-[#015190] text-[#fff] border-[#0d5eff]"
                    : "bg-white text-[#015190] hover: "
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] max-w-[1400px] mx-auto">
            {blogs.map((blog) => (
              <a href="/blog-details"
                key={blog.id}
                className="bg-[#fff] rounded-[16px] border border-[#D9D9D9] p-4 shadow-sm hover:shadow-[0_0_40px_2px_#42abdf40] transition-all duration-300"
              >
                <span className="inline-block px-[16px] py-[8px] rounded-full text-[#015190] bg-[#E9F6FB] text-[14px] font-secondary font-[400] mb-[16px]">
                  {blog.category}
                </span>

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[180px] object-cover rounded-[4px] mb-[16px]"
                />

                <p className="text-[#B3B3B3] text-[14px] mb-2 font-secondary">{blog.date}</p>

                <h3 className="text-[20px] font-primary text-[#015190] font-[600] mb-[16px] leading-snug">
                  {blog.title}
                </h3>

                <p className="font-secondary text-[#757575] text-[16px] leading-relaxed mb-[32px]">
                  {blog.desc}
                </p>

                     <Button
                            btnText="Read Blog"
                            className="py-5 px-6 font-primary w-fit font-medium text-[16px]  leading-[1.2] block tracking-[0%] rounded-lg bg-primary-gradient text-white"
                            iconSize="20"
                            icon="CircleArrowOutUpRight"
                          />
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default BlogPage;