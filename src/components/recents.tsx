import { GoDotFill as Dot } from "react-icons/go"

const Recents = () => {
   return (
      <div className="flex flex-col bg-white rounded-lg shadow-md h-[100%] w-[100%] p-5">
         <h1 className=" text-lg text-blue-600 font-semibold">
            Recent Releases
         </h1>
         <div className="w-full h-2 border-b-2 border-b-black/[0.3] mb-7" />
         <p className="text-sm text-blue-500 flex items-center">
            <Dot className="h-[20px] w-[20px] -translate-x-[45%] text-black/[0.3]" />
            February 12, 2024
         </p>
         <div className="ps-5 border-s-2 border-s-black/[0.3]">
            <p className="text font-bold mb-2">Industrial Protection</p>
            <p className="text-wrap text-sm text-neutral-600 ">
               Index of Industrial Production (IIP) grew by 3.8% YoY in
               December, as compared to a 5.1% YoY growth in the same month last
               year. Electricity has seen the slowest growth of 1.2% YoY in
               December as compared to 10.4% YoY growth in the same month last
               year.
            </p>
         </div>
      </div>
   )
}

export default Recents
