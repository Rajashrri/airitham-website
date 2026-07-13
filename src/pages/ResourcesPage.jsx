import { React, useState } from 'react'
import Navbar from "@/components/Navbar.jsx";
import MainBanner from '../components/services/MainBanner';
import FooterSection from "@/components/home/FooterSection"; 
import UspServices from '../components/services/UspServices';
import { Resource_HEADER, resorce_card_CONFIG, featured_content_Config, BLOG_CONFIG, Research_Config, Stories_config, FAQ_CONFIG } from "../config/resourceConfig"
import FeatureCard from "@/components/card/FeaturedCard.jsx";
import SectionHeading from "@/components/common/SectionHeading";
import Button from '../components/ui/Button';
import { ArrowUpRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { ChevronDown } from "lucide-react";
import BlogFilter from '../components/sections/BlogFilter';
import Webinars from '../components/sections/Webinars';


const ResourcesPage = () => {
    // const IconComponent = LucideIcons[icon];
    const { cards } = resorce_card_CONFIG;
    const data = featured_content_Config;
    const data1 = Research_Config;
    const data2 = Stories_config;
    const blogData = BLOG_CONFIG;

    const categories = [
        "All Posts",
        "Autonomous Testing",
        "Context Intelligence",
        "Agentic AI",
        "Engineering",
    ];
    const [activeCategory, setActiveCategory] = useState("All Posts");

    const filteredBlogs =
        activeCategory === "All Posts"
            ? BLOG_CONFIG
            : BLOG_CONFIG.filter(
                (item) => item.category === activeCategory
            );

    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <Navbar
                wrapperClassName="fixed top-0 left-0"
                disableScrollHide={false}
                linkClassName="text-dark"
                iconClassName="text-dark"
            />
            <div className='md:mt-[100px] mt-[100px] rounded-[50px] py-[150px] pb-[60px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <MainBanner data={Resource_HEADER} />
                <img src="/slider/atom.gif" alt="Atom Animation" className='m-auto mt-[30px]' />
            </div>
            <section className='py-[80px] pt-[80px]'>
                  <SectionHeading
                    title="Multiple resources for airithm"
                    // subtitle='Real-world results achieved using autonomous and agentic testing systems.'
                    titleClassName="sm:text-[48px] text-[#015190]"
                    // subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="flex flex-wrap px-5  gap-6 mt-8 justify-center max-w-[1200px] mx-auto">
                    {cards.map((card) => (
                        <FeatureCard key={card.id} {...card} />
                    ))}
                </div>

            </section>
            <section className='py-[80px]  pb-[200px] rounded-t-[50px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <SectionHeading
                    title="Featured content"
                    // subtitle='Purpose-built platforms that work independently or together to transform <br/> your testing and intelligence capabilities'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="grid grid-cols-12 md:gap-4 gap-6 lg:px-0 px-5 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data.map((item, id) => (
                            <div key={id} className="col-span-12 lg:col-span-4 border border-[1px] border-[#505050] rounded-[16px] overflow-hidden">
                                <img className='w-full' src={item.img} alt="" />
                                <div className='py-5 pt-2 px-5 background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                    <h4 className='bg-[linear-gradient(90deg,rgba(255,166,141,0.12)_0.03%,rgba(253,58,132,0.12)_100%)]
                            w-fit p-2 rounded-[100px] px-[20px] my-3 border border[1px] border-[#797979] '><span className='font-secondary text-[12px]   bg-[#6AC0E6]
                            bg-clip-text
                            text-transparent'>{item.tags}</span></h4>
                                    <h2 className='font-primary text-[#fff] text-[24px] font-[600]'>{item.title}</h2>
                                    <p className='text-[#C6C6C6] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                    <ul className='flex justify-between mt-[20px]'>
                                        <li className='text-[#C6C6C6] text-[14px] font-secondary'>{item.location}</li>
                                        <li className='text-[#C6C6C6] text-[14px] font-secondary'>{item.time}</li>
                                    </ul>
                                    <Button
                                        btnText="Learn More"
                                        className=
                                        "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        href=""
                                        icon="CircleArrowOutUpRight"
                                        iconSize="20px"
                                    //   useCommonSvg="true"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>


            </section>
            <BlogFilter/>


            <section className='py-[100px] pt-[150px] mt-[-60px] bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)] relative z-[-11]'>

                <SectionHeading
                    title="Enterprise whitepapers & research"
                    subtitle='In-depth research, frameworks, and architectural guidance for enterprise autonomous testing and AI quality engineering.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="grid md:px-0 px-5 grid-cols-12 gap-4 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data1.map((item, id) => {
                            
                            return (
                                <div className="col-span-12 md:col-span-4 border border-[1px] border-[#505050] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]
">

                                    <div className='py-5 pt-2 px-5 background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                        <h4 className='bg-[#42ABDF40] rounded-[4px] overflow-hidden

                            w-fit   px-[10px] my-3 h-[48px] w-[48px] flex justify-center  items-center '>
                                            <span className='font-secondary text-[12px]   text-[#FD3A84]'>    

                                                <img src="/svg/grid/file-text.svg" alt="" />
                                                
                                                
                                                </span></h4>
                                        <h2 className='font-primary text-[#fff] text-[24px] font-[600]  md:mt-[60px] mt-[28px]'>{item.title}</h2>
                                        <p className='text-[#C6C6C6] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                        <ul className='flex justify-start gap-[20px] mt-[20px]'>
                                            {
                                                item.tags.map((list, id) => (
                                                    <li className='bg-[#42ABDF40]
                                                            w-fit p-2 rounded-[100px] px-[20px] my-3  '><span className='font-secondary text-[12px]   bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>{list}</span></li>
                                                ))
                                            }

                                        </ul>
                                        <Button
                                            btnText="Download Whitepaper"
                                            className=
                                            "text-[16px]  min-w-[100%] md:mt-[40px] mt-[20px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                            href=""
                                            icon="Download"
                                            iconSize="20px"
                                        //   useCommonSvg="true"
                                        />
                                    </div>
                                </div>

                            )
                        }

                        )
                    }
                </div>
            </section>
            <section className='py-[100px]'>
                <SectionHeading
                    title="Customer success stories"
                    subtitle='Real-world results achieved using autonomous and agentic testing systems.'
                    titleClassName="sm:text-[48px] text-[#015190]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="grid lg:px-0 px-5 grid-cols-12 md:gap-4 gap-6 max-w-[1224px] mx-auto mt-[50px]">
                    {
                        data2.map((item, id) => {
                            const Icon = LucideIcons[item.icon]; // ✅ dynamic icon
                            return (
                                <div key={id} className="col-span-12 md:col-span-4 rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]
">

                                    <div className='py-5 pt-2 rounded-2xl px-5 border-light-sm background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0.1) 100%);'>
                                        <h4 className='bg-[#42ABDF40]
                                        w-fit p-2 rounded-[100px] px-[20px] my-3  '><span className='font-secondary text-[12px] font-[600]  bg-[#015190]
                                        bg-clip-text
                                        text-transparent'>{item.tag}</span></h4>
                                        <h2 className='font-primary text-[#000] text-[24px] font-[600]  md:mt-[40px] mt-[30px]'>{item.title}</h2>
                                        <p className='text-[#626161] text-[16px] font-secondary mt-[10px]'>{item.disc}</p>
                                        <ul className=' gap-[20px] mt-[20px]'>
                                            {
                                                item.list.map((list, id) => (
                                                    <li className='mb-[10px] '><span className='font-secondary text-[16px]   bg-[#015190]
                                                            bg-clip-text
                                                            text-transparent'>+ {list}</span></li>
                                                ))
                                            }

                                        </ul>
                                        <Button
                                            btnText="View Case Study"
                                            className=
                                            "text-[16px]  min-w-[100%] md:mt-[40px] mt-[28px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                            href=""
                                            icon="CircleArrowOutUpRight"
                                            iconSize="20px"
                                        //   useCommonSvg="true"
                                        />
                                    </div>
                                </div>

                            )
                        }

                        )
                    }
                </div>

            </section>
            <section className='py-[80px]  pb-[200px] md:rounded-t-[100px] rounded-t-[50px] rounded-b-0 bg-[linear-gradient(180deg,#00273A_0%,#1E1E1E_55.42%)]'>
                <SectionHeading
                    title="Autonomous testing benchmarks"
                    subtitle='Objective performance and accuracy benchmarks comparing autonomous testing <br/> against traditional approaches.'
                    titleClassName="sm:text-[48px] text-[#fff]"
                    subtitleClassName=" sm:text-[16px] text-[#C6C6C6] max-w-[950px]"
                />
                <div className="max-w-[1250px] m-auto mt-[60px] lg:px-0 px-5">
                    <div className="grid grid-cols-12 gap-4 ">
                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary inline font-[600] text-[#6AC0E6]'>Test coverage accuracy</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Scripted testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[#C7C7C7] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>



                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary inline font-[600] text-[#6AC0E6]'>Defect detection rate</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Manual testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[#C7C7C7] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>

                        <div className=" col-span-12 md:col-span-4 p-5 border border-[1px] border-[#9c9c9c] rounded-[16px] overflow-hidden bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)]">
                            <h2 className='text-[20px] font-primary inline font-[600] text-[#6AC0E6]'>Time to market</h2>
                            <div className=" mt-[40px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Autonomous testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>94%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)] rounded-full"
                                        style={{ width: `94%` }}
                                    ></div>
                                </div>

                            </div>
                            <div className=" mt-[20px]">
                                <p className='flex justify-between'> <span className='text-[#fff]'>Traditional testing</span> <span className='bg-[#6AC0E6]
                                                            bg-clip-text
                                                            text-transparent'>67%</span></p>
                                <div className="w-full h-3 bg-[#555555] rounded-full mt-1 overflow-hidden">
                                    <div
                                        className="h-full bg-[#C7C7C7] rounded-full"
                                        style={{ width: `67%` }}
                                    ></div>
                                </div>

                            </div>
                            <Button
                                btnText="View Report"
                                className=
                                "text-[16px]  min-w-[100%] mt-[40px] py-5 px-4 font-primary font-medium leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                href=""
                                icon="CircleArrowOutUpRight"
                                iconSize="20px"
                            //   useCommonSvg="true"
                            />

                        </div>
                    </div>

                </div>



            </section>

                <Webinars/>
            <section className='py-[90px] bg-[#E9F6FB] lg:rounded-t-[100px] rounded-t-[24px]'>
                <SectionHeading
                    title="Frequently asked questions"
                    subtitle='Quick answers to common questions about the platform, technology, and deployment.'
                    titleClassName="sm:text-[48px] text-[#015190]"
                    subtitleClassName=" sm:text-[16px] text-[#626161] max-w-[950px]"
                />
                <div className="max-w-[800px] m-auto mt-[60px] px-5 md:px-0" >
                    {FAQ_CONFIG.map((item, index) => (
                        <div
                            key={item.id}
                            className="border border-[#E6E6E6] rounded-[12px] mb-3 overflow-hidden bg-white"
                        >
                            {/* Header */}
                            <button
                                onClick={() => toggle(index)}
                                className="w-full flex justify-between items-start px-6 py-4 text-left"
                            >
                                <h3 className="font-primary w-[95%] text-[#015190] font-[600] text-[20px]   ">
                                    {item.question}
                                </h3>

                                <ChevronDown
                                    size={24}
                                    className={`transition-transform duration-300 mt-[5px] text-[#015190] ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {/* Content */}
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-[500px] pb-5" : "max-h-0"
                                    }`}
                            >
                                <p className="text-[#626161] text-[18px] leading-[1.6]">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                                  <Button
                                        btnText="View All"
                                        className=
                                        "text-[20px]  min-w-[188px] m-auto font-[600] mt-[40px] py-5 px-4 font-primary  leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white"
                                        href=""
                                        icon="CircleArrowOutUpRight"
                                        iconSize="20px"
                                    //   useCommonSvg="true"
                                    />

                </div>

            </section>
            <FooterSection/>
        </>
    )
}

export default ResourcesPage