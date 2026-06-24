const TestingCard = ({ title, description, bgImgSrc, list }) => {
  return (
    <div
      className="
        relative group 
        w-full sm:w-[260px] md:w-[220px] lg:w-[200px]
        h-[400px] md:h-[300px]
        rounded-xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(.25,.8,.25,1)]
      "
      style={{
        backgroundImage: `url(${bgImgSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Layer */}
      <div className="
        absolute inset-0 bg-black/40
        min-[900px]:group-hover:bg-black/0
        transition-all duration-700
      " />

      {/* Bottom Gradient */}
      <div className="
        absolute bottom-0 left-0 right-0 h-28 
        bg-gradient-to-t from-black/80 to-transparent
        min-[900px]:group-hover:opacity-0
        transition-opacity duration-700
      " />

      {/* Pink Hover Layer */}
      <div className="
        absolute inset-0  bg-[linear-gradient(86deg,#015190_10.85%,#6AC0E6_84.93%)]

        opacity-0 
        min-[900px]:group-hover:opacity-100
        transition-opacity duration-700
      " />

      {/* Text */}
      <div className="absolute bottom-5 left-5 right-5">
        <h2 className="text-white text-[20px] leading-[110%] tracking-[0.02em] w-full sm:max-w-[140px] font-primary font-semibold">
          {title}
        </h2>

      <p
  className="
    text-white text-[16px] leading-[140%] tracking-[0.04em] 
    font-secondary font-medium mt-2

    /* Default: visible on mobile */
    opacity-100 max-h-none translate-y-0

    /* Hover only above 900px */
    min-[900px]:overflow-hidden
    min-[900px]:max-h-0
    min-[900px]:opacity-0
    min-[900px]:translate-y-2

    min-[900px]:group-hover:max-h-[180px]
    min-[900px]:group-hover:opacity-100
    min-[900px]:group-hover:translate-y-0

    min-[900px]:transition-all
    min-[900px]:duration-700
  "

   dangerouslySetInnerHTML={{ __html: description }}
>
  {/* {description} */}
</p>
<ul  className="
    text-white text-[16px] leading-[140%] tracking-[0.04em] 
    font-secondary font-medium mt-2

    /* Default: visible on mobile */
    opacity-100 max-h-none translate-y-0

    /* Hover only above 900px */
    min-[900px]:overflow-hidden
    min-[900px]:max-h-0
    min-[900px]:opacity-0
    min-[900px]:translate-y-2

    min-[900px]:group-hover:max-h-[180px]
    min-[900px]:group-hover:opacity-100
    min-[900px]:group-hover:translate-y-0

    min-[900px]:transition-all
    min-[900px]:duration-700
  ">
    {
      list?.map((item)=>(
          <li key={item.id} className="text-white flex">  <span className="mt-2 me-1 h-2  w-2 block rounded-full shrink-0"
                    style={{  background: "#fff", }}
                  />{item}</li>
      ))
    }

</ul>

      </div>
    </div>
  );
};

export default TestingCard;


