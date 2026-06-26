import SectionHeading from "@/components/common/SectionHeading";

const RequestDemoForm = () => {
  return (
    <div className=" section-overlap-bottom rounded-t-[100px] mt-[-100px] relative z-10 flex items-center justify-center bg-[linear-gradient(360deg,#000000_0%,#042539_100%)] ">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        {/* <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Request Your Demo
          </h1>
          <p className="text-gray-300 mt-2">
            A solutions architect will tailor the demo to your environment.
          </p>
        </div> */}

        <SectionHeading
          titleClassName="text-white"
          spacing="space-y-4"
          subtitleClassName="font-secondary text-[#d9d9d9] font-medium text-[16px] leading-[1.4] tracking-[0.04em]"
          title="Request Your Demo"
          subtitle="A solutions architect will tailor the demo to your environment."
        />

        {/* Form */}
        <form className="grid grid-cols-1 gap-y-7
gap-x-6
 max-w-[824px] md:grid-cols-2 gap-4  p-6 rounded-2xl shadow-lg">
          {/* Full Name */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className=" mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Full Name*
            </label>
            <input
              type="text"
              placeholder="john smith"
              className="py-4 px-6 w-full rounded-lg bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none focus:border-white"
            />
          </div>

          {/* Work Email */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className="mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Work Email*
            </label>
            <input
              type="email"
              placeholder="john@company.com"
              className="py-4 px-6 w-full rounded-lg bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none focus:border-white"
            />
          </div>

          {/* Company */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className="mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Company*
            </label>
            <input
              type="text"
              placeholder="acme corp"
              
              className="py-4 px-6 w-full rounded-lg bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none "
            />
          </div>

          {/* Role */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className="mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Role*
            </label>
            <select className="py-4 px-6 w-full rounded-lg bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none ">
              <option>select your role</option>
            </select>
          </div>

          {/* Industry */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className="mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Industry
            </label>
            <select className="py-4 px-6 w-full rounded-lg bg-[#FFFFFF14] text-gray-200 border bborder-[#D9D9D9] focus:border-white ">
              <option>select industry</option>
            </select>
          </div>

          {/* Platform Interest */}
          <div className="flex items-start space-y-2.5 flex-wrap">
            <label
              className="mae-gradient-text 
    font-primary
    font-medium
    text-[20px]
    leading-[120%]
   
    tracking-[0.02em]
    "
            >
              Platform Interest
            </label>
            <select className="px-6 py-4 rounded-lg bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none w-full focus:border-white">
              <option>select platform</option>
            </select>
          </div>

          {/* Message */}
{/* Message */}
<div className="flex items-start space-y-2.5 flex-wrap md:col-span-2">
  <label className="mae-gradient-text font-primary
    font-medium
    text-[20px]
    leading-[120%]
    tracking-[0.02em]
    ">
    Message (Optional)
  </label>

  <textarea
    placeholder="tell us about your testing challenges or specific areas of interest..."
    className="py-4 px-6 rounded-lg w-full bg-[#FFFFFF14] text-gray-200 border border-[#D9D9D9] focus:outline-none focus:border-white min-h-[120px]"
  />
</div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="mt-6 h-[60px] w-[360px] font-primary  text-[18px] leading-[1.2] tracking-normal  rounded-lg text-white font-semibold bg-[linear-gradient(85.9deg,#015190_62.74%,#FF7F7F_95.09%)] hover:opacity-90 transition"
            >
              Request Demo
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className=" mae-gradient-text font-secondary font-medium text-[18px] leading-[1.4] tracking-[0.02em] text-center ">
          We’ll Respond Within 24 Hours To Schedule Your Personalized Demo.
        </p>
      </div>
    </div>
  );
};

export default RequestDemoForm;
