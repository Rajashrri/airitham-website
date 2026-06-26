const ImageTextSection = ({
  title,
  imageSrc,
  imageAlt = "",
  description,
  wrapperClassName = "",
}) => {
  return (
    <section>
      <div className={`mx-auto py-[80px] space-y-10 ${wrapperClassName}`}>
        {title && (
          <h2 className="text-center text-[#00273A] tracking-[0.02em] leading-none font-primary font-medium text-[48px]">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 gap-9">
          <div className="w-full md:col-span-1 col-span-2 rounded-3xl overflow-hidden">
            <img className="w-full h-full" src={imageSrc} alt={imageAlt} />
          </div>
          <div className="md:col-span-1 col-span-2">
          <p className="font-secondary text-left text-[#1E1E1E] font-medium lg:text-[18px] text-[18] leading-[1.4] tracking-[0.04em]">
            {description}
          </p>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default ImageTextSection;
