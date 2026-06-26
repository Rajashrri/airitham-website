import React from "react";
import {
  DatabaseIcon,
  Bot,
  UndoDot,
  SearchCheck,
  Brain,
  FlaskRound,
} from "lucide-react";

export default function ReflectiveMemoryLoop() {
  return (
    <div className="w-fit  mx-auto flex flex-col justify-center items-center  h-[600px] md:scale-[0.7] md:my-[-70px]">
      <div className="memory-loop-top gap-2 flex items-center ">
        {/* Step 1 */}
        <div className="flex items-center gap-6">
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] absolute -translate-x-[110%] ">
            Memory Update
          </h2>
          <div className="size-16 flex items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <DatabaseIcon size={32} color="#fff" />
          </div>
        </div>

        {/* Arrow */}
        <img src="/svg/system-architecture/arrow.png" alt="arrow" />

        {/* Step 2 */}
        <div className="flex flex-col relative items-center gap-6">
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] whitespace-nowrap absolute top-[-60%] ">
            Memory Processing
          </h2>
          <div className="size-16 flex items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <Bot size={32} color="#fff" />
          </div>
        </div>

        {/* Arrow */}
        <img src="/svg/system-architecture/arrow.png" alt="arrow" />

        {/* Step 3 */}
        <div className="flex items-center gap-6">
          <div className="size-16 flex items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <UndoDot size={32} color="#fff" />
          </div>
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] absolute translate-x-[110%] ">
            Reflection
          </h2>
        </div>
      </div>

      <div className="memory-loop-middle  h-[200px] flex items-center justify-between w-full mx-auto px-2 overflow-hidden relative">
        {/* Left Arrow */}
        <div className="w-[40px] h-full flex  justify-center">
          <img
            src="/svg/demo.png"
            alt="arrow"
            className="h-full  rotate-180"
          />
        </div>

        {/* Text */}
        <h3 className="font-primary text-white font-light text-[42px] leading-[100%] tracking-[0.02em] text-center ">
          Reflective <br /> Memory Loop
        </h3>

        {/* Right Arrow */}
        <div className="w-[60px] h-full  flex items-center justify-center">
          <img
            src="/svg/demo.png"
            alt="arrow"
            className="h-full w-auto"
          />
        </div>
      </div>

      <div className="memory-loop-top gap-2  flex items-center ">
        {/* Step 1 */}
        <div className="flex items-center gap-6">
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] absolute -translate-x-[110%] ">
            Better Retrieval
          </h2>
          <div className="size-16 flex items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <SearchCheck size={32} color="#fff" />
          </div>
        </div>

        {/* Arrow */}
        <img src="/svg/system-architecture/arrow.png" alt="arrow" />

        {/* Step 2 */}
        <div className="flex flex-col relative items-center gap-6">
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] whitespace-nowrap absolute bottom-[-60%] ">
            Better Reasoning
          </h2>
          <div className="size-16 flex items-center justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <Brain size={32} color="#fff" />
          </div>
        </div>

        {/* Arrow */}
        <img src="/svg/system-architecture/arrow.png" alt="arrow" />

        {/* Step 3 */}
        <div className="flex items-center gap-6">
          <div className="size-16 flex items-center  justify-center rounded-full bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
            <FlaskRound size={32} color="#fff" />
          </div>
          <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] absolute translate-x-[110%] ">
            Distillation
          </h2>
        </div>
      </div>
    </div>
  );
}

// export default function ReflectiveMemoryLoop() {
//   return (
//     <div className="w-fit  mx-auto flex flex-col justify-center items-center  h-[600px]">
//      <div className="flex flex-col items-end gap-6 relative">
//   {/* Top item */}
//   <div className="flex items-center gap-6">
//     <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] ">
//       Memory Update
//     </h2>

//     <div className="size-16 flex items-center justify-center rounded-full
//       bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
//       <DatabaseIcon size={32} color="#fff" />
//     </div>
//   </div>

//   {/* Arrow */}
//   <div className="flex justify-center h-[200px] bg-red-900">
//     <img
//       src="/svg/demo.png"
//       className=" h-full  object-contain"
//       alt="arrow"
//     />
//   </div>

//   {/* Bottom item */}
//   <div className="flex items-center gap-6">
//     <h2 className="font-primary text-white font-light text-[20px] leading-[120%] tracking-[0.02em] ">
//       Better Retrieval
//     </h2>

//     <div className="size-16 flex items-center justify-center rounded-full
//       bg-[linear-gradient(86.66deg,#015190_10.85%,#6AC0E6_84.93%)]">
//       <DatabaseIcon size={32} color="#fff" />
//     </div>
//   </div>
// </div>

//     </div>
//   );
// }
