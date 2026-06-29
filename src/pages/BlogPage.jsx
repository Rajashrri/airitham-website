import React, { useEffect, useState } from "react";
import { getBlogsApi, getBlogCategoriesApi } from "../utils/frontApi";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";
import MainBanner from "../components/services/MainBanner";
import Button from "../components/ui/Button";
const BlogPage = () => {
  const [active, setActive] = useState("All");

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    loadCategories();
    loadBlogs();
  }, []);

  const loadCategories = async () => {
    const res = await getBlogCategoriesApi();

    if (res.data.success) {
      setCategories([{ _id: "All", name: "All" }, ...res.data.data]);
    }
  };
  const loadBlogs = async (category = "") => {
    const res = await getBlogsApi(category);

    if (res.data.success) {
      setBlogs(res.data.data);
    }
  };
  const handleCategory = (cat) => {
    setActive(cat.name);

    if (cat._id === "All") {
      loadBlogs();
    } else {
      loadBlogs(cat._id);
    }
  };
  const blog_HEADER_CONFIG = {
    heading: "Blog",
    headclass: "false",
    headingclass: "text-[#fff]",
    buttons: [],
  };

  const filteredBlogs =
    active === "All"
      ? blogs
      : blogs.filter((blog) => blog.category_id?.name === active);
  return (
    <>
      <Navbar />

      <section>
        {/* Banner */}
        <div className="rounded-[50px] lg:mt-[100px] mt-[80px] space-y-[70px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] lg:py-[110px] py-[100px] pt-[118px] pb-[90px] text-white">
          <MainBanner data={blog_HEADER_CONFIG} />
        </div>

        {/* Blog Section */}
        <div className="py-[80px] lg:px-0 px-4 max-w-[1130px] m-auto">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategory(cat)}
                className={`rounded-lg p-4 ${
                  active === cat.name
                    ? "bg-[#015190] text-white"
                    : "bg-white text-[#015190]"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] max-w-[1400px] mx-auto">
            {filteredBlogs.map((blog) => (
              <a
                href={`/blog/${blog.url}`}
                key={blog.id}
                className="bg-[#fff] rounded-[16px] border border-[#D9D9D9] p-4 shadow-sm hover:shadow-[0_0_40px_2px_#42abdf40] transition-all duration-300"
              >
                <span className="inline-block px-[16px] py-[8px] rounded-full text-[#015190] bg-[#E9F6FB] text-[14px] font-secondary font-[400] mb-[16px]">
                  {blog.category_id?.name}
                </span>

                <img
                  src={blog.feature_image}
                  alt={blog.namw}
                  className="w-full h-[180px] object-cover rounded-[4px] mb-[16px]"
                />

                <p className="text-[#B3B3B3] text-[14px] mb-2 font-secondary">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </p>

                <h3 className="text-[20px] font-primary text-[#015190] font-[600] mb-[16px] leading-snug">
                  {blog.name}
                </h3>

                <p className="font-secondary text-[#757575] text-[16px] leading-relaxed mb-[32px]">
                  {blog.short_description}
                </p>

                <Button
                  btnText="Read Blog"
                  className="py-5 px-6 font-primary w-fit font-medium text-[16px] leading-[1.2] block tracking-[0%] rounded-lg bg-primary-gradient text-white"
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
