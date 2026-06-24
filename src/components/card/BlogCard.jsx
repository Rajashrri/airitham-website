import Button from "../ui/Button";

export const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 border border-[#D9D9D9] rounded-3xl overflow-hidden gap-6 h-full flex items-start flex-col">
      <div className="flex w-full flex-col gap-4">
        <div className="w-full aspect-square overflow-hidden rounded-3xl">
          <img
            src={blog.main_image || "/home/blog.png"}
            alt={blog.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-[#1E1E1E] text-inter-20 font-normal leading-snug">
          {blog.name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.short_description}
        </p>
      </div>

      <Button
        href={`/blog/${blog.url}`}
        icon="CircleArrowOutUpRight"
        iconSize="20px"
        btnText="Read Blog"
        className="text-[#015190] p-2.5 font-dm-sans font-semibold leading-[1.2] tracking-[0.02em]"
      />
    </div>
  );
};