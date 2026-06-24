import { BarChart3 } from "lucide-react";

function TechStackGrid() {
  const stackItems = [
    { src: "/stack/Python.png", alt: "Python" },
    { src: "/stack/Typescript.png", alt: "TypeScript" },
    { src: "/stack/Js.png", alt: "JavaScript" },
    { src: "/stack/Atom.png", alt: "React" },
    { src: "/stack/webhook.png",  alt :"Webhook"},
    { src: "/stack/graph.png",  alt :"graph"},
  ];

  return (
    <div className="w-full h-full  md:rounded-[100px] rounded-[50px] bg-gradient-to-b from-[#042539] to-black p-6 md:p-10 flex flex-col justify-center gap-6">

      {/* TOP GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 scale-[0.9]">
        {stackItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md aspect-square"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="md:size-[64px] size-[50px]   object-contain"
            />
          </div>
        ))}
      </div>

      {/* BOTTOM */}
      {/* <div className="flex gap-4 items-start">

        <div className=" rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <img
            src="/stack/webhook.png"
            alt="Webhook"
            className="md:size-[121px] size-[50px] object-contain"
          />
        </div>

        <div className="md:size-[121px] size-[111px] rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center">
          <BarChart3 className="text-white md:size-[100px] size-[50px]" />
        </div>
      </div> */}
    </div>
  );
}


export default function TechStackSection() {
  return (
    <div className="max-w-7xl mx-auto pt-16 px-4">
      <div className="flex flex-col md:flex-row  gap-6 items-stretch">

        {/* LEFT — MUST BE RELATIVE */}
        <div className="md:w-1/2 w-full relative rounded-3xl overflow-hidden">
          <img
            src="/topics/api-call.png"
            alt="API Call"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — DEFINES HEIGHT */}
        <div className="md:w-1/2 w-full">
          <TechStackGrid />
        </div>

      </div>
    </div>
  );
}


