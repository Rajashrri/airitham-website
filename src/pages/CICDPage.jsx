import InfoCard from "../components/card/InfoCard";
import InsightCard from "../components/card/InsightCard";
import SectionHeading from "../components/common/SectionHeading";
import Navbar from "../components/Navbar";
import MainBanner from "../components/services/MainBanner";
import FeatureCard from "@/components/card/FeaturedCard";
import FooterSection from "@/components/home/FooterSection";
import TimeLine2 from "../components/services/TimeLine2";
import UspServices2 from "../components/services/UspServices2";
const CICDPage = () => {
  return (
    <div className="bg-[#E9F6FB]">
      <Navbar initialTextColor="black" />

      <section>
        <div className="bg-gradient-primary py-[100px] mt-[104px] text-white rounded-[50px]">
          <div
            className="mx-auto mb-8 w-fit rounded-full px-6 py-2
                  backdrop-blur-md
                  bg-linear-to-r from-white/10 via-white/5 to-white/10
                  border border-white/20
                  shadow-[0_0_20px_rgba(255,255,255,0.08)]
                "
          >
            <span className="font-inter font-medium text-[12px] leading-[1.4] tracking-[0.04em] mae-gradient-text">
              Automated Pipeline Excellence
            </span>
          </div>

          <MainBanner data={AUTOMATION_PIPELINE_HEADER} />

          <div className="llm-based-feature flex-wrap px-5 gap-10 md:gap-20  pt-[60px] flex justify-center items-center">
            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] ">
                Zero-downtime deployments
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] ">
                Enterprise-grade security
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <img src="/svg/circle-check-lg.svg" alt="" />
              <span className="mae-gradient-text font-secondary font-medium text-sm leading-[1.4] tracking-[0.04em] ">
                {" "}
                Multi-cloud support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative  z-2 ">
      

        {/* Content */}
        <div
          className="relative px-4 sm:px-0 w-full gap-10 commmunity-section section-overlap
    flex-col justify-center flex items-center mt-[-100px] z-10"
        >
          <div className="max-w-7xl relative">
            <SectionHeading
              subtitle={
                AUTOMATION_PIPELINE_FEATURES_CONFIG?.subtitle || "Not Provided"
              }
              subtitleClassName="font-secondary max-w-[760px] text-[#626161]"
              titleClassName="font-primary text-[#00273A] "
              title={
                AUTOMATION_PIPELINE_FEATURES_CONFIG?.title || "Not Provided"
              }
              spacing="space-y-4"
            />

            <div className="flex flex-wrap gap-6 pt-10 justify-center max-w-7xl mx-auto">
              {AUTOMATION_PIPELINE_FEATURES_CONFIG?.cards?.map((item) => (
                <FeatureCard {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <TimeLine2 data={CICD_DATA}/>  

      <section>
        <div className="py-[100px]">
          <SectionHeading
            subtitle="
                Measurable improvements across your entire development lifecycle."
            subtitleClassName=" font-secondary text-[#626161]"
            titleClassName="font-primary   text-[#015190] captialize"
            title="Key benefits"
            wrapperClassName=""
            spacing="space-y-4"
          />

          <div className="flex pt-[60px] md:px-0 px-5 flex-wrap gap-6 justify-center">
            {INSIGHTS_DATA?.topRow?.map((item) => (
              <InsightCard key={item?.id} {...item} />
            ))}
          </div>
          <div className="flex pt-[60px] md:px-0 px-5 flex-wrap gap-6 justify-center">
            {INSIGHTS_DATA?.bottomRow.map((item) => (
              <InfoCard key={item?.id} {...item} />
            ))}
          </div>
        </div>
      </section>

      <UspServices2 data={USP_CONFIG}/>
      <FooterSection />

    </div>
  );
};

export default CICDPage;



export const USP_CONFIG = {
  title: "Real-world use cases",
  subtitle: "See how teams across industries leverage our platform to transform their delivery process",
  bodyclass: "bg-[linear-gradient(180deg,#042539_0%,#000000_100%)] text-white mb-[60px]",
  // tags:"How it works",

  cards: [
    {
      id: 1,
      icon: "Store",
      iconColor:"#6AC0E6",
      title: "E-commerce platform",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px] min-h-[258px]",
      textColor: "#fff",
      description:
        "A retail company deploys 50+ microservices daily during peak season. Automated pipelines handle testing, staging, and production deployments with zero downtime.",
      points: {
        labels: [
          {
            text: "50+ deploys/day",
            icon: {
              name: "Rocket",
              color: "#6AC0E6",
            },
          },
          {
            text: "8 min avg",
            icon: {
              name: "Clock",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
        
    
    },
     {
      id: 2,
      icon: "Hospital",
      iconColor:"#6AC0E6",
      title: "Healthcare SaaS",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px] min-h-[258px]",
      textColor: "#fff",
      description:
        "HIPAA-compliant deployment pipelines with mandatory security scans, audit logging, and automated compliance checks before every production release.",

 points: {
        labels: [
          {
            text: "100% compliant",
            icon: {
              name: "CircleAlert",
              color: "#6AC0E6",
            },
          },
          {
            text: "Zero breaches",
            icon: {
              name: "Lock",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
    
    },
     {
      id: 3,
      icon: "Smartphone",
      iconColor:"#6AC0E6",
      title: "Mobile app startup",
      discColor: "#C6C6C6",
      cardClassName:"bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(153,153,153,0.1)_100%)] w-full sm:w-[340px] min-h-[258px]",
      textColor: "#fff",
      description:
        "Continuous deployment to app stores with automated testing on real devices, beta distribution, and gradual rollouts to minimize user impact.",
 points: {
        labels: [
          {
            text: "5M+ users",
            icon: {
              name: "UsersRound",
              color: "#6AC0E6",
            },
          },
          {
            text: "4.8 rating",
            icon: {
              name: "Star",
              color: "#6AC0E6",
            },
          },
        
        ],


        // TEXT COLOR / GRADIENT
        textGradientColor: "#6AC0E6",

      }
 
    
    }
   
  ],
};









export const CICD_DATA = {
  title: "How It Works",
  subtitle: "A streamlined process that takes your code from development to production with confidence.",
  cards: [
    {
      id: 1,
      align: "left",
      title: "Code commit & trigger",
      description:
        "Developers push code to your repository. Your system instantly detects changes and triggers the appropriate pipeline based on branch, tags, or custom rules you've configured.",
      card: (
        <>
        <div className="mb-3">
          <img src="/svg/img1.png" alt="" />
        </div>
          <div className="bg-[#FFFFFF1F] rounded-[8px] p-2">
          <p className="text-[14px] gap-1  bg-[#6AC0E6] bg-clip-text text-transparent flex">
            <img src="/svg/check.svg" alt="" /> Commit detected: feature/new-feature
          </p>
          <p className="text-[14px]  gap-1 bg-[#6AC0E6] bg-clip-text text-transparent mt-2 flex">
               <img src="/svg/check.svg"  alt="" />  Pipeline triggered automatically
          </p>
          </div>
        </>
      )
    },
    {
      id: 2,
      align: "right",
      title: "Build & test",
      description:
        "Code is compiled, dependencies are resolved, and comprehensive test suites run in parallel. Unit tests, integration tests, and security scans execute simultaneously for faster feedback.",
      card: (
        <>
        
          <div className="flex justify-between font-primary text-[14px] p-2 rounded-[8px] bg-[#FFFFFF1F]">
            <span className="text-gray-400">Unit tests</span>
            <span className="bg-[#6AC0E6] bg-clip-text text-transparent flex gap-1"><img src="/svg/check.svg"  alt="" />  243 passed</span>
          </div>
          <div className="flex justify-between font-primary text-[14px] p-2 rounded-[8px] mt-2 bg-[#FFFFFF1F]">
            <span className="text-gray-400">Integration tests</span>
            <span className="bg-[#6AC0E6] bg-clip-text text-transparent flex gap-1"> <img src="/svg/check.svg"  alt="" />  87 passed</span>
          </div>
          <div className="flex justify-between font-primary text-[14px] p-2 rounded-[8px] mt-2 bg-[#FFFFFF1F]">
            <span className="text-gray-400">Security scan</span>
            <span className="bg-[#6AC0E6] bg-clip-text text-transparent flex gap-1"><img src="/svg/check.svg"  alt="" />  No issues</span>
          </div>
        </>
      )
    },
    {
      id: 3,
      align: "left",
      title: "Quality gates",
      description:
        "Automated quality checks ensure code coverage thresholds, performance benchmarks, and security standards are met before proceeding to deployment stages.",
      card: (
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-[#FFFFFF1F] py-3 rounded-[16px]">
            <p className="bg-[#6AC0E6] bg-clip-text text-transparent text-[32px] font-primary font-[600]">94%</p>
            <p className="text-[14px] font-seconadry text-[#FFFFFF]">Coverage</p>
          </div>
          <div className="bg-[#FFFFFF1F] py-3 rounded-[16px]">
            <p className="bg-[#6AC0E6] bg-clip-text text-transparent text-[32px] font-primary font-[600]">A+</p>
            <p className="text-[14px] font-seconadry text-[#FFFFFF]">Quality</p>
          </div>
          <div className="bg-[#FFFFFF1F] py-3 rounded-[16px]">
            <p className="bg-[#6AC0E6] bg-clip-text text-transparent text-[32px] font-primary font-[600]">0</p>
            <p className="text-[14px] font-seconadry text-[#FFFFFF]">Vulnerabilities</p>
          </div>
          <div className="bg-[#FFFFFF1F] py-3 rounded-[16px]">
            <p className="bg-[#6AC0E6] bg-clip-text text-transparent text-[32px] font-primary font-[600]">98%</p>
            <p className="text-[14px] font-seconadry text-[#FFFFFF]">Performance</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      align: "right",
      title: "Deploy & monitor",
      description:
        "Automated deployment to staging and production environments with zero-downtime strategies. Real-time monitoring tracks application health and automatically rolls back if issues are detected.",
      card: (
        <>
          <div className="flex justify-between text-[16px] bg-[#FFFFFF1F] p-2 rounded-[8px]">
            <span className="text-gray-400">Staging</span>
             <span class="bg-[#42ABDF40]
                                                            w-fit p-0  rounded-[100px] px-[15px] border border[1px] border-[#797979] flex justify-center items-center "><span class="font-secondary  block text-[12px]   bg-[#6AC0E6]
                                                            bg-clip-text p-1
                                                            text-transparent">Deployed</span></span>
          </div>
          <div className="flex justify-between text-[16px] bg-[#FFFFFF1F] p-2 rounded-[8px] mt-2">
            <span className="text-gray-400">Production</span>
          <span class="bg-[#42ABDF40]
                                                            w-fit p-0  rounded-[100px] px-[15px] border border[1px] border-[#797979] flex justify-center items-center "><span class="font-secondary  block text-[12px]   bg-[#6AC0E6]
                                                            bg-clip-text p-1
                                                            text-transparent">In Progress</span></span>
          </div>
          <div className="mt-3 bg-[#FFFFFF1F] p-2 rounded-[8px]">
            <p className="flex justify-between mb-2 text-[16px] text-gray-400 "><span>Deployment progress</span> <span className="bg-[#6AC0E6] bg-clip-text text-transparent">75%</span></p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#6AC0E6]  w-[75%]" />
            </div>
          </div>
        </>
      )
    }
  ]
};


export const AUTOMATION_PIPELINE_HEADER = {
  heading: "CI/CD & DevOps <br class='hidden md:block' /> integration",
  headclass: false,
  headingclass:"text-[#fff]",
  paragraph:
    "Streamline your development workflow with intelligent automation that accelerates <br class='hidden md:block' /> delivery while maintaining code quality and security.",
  buttons: [
    {
     
      className:
        "py-5 px-6 min-w-[253px] w-full font-primary font-semibold text-[16px] leading-[1.2] tracking-[0%] rounded-lg text-[#015190] bg-white",
      icon: "Play",
      hoverIcon: false,
      iconSize: "20px",
      href: "",text: "View Architecture", 
    },
    {
      text: "Request Demo",
      className:
        "text-[16px] min-w-[228px] py-5 px-4 font-primary font-semibold leading-[1.2] tracking-[0%] rounded-lg bg-primary-gradient text-white",
      href: "/demo",
      icon: "CircleArrowOutUpRight",
      iconSize: "20px",
    },
  ],
};

export const AUTOMATION_PIPELINE_FEATURES_CONFIG = {
  title: "What it does",
  titleClassName: "text-[#015190]",
  subtitle:
    "Our CI/CD platform seamlessly integrates with your existing development workflow to automate the entire software delivery lifecycle. From code commit to production deployment, we orchestrate testing, building, security scanning, and deployment with intelligent automation that learns from your team's patterns.",

  cards: [
    {
      id: 1,
      icon: "GitCommitHorizontal",
      iconColor: "#6AC0E6",
      title: "Automated pipelines",
      description:
        "Trigger builds, tests, and deployments automatically on every commit. Smart parallel execution reduces wait times by up to 70%.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
    {
      id: 2,
      icon: "ShieldCheck",
      iconColor: "#6AC0E6",
      title: "Security first",
      description:
        "Built-in vulnerability scanning, compliance checks, and secret management ensure every deployment meets security standards.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
    {
      id: 3,
      icon: "Clock",
      iconColor: "#6AC0E6",
      title: "Real-time insights",
      description:
        "Monitor pipeline performance, deployment success rates, and team velocity with comprehensive analytics dashboards.",
      cardClassName: "md:w-[320px] w-[100%] bg-white  border-[#D9D9D9]",
    },
  ],
};


export const INSIGHTS_DATA = {
  topRow: [
    {
      id: "testCoverage",
      iconName: "CircleCheckBig",
      value: "98%",
      label: "Test coverage",
      description:
        "Comprehensive automated testing ensures code quality with near-perfect coverage.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
    },
    {
      id: "Rocket",
      iconName: "Zap",
      value: "5×",
      label: "Faster deployments",
      description:
        "Reduce deployment time from hours to minutes with intelligent automation.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
    },
    {
      id: "costReduction",
      iconName: "CircleDollarSign",
      value: "40%",
      label: "Cost reduction",
      description:
        "Lower infrastructure costs through optimized resource utilization and efficiency.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
    },
    {
      id: "riskMitigation",
      iconName: "ShieldCheck",
      value: "99.9%",
      label: "Risk mitigation",
      description:
        "Automated rollbacks and canary deployments minimize production incidents.",
      cardClassName: "md:w-[293px] w-[100%]",
      iconWrapperClass: "text-[#015190]",
    },
  ],
  bottomRow: [
    {
      id: "timeToMarket",
      iconName: "Clock",
      label: "Time to market",
      description:
        "Ship features 3× faster with automated pipelines and continuous delivery.",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff]",
      iconWrapperClass: "text-[#015190]",
    },
    {
      id: "teamProductivity",
      iconName: "Users",
      label: "Team productivity",
      description:
        "Developers focus on coding while automation handles deployment complexity.",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff]",
      iconWrapperClass: "text-[#015190]",
    },
    {
      id: "qualityAssurance",
      iconName: "CheckSquare",
      label: "Quality assurance",
      description:
        "Catch bugs early with automated testing at every stage of the pipeline.",
      cardClassName: "md:w-[360px] w-[100%] bg-[#fff]",
      iconWrapperClass: "text-[#015190]",
    },
  ],
};
