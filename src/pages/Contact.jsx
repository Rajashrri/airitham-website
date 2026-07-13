import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import UspServices from "../components/services/UspServices";
import { useNavigate } from "react-router-dom";
import { contactApi } from "../utils/frontApi";
const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error when user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const response = await contactApi(formData);

      if (response.data.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });

        navigate("/thank-you");
      }
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit mobile number";
    }


    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  return (
    <>
      <Navbar
        wrapperClassName="fixed top-0 left-0"
        disableScrollHide={false}
        linkClassName="text-dark"
        iconClassName="text-dark"
      />
      <div className="lg:mt-[100px] mt-[100px] rounded-[50px] lg:py-[90px] py-[100px] bg-[linear-gradient(180deg,#042539_0%,#000000_55.42%)]">
        <div className="max-w-[913px] m-auto px-5">
          <h1 className="md:text-[64px] text-[40px] font-primary text-white text-center  leading-[1.2] tracking-[2%]  font-[600]">
            Get in touch.<br />Redefine what's possible
          </h1>
          <p className="text-[#999999] text-center font-medium leading-[1.4] tracking-[2%] mt-2 md:text-[18px] text-[16px] ">
            Ready to elevate your business with AI? <br /> Contact us today to
            explore innovative solutions tailored to your success.
          </p>
        </div>
        <div className="max-w-[813px] m-auto mt-8 px-6">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                Email
              </label>
              <input
                placeholder="john@company.com"
                type="email"
                name="email"
                class="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}
            </div>
            {/* First & Last Name */}
            <div>
              <div>
                <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  class="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && (
                  <span className="text-red-500">{errors.fullName}</span>
                )}
              </div>
            </div>
       
            <div>
             
              <div>
              <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                Contact No
              </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="8956233214"
                  class="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                />
                {errors.phone && (
                  <span className="text-red-500">{errors.phone}</span>
                )}
              </div>
            </div>
            {/* Purpose */}
            <div>
              <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                Message
              </label>

              <textarea
                rows="4"
                placeholder="tell us about your testing challenges or specific areas of interest..."
                className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition resize-none"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
           
            </div>
            {/* Checkbox */}
            <div className="flex items-center gap-3">
              <input type="checkbox" className="mt-1 accent-white" />
              <p className="text-[18px] bg-[#6AC0E6] bg-clip-text text-transparent text-sm">
                I allow airithm to contact me for scheduling and marketing, as per its privacy policy.
              </p>
            </div>
            <button
              type="submit"
              className="
                            w-full mt-3 py-3 rounded-lg font-semibold text-white
                            bg-primary-gradient 
                            transition-all duration-300
                           
                           
                            text-[18px]
                            border border-[1px]
                        "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <UspServices data={feedback_USP_CONFIG} />

      <FooterSection />
    </>
  );
};

export default Contact;

export const feedback_USP_CONFIG = {
  title: "USA, India offices and global presence through strategic partners.",
  bodyclass: "py-[90px]",
  // titleClassName="text-[#015190]",
      titleClassName:"text-[#015190]",

  cards: [
    {
      id: 1,
      icon: "Headset",
      title: "Sales Enquiries",
      mail: "sales@airithm.ai ",
      discColor: "#626161",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      textColor: "#1E1E1E",
      description:
        "<a className='!text-[#015190]' href='mailto:sales@airithm.ai'>sales@airithm.ai</a>",
    },
    {
      id: 2,
      icon: "HandFist",
      title: "Support Enquiries",
      mail: "support@airithm.ai",
      discColor: "#626161",
      textColor: "#1E1E1E",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      description:
        "<a className='!text-[#015190]' href='support@airithm.ai'>support@airithm.ai</a>",
    },
    {
      id: 3,
      icon: "Handshake",
      title: "Partnership Enquiries",
      mail: "corporate@airithm.ai",
      discColor: "#626161",
      textColor: "#1E1E1E",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      description:
        "<a className='!text-[#015190]' href='corporate@airithm.ai'>corporate@airithm.ai</a>",
    },
    {
      id: 4,
      icon: "Building",
      title: "USA",
      discColor: "#626161",
      textColor: "#1E1E1E",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      description:
        "Dominion Plaza 17304 Preston Road Suite 800 Dallas, TX 75252",
    },
    {
      id: 5,
      icon: "Building2",
      title: "India",
      discColor: "#626161",
      textColor: "#1E1E1E",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      description:
        "Raheja- World Trade Centre, Unit 2703-2706, 27th Floor, Juinagar, Navi Mumbai 400703",
    },
    {
      id: 6,
      icon: "University",
      title: "India",
      discColor: "#626161",
      textColor: "#1E1E1E",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff] p-2",
      description:
        "R-ONE Diamond Towers, 18th floor, Financial District, Hyderabad, Telangana - 500032",
    },
  ],
};
