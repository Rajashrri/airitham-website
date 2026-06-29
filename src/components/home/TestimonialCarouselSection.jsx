import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HOME_TESTIMONIAL_CONFIG } from "@/config/homeConfig";
import SectionHeading from "@/components/common/SectionHeading";

const TestimonialCarousel = () => {
  const { testimonials, profileImages, swiperConfig, styles } =
    HOME_TESTIMONIAL_CONFIG;

  return (
    <section>
      <div className="rounded-[50px] sm:rounded-[100px]  section-wrapper  bg-white relative z-10 mt-[-100px]  w-full">
        <SectionHeading
          titleClassName="pt-9 text-[#015190]   "
          title="Over 1,000 <br class=' sm:hidden' />  five-star reviews"
        />

        <div className="max-w-7xl mx-auto">
          {/* Profile Images Row */}
          <div className="flex justify-center flex-wrap pt-10 pb-[60px] sm:pt-[60px] sm:pb-20 items-center gap-2">
            {profileImages.map((img, idx) => (
              <div
                key={idx}
                className={`${
                  idx > 0 && "-ml-5"
                } size-[58px] rounded-full overflow-hidden shadow-md`}
              >
                <img
                  src={img}
                  alt={`Profile ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Carousel */}
          <div className="relative pb-10">
            <Swiper
              modules={[Pagination, Navigation]}
              {...swiperConfig}
              className="testimonial-swiper mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="h-full flex flex-col relative">
                    <div className="rounded-lg  mx-auto px-4 sm:px-0 max-w-[358px] testmonial-cards h-full flex gap-16 flex-col">
                      <p className="font-primary font-normal text-[16px] leading-[1.4] tracking-[0.02em] text-[#1E1E1E] ">
                        {testimonial.quote}
                      </p>

                      <div className="flex items-center gap-4 mt-auto">
                        {/* <div className="size-[60px] rounded-full overflow-hidden">
                          <img
                            src={profileImages[0]}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div> */}
                        <div className="">
                          <h4 className="font-primary font-medium text-[16px] leading-[1.4] tracking-[0.02em] text-[#00273A]">
                            {testimonial.name}
                          </h4>

                          <p className="font-primaryfont-normal whitespace-nowrap text-[16px] leading-[1.2] tracking-[0.02em] text-[#1E1E1E] mt-2">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Vertical line separator between cards - centered in the gap */}
                    <div
                      className="absolute hidden md:block right-2.5 md:-right-3.5 top-1/2 -translate-y-1/2 w-px testimonial-divider"
                      style={{
                        height: styles.dividerHeight,
                        backgroundColor: styles.dividerColor,
                      }}
                    ></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Pagination positioned below cards */}
            <div className="swiper-pagination-container flex  mt-12"></div>
          </div>
        </div>

        <style jsx global>{`
          .testimonial-swiper {
            padding-bottom: 0;
          }

          .testimonial-swiper .swiper-pagination {
            position: static;
            margin-top: 3rem;
          }

          .testimonial-swiper .swiper-pagination-bullet {
            width: 14px;
            height: 14px;
            background: #d1d5db;
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 6px;
          }

          .testimonial-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(
              76.14deg,
              #00273a 50.23%,
              #006ca0 131.99%
            );
            width: 14px;
            height: 14px;
          }
          .swiper-pagination {
            display: flex;
            gap: 12px;
            justify-content: center;
          }

          /* Hide divider on last visible slide */
          .swiper-slide:last-child .testimonial-divider {
            display: none;
          }


          @media (max-width:576px){
          .testimonial-swiper .swiper-pagination-bullet {
            width: 16px;
            height: 16px;
          }

          .testimonial-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(
              76.14deg,
              #00273a 50.23%,
              #006ca0 131.99%
            );
            width: 16px;
            height: 16px;
          }
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
