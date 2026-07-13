import React, { useEffect, useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Button from "../ui/Button";
import {
  getBlogsApi,
  getBlogCategoriesApi,
} from "../../utils/frontApi";

const BlogFilter = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([
    { _id: "all", name: "All Posts" },
  ]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getBlogsApi();

      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getBlogCategoriesApi();

      if (res.data.success) {
        setCategories([
          { _id: "all", name: "All Posts" },
          ...res.data.data,
        ]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs =
    activeCategory === "all"
      ? blogs
      : blogs.filter(
          (blog) => blog.category_id?._id === activeCategory
        );

  return (
    <section className="py-[100px] mt-[-60px] bg-white rounded-[60px]">
      <div className="max-w-[1200px] mx-auto">

        <SectionHeading
          title="Latest from Our blog"
          titleClassName="sm:text-[48px] text-[#015190]"
        />

        {/* Category Filter */}
        <div className="text-center mb-[60px]">
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {categories.map((item) => (
              <button
                key={item._id}
                onClick={() => setActiveCategory(item._id)}
                className={`px-4 py-1 rounded-full text-[13px] border transition-all duration-300
                ${
                  activeCategory === item._id
                    ? "bg-[#015190] text-white border-[#015190]"
                    : "border-[#E5E5E5] text-[#015190]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blogs */}
        <div className="grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 gap-[20px]">
          {filteredBlogs.map((item) => (
            <div
              key={item._id}
              className="flex lg:flex-row flex-col bg-white rounded-[20px] border border-[#E5E5E5] overflow-hidden"
            >
              {/* Image */}
              <div
                className="md:w-[45%] w-full lg:h-[390px] h-[300px] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.feature_image})`,
                }}
              />

              {/* Content */}
              <div className="md:w-[55%] w-full p-6 flex flex-col justify-between">
                <div>
                  <span
                    className="inline-block mb-3 px-3 py-1 rounded-full text-[12px]
                    bg-[#c1ecff] text-[#015190]"
                  >
                    {item.category_id?.name}
                  </span>

                  <h3 className="text-[24px] font-semibold text-[#1E1E1E]">
                    {item.name}
                  </h3>

                  <p className="text-[16px] text-[#626161] mt-2">
                    {item.short_description}
                  </p>

                  <ul className="flex items-center justify-between mt-4">
                    <li className="text-[14px] text-[#8A8A8A]">
                      {item.author_name}
                    </li>

                    <li className="text-[14px] text-[#8A8A8A]">
                      {item.date}
                    </li>
                  </ul>
                </div>

                <Button
                  btnText="Learn More"
                  href={`/blog/${item.url}`}
                  icon="CircleArrowOutUpRight"
                  iconSize="20px"
                  className="text-[16px] w-full mt-5 py-5 px-4 font-medium rounded-lg bg-primary-gradient text-white"
                />
              </div>
            </div>
          ))}
        </div>

        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center mt-10 text-gray-500">
            No posts found.
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogFilter;