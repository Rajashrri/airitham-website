import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlogDetailsApi } from "../utils/frontApi";
import Navbar from "@/components/Navbar.jsx";
import FooterSection from "@/components/home/FooterSection";
import MainBanner from "../components/services/MainBanner";
import Button from "../components/ui/Button";

const categories = [
  "All",
  "Machine Learning",
  "Natural Language Processing",
  "Computer Vision",
];

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [active, setActive] = useState("All");

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  // 👇 YAHAN ADD KARO
  const updateMeta = (name, content) => {
    let element = document.querySelector(`meta[name="${name}"]`);

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("name", name);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content || "");
  };

  const updateMetaProperty = (property, content) => {
    let element = document.querySelector(`meta[property="${property}"]`);

    if (!element) {
      element = document.createElement("meta");
      element.setAttribute("property", property);
      document.head.appendChild(element);
    }

    element.setAttribute("content", content || "");
  };

  // 👇 SEO useEffect
  useEffect(() => {
    if (!blog) return;

document.title = `${blog?.meta_title || blog?.name } | Blog Details | AIRITHM`;
    updateMeta("description", blog.meta_description || blog.short_description);
    updateMeta("keywords", blog.meta_keywords);

    updateMetaProperty("og:title", blog.meta_title || blog.name);
    updateMetaProperty(
      "og:description",
      blog.meta_description || blog.short_description
    );
    updateMetaProperty("og:image", blog.main_image);
    updateMetaProperty("og:url", window.location.href);
    updateMetaProperty("og:type", "article");

  }, [blog]);
  const fetchBlog = async () => {
    try {
      const res = await getBlogDetailsApi(slug);

      if (res.data.success) {
        setBlog(res.data.data);
        setRelatedBlogs(res.data.relatedBlogs);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const blog_HEADER_CONFIG = {
    heading: blog?.name || "Blog Details",
    headclass: "false",
    headingclass: "text-[#fff]",
    buttons: [],
  };
  const currentUrl = window.location.href;
  const shareText = blog?.name || "Check out this blog";
  const copyLink = async () => {
    await navigator.clipboard.writeText(currentUrl);
    alert("Link copied!");
  };
  return (
    <>
      <Navbar />

      <section>
        {/* Banner */}
        <div className="rounded-[50px] lg:mt-[100px] mt-[80px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] lg:py-[110px] py-[100px] pt-[118px] lg:px-[150px] pb-[90px] text-white">
          <MainBanner data={blog_HEADER_CONFIG} />
        </div>

        {/* Blog Section */}
        <div className="py-[80px] lg:px-0 px-4 max-w-[1130px] m-auto">
          <div className="blogdetails">
            <div className="heading">
              <div className="kds">
                <h1 className="text-[#015190]">{blog?.name} </h1>
                <div className="tags">
                  {blog?.category_id?.name}{" "}
                  <span>
                    Published on :{" "}
                    {new Date(blog?.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </span>
                  <span>Author : {blog?.author_name} </span>
                </div>
              </div>
              <div className="share">
                <h4 className="text-[14px] mb-[6px] font-primary text-[#015190] font-[400]">
                  Share on
                </h4>
                <ul>
                  <li>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5856 4.54555C13.7669 3.36403 15.3692 2.70015 17.04 2.69995H20.28C20.5187 2.69995 20.7476 2.79477 20.9164 2.96355C21.0852 3.13234 21.18 3.36126 21.18 3.59995V7.91995C21.18 8.15865 21.0852 8.38756 20.9164 8.55635C20.7476 8.72513 20.5187 8.81995 20.28 8.81995H17.04C17.0164 8.81995 16.993 8.82461 16.9711 8.83365C16.9493 8.8427 16.9294 8.85596 16.9127 8.87267C16.896 8.88939 16.8827 8.90923 16.8737 8.93107C16.8647 8.95291 16.86 8.97631 16.86 8.99995V11.34H20.28C20.4168 11.3399 20.5519 11.371 20.6749 11.4309C20.7978 11.4909 20.9055 11.5781 20.9898 11.6859C21.074 11.7938 21.1325 11.9194 21.1609 12.0532C21.1893 12.1871 21.1868 12.3256 21.1536 12.4584L20.0736 16.7784C20.0249 16.9731 19.9124 17.146 19.7541 17.2695C19.5958 17.393 19.4008 17.4601 19.2 17.46H16.86V25.2C16.86 25.4386 16.7652 25.6676 16.5964 25.8363C16.4276 26.0051 16.1987 26.1 15.96 26.1H11.64C11.4013 26.1 11.1724 26.0051 11.0036 25.8363C10.8348 25.6676 10.74 25.4386 10.74 25.2V17.46H8.4C8.16131 17.46 7.93239 17.3651 7.7636 17.1963C7.59482 17.0276 7.5 16.7986 7.5 16.56V12.24C7.5 12.1218 7.52328 12.0047 7.56851 11.8955C7.61374 11.7863 7.68003 11.6871 7.7636 11.6036C7.84718 11.52 7.94639 11.4537 8.05558 11.4085C8.16478 11.3632 8.28181 11.34 8.4 11.34H10.74V8.99995C10.7402 7.32916 11.4041 5.72688 12.5856 4.54555ZM17.04 4.49995C15.8465 4.49995 14.7019 4.97406 13.858 5.81797C13.0141 6.66188 12.54 7.80648 12.54 8.99995V12.24C12.54 12.4786 12.4452 12.7076 12.2764 12.8763C12.1076 13.0451 11.8787 13.14 11.64 13.14H9.3V15.66H11.64C11.8787 15.66 12.1076 15.7548 12.2764 15.9236C12.4452 16.0923 12.54 16.3213 12.54 16.56V24.3H15.06V16.56C15.06 16.3213 15.1548 16.0923 15.3236 15.9236C15.4924 15.7548 15.7213 15.66 15.96 15.66H18.4968L19.1268 13.14H15.96C15.7213 13.14 15.4924 13.0451 15.3236 12.8763C15.1548 12.7076 15.06 12.4786 15.06 12.24V8.99995C15.06 8.47482 15.2686 7.9712 15.6399 7.59988C16.0113 7.22856 16.5149 7.01995 17.04 7.01995H19.38V4.49995H17.04Z"
                          fill="#015190"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.00313 1.5C5.12791 1.5 4.28854 1.84768 3.66967 2.46655C3.0508 3.08542 2.70313 3.92479 2.70312 4.8C2.70313 5.67521 3.0508 6.51458 3.66967 7.13345C4.28854 7.75232 5.12791 8.1 6.00313 8.1C6.87834 8.1 7.71771 7.75232 8.33658 7.13345C8.95545 6.51458 9.30313 5.67521 9.30313 4.8C9.30313 3.92479 8.95545 3.08542 8.33658 2.46655C7.71771 1.84768 6.87834 1.5 6.00313 1.5ZM4.50313 4.8C4.50313 4.40218 4.66116 4.02064 4.94246 3.73934C5.22377 3.45804 5.6053 3.3 6.00313 3.3C6.40095 3.3 6.78248 3.45804 7.06379 3.73934C7.34509 4.02064 7.50313 4.40218 7.50313 4.8C7.50313 5.19782 7.34509 5.57936 7.06379 5.86066C6.78248 6.14196 6.40095 6.3 6.00313 6.3C5.6053 6.3 5.22377 6.14196 4.94246 5.86066C4.66116 5.57936 4.50313 5.19782 4.50313 4.8ZM2.70312 9.6C2.70312 9.36131 2.79795 9.13239 2.96673 8.9636C3.13551 8.79482 3.36443 8.7 3.60313 8.7H8.40313C8.64182 8.7 8.87074 8.79482 9.03952 8.9636C9.2083 9.13239 9.30313 9.36131 9.30313 9.6V25.2C9.30313 25.4387 9.2083 25.6676 9.03952 25.8364C8.87074 26.0052 8.64182 26.1 8.40313 26.1H3.60313C3.36443 26.1 3.13551 26.0052 2.96673 25.8364C2.79795 25.6676 2.70312 25.4387 2.70312 25.2V9.6ZM4.50313 10.5V24.3H7.50313V10.5H4.50313ZM11.1031 9.6C11.1031 9.36131 11.1979 9.13239 11.3667 8.9636C11.5355 8.79482 11.7644 8.7 12.0031 8.7H16.8031C17.0418 8.7 17.2707 8.79482 17.4395 8.9636C17.6083 9.13239 17.7031 9.36131 17.7031 9.6V10.1208L18.2251 9.8964C19.1252 9.51192 20.08 9.271 21.0547 9.1824C24.3847 8.88 27.3031 11.496 27.3031 14.856V25.2C27.3031 25.4387 27.2083 25.6676 27.0395 25.8364C26.8707 26.0052 26.6418 26.1 26.4031 26.1H21.6031C21.3644 26.1 21.1355 26.0052 20.9667 25.8364C20.7979 25.6676 20.7031 25.4387 20.7031 25.2V16.8C20.7031 16.4022 20.5451 16.0206 20.2638 15.7393C19.9825 15.458 19.601 15.3 19.2031 15.3C18.8053 15.3 18.4238 15.458 18.1425 15.7393C17.8612 16.0206 17.7031 16.4022 17.7031 16.8V25.2C17.7031 25.4387 17.6083 25.6676 17.4395 25.8364C17.2707 26.0052 17.0418 26.1 16.8031 26.1H12.0031C11.7644 26.1 11.5355 26.0052 11.3667 25.8364C11.1979 25.6676 11.1031 25.4387 11.1031 25.2V9.6ZM12.9031 10.5V24.3H15.9031V16.8C15.9031 15.9248 16.2508 15.0854 16.8697 14.4665C17.4885 13.8477 18.3279 13.5 19.2031 13.5C20.0783 13.5 20.9177 13.8477 21.5366 14.4665C22.1554 15.0854 22.5031 15.9248 22.5031 16.8V24.3H25.5031V14.856C25.5031 12.5712 23.5099 10.7664 21.2191 10.9752C20.4321 11.0466 19.6611 11.241 18.9343 11.5512L17.1583 12.3132C17.0213 12.372 16.8719 12.3959 16.7234 12.3827C16.5749 12.3695 16.432 12.3196 16.3075 12.2375C16.1831 12.1554 16.081 12.0437 16.0104 11.9124C15.9398 11.7811 15.903 11.6343 15.9031 11.4852V10.5H12.9031Z"
                          fill="#015190"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_3883_933"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <path d="M0 0H23.4612V23.4612H0V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_3883_933)">
                          <path
                            d="M18.4757 1.09937H22.0736L14.2141 10.1051L23.4612 22.3619H16.2217L10.5475 14.9297L4.06214 22.3619H0.460845L8.86666 12.7261L0 1.10104H7.42379L12.545 7.89306L18.4757 1.09937ZM17.2105 20.2035H19.2047L6.33452 3.14552H4.1962L17.2105 20.2035Z"
                            fill="#015190"
                          />
                        </g>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        shareText + " " + currentUrl,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          d="M22.8531 5.89209C21.7528 4.78102 20.4424 3.90005 18.9981 3.30052C17.5539 2.701 16.0048 2.39491 14.4411 2.40009C7.88912 2.40009 2.54913 7.74009 2.54913 14.2921C2.54913 16.3921 3.10113 18.4321 4.13313 20.2321L2.45312 26.4001L8.75313 24.7441C10.4931 25.6921 12.4491 26.1961 14.4411 26.1961C20.9931 26.1961 26.3331 20.8561 26.3331 14.3041C26.3331 11.1241 25.0971 8.13609 22.8531 5.89209ZM14.4411 24.1801C12.6651 24.1801 10.9251 23.7001 9.40113 22.8001L9.04112 22.5841L5.29713 23.5681L6.29313 19.9201L6.05313 19.5481C5.06618 17.9726 4.54223 16.1512 4.54113 14.2921C4.54113 8.84409 8.98112 4.40409 14.4291 4.40409C17.0691 4.40409 19.5531 5.43609 21.4131 7.30809C22.3343 8.22473 23.0642 9.31514 23.5607 10.5161C24.0571 11.717 24.3102 13.0046 24.3051 14.3041C24.3291 19.7521 19.8891 24.1801 14.4411 24.1801ZM19.8651 16.7881C19.5651 16.6441 18.1011 15.9241 17.8371 15.8161C17.5611 15.7201 17.3691 15.6721 17.1651 15.9601C16.9611 16.2601 16.3971 16.9321 16.2291 17.1241C16.0611 17.3281 15.8811 17.3521 15.5811 17.1961C15.2811 17.0521 14.3211 16.7281 13.1931 15.7201C12.3051 14.9281 11.7171 13.9561 11.5371 13.6561C11.3691 13.3561 11.5131 13.2001 11.6691 13.0441C11.8011 12.9121 11.9691 12.6961 12.1131 12.5281C12.2571 12.3601 12.3171 12.2281 12.4131 12.0361C12.5091 11.8321 12.4611 11.6641 12.3891 11.5201C12.3171 11.3761 11.7171 9.91209 11.4771 9.31209C11.2371 8.73609 10.9851 8.80809 10.8051 8.79609H10.2291C10.0251 8.79609 9.71312 8.86809 9.43712 9.16809C9.17312 9.46809 8.40513 10.1881 8.40513 11.6521C8.40513 13.1161 9.47313 14.5321 9.61713 14.7241C9.76113 14.9281 11.7171 17.9281 14.6931 19.2121C15.4011 19.5241 15.9531 19.7041 16.3851 19.8361C17.0931 20.0641 17.7411 20.0281 18.2571 19.9561C18.8331 19.8721 20.0211 19.2361 20.2611 18.5401C20.5131 17.8441 20.5131 17.2561 20.4291 17.1241C20.3451 16.9921 20.1651 16.9321 19.8651 16.7881Z"
                          fill="#015190"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <button onClick={copyLink}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                      >
                        <path
                          d="M25.2031 8.99995V25.2H9.00313V8.99995H25.2031ZM25.2031 7.19995H9.00313C8.52574 7.19995 8.0679 7.38959 7.73033 7.72716C7.39277 8.06472 7.20313 8.52256 7.20312 8.99995V25.2C7.20312 25.6773 7.39277 26.1352 7.73033 26.4727C8.0679 26.8103 8.52574 27 9.00313 27H25.2031C25.6805 27 26.1384 26.8103 26.4759 26.4727C26.8135 26.1352 27.0031 25.6773 27.0031 25.2V8.99995C27.0031 8.52256 26.8135 8.06472 26.4759 7.72716C26.1384 7.38959 25.6805 7.19995 25.2031 7.19995Z"
                          fill="#015190"
                        />
                        <path
                          d="M3.59688 16.2H1.79688V3.60005C1.79687 3.12266 1.98652 2.66482 2.32408 2.32726C2.66165 1.98969 3.11949 1.80005 3.59688 1.80005H16.1969V3.60005H3.59688V16.2Z"
                          fill="#015190"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="blogbody mt-[24px]">
              <figure>
                <img
                  src={blog?.main_image}
                  className="h-[600px] rounded-[4px] w-full object-cover"
                  alt=""
                />
              </figure>
              <div dangerouslySetInnerHTML={{ __html: blog?.details }} />
            </div>
            <h1 className=" mt-[82px] text-[#015190] text-[40px] font-primary font-[600] mb-[40px] block">
              Related Blogs
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] mx-auto mt-[40px]">
              {relatedBlogs.map((item) => (
                <a
                  href={`/blog/${item.url}`}
                  key={blog.id}
                  className="bg-[#fff] rounded-[16px] border border-[#D9D9D9] p-4 shadow-sm hover:shadow-[0_0_40px_2px_#42abdf40] transition-all duration-300"
                >
                  <span className="inline-block px-[16px] py-[8px] rounded-full text-[#015190] bg-[#E9F6FB] text-[14px] font-secondary font-[400] mb-[16px]">
                    {item.category_id?.name}
                  </span>

                  <img
                    src={item.feature_image}
                    alt={item.title}
                    className="w-full h-[180px] object-cover rounded-[4px] mb-[16px]"
                  />

                  <p className="text-[#B3B3B3] text-[14px] mb-2 font-secondary">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "2-digit",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-[20px] font-primary text-[#015190] font-[600] mb-[16px] leading-snug">
                    {item.name}
                  </h3>

                  <p className="font-secondary text-[#757575] para text-[16px] leading-relaxed mb-[32px]">
                    {item.short_description}
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
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default BlogDetail;
