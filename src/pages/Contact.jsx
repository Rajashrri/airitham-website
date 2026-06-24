import React from 'react'
import Navbar from '../components/Navbar'
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';

const Contact = () => {
  return (
    <>
      <Navbar
                    wrapperClassName="fixed top-0 left-0"
                    disableScrollHide={false}
                    linkClassName="text-dark"
                    iconClassName="text-dark"
                />
      <div className='lg:mt-[100px] mt-[70px] rounded-[50px] lg:py-[90px] py-[100px] bg-[linear-gradient(180deg,#042539_0%,#000000_55.42%)]'>
             <div className='max-w-[913px] m-auto px-5'>
                    <h1 className='md:text-[64px] text-[40px] font-primary text-white text-center  leading-[1.2] tracking-[2%] capitalize  font-[600]'>Get in Touch. <br /> Redefine What's Possible</h1>
                    <p className='text-[#999999] text-center font-medium leading-[1.4] tracking-[2%] mt-2 md:text-[18px] text-[16px] '>Ready to elevate your business with AI? <br /> Contact us today to explore innovative solutions tailored to your success.</p>
             </div>
             <div className="max-w-[813px] m-auto mt-8 px-6">
                <form className="space-y-6">
                  {/* Email */}
                    <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                        Email
                        </label>
                        <input
                        type="email"
                        placeholder="john@company.com"
                        className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                        />
                    </div>

                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="john"
                            className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                        />
                        </div>

                        <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="smith"
                            className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                        />
                        </div>
                    </div>

                    {/* Company Name */}
                    <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                        Company Name
                        </label>
                        <input
                        type="text"
                        placeholder="aafaffe"
                        className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                        />
                    </div>

                    {/* Contact No */}
                    <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                        Contact No
                        </label>
                        <div className="flex gap-3">
                            <div className="customselect relative ">
                               <svg className='absolute right-3 top-5' width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg> 
                        <select className=" appearance-none pr-8 rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white outline-none focus:border-white">
                            <option className="text-black">India</option>
                            <option className="text-black">USA</option>
                            <option className="text-black">UK</option>
                        </select>
                            </div>

                        <input
                            type="tel"
                            placeholder="8956233214"
                            className="flex-1 rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition"
                        />
                        </div>
                    </div>

                    {/* Purpose */}
                    <div>
                        <label className="font-primary block mb-2 bg-[#6AC0E6] bg-clip-text text-transparent">
                        Purpose Of Inquiry
                        </label>
                        <textarea
                        rows="4"
                        placeholder="tell us about your testing challenges or specific areas of interest..."
                        className="w-full rounded-lg border border-white/40 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none focus:border-white transition resize-none"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-3">
                        <input type="checkbox" className="mt-1 accent-white" />
                        <p className="text-[18px] bg-[#6AC0E6] bg-clip-text text-transparent text-sm">
                        I Allow AIRITHM To Contact Me For Scheduling And Marketing, As Per Its Privacy Policy.
                        </p>
                    </div>

                    <button
                        type="button"
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

            <UspServices data={feedback_USP_CONFIG}/>

      <FooterSection/>
    </>
  )
}

export default Contact




 export const feedback_USP_CONFIG = {
    title: "USA, India Offices and Global Presence <br> Through Strategic Partners.",
    // subtitle: "Learn from every test run to continuously improve quality and coverage",
    bodyclass: "py-[90px]",

    cards: [
        {
        id: 1,
        icon: "Headset",
        title: "Sales Enquiries",
        mail:"sales@airithm.ai ",
        discColor: "#626161",
        cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        textColor: "#1E1E1E",
        description:
            "<a className='!text-[#015190]' href='mailto:sales@airithm.ai'>sales@airithm.ai</a>",

            
        
        },
        {
        id: 2,
        icon: "HandFist",
        title: "Support Enquiries",
        mail:"support@airithm.ai",
        discColor: "#626161",
        textColor: "#1E1E1E",
        cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        description:
                    "<a className='!text-[#015190]' href='support@airithm.ai'>support@airithm.ai</a>",

            
        
        },
        {
            id: 3,
            icon: "Handshake",
            title: "Partnership Enquiries",
            mail:"corporate@airithm.ai",
            discColor: "#626161",
            textColor: "#1E1E1E",
            cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
        description:
                    "<a className='!text-[#015190]' href='corporate@airithm.ai'>corporate@airithm.ai</a>",
        },
         {
            id: 4,
            icon: "Building",
            title: "USA",
            discColor: "#626161",
            textColor: "#1E1E1E",
            cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
            description:
                "Dominion Plaza 17304 Preston Road Suite 800 Dallas, TX 75252",
        }
        , {
            id: 5,
            icon: "Building2",
            title: "India",
            discColor: "#626161",
            textColor: "#1E1E1E",
            cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
            description:
                "Raheja- World Trade Centre, Unit 2703-2706, 27th Floor, Juinagar, Navi Mumbai 400703",
        }
        , {
            id: 6,
            icon: "University",
            title: "India",
            discColor: "#626161",
            textColor: "#1E1E1E",
            cardClassName:"md:w-[360px] w-[100%] bg-[#fff] p-2",
            description:
                "R-ONE Diamond Towers, 18th floor, Financial District, Hyderabad, Telangana - 500032",
        }

    
    ],
    };