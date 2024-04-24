import { FaCaretDown } from 'react-icons/fa'

const recents = () => {
  return (
    <div className="p-3 w-[340px] [box-shadow:rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] rounded-xl absolute right-[30px] top-[260px] ">
      <div className="flex justify-between">
        <p className="text-[#709cef] font-[500]">Recent Releases</p>
        <button className="flex justify-between items-center p-2 border border-black/30 rounded-md">
          <span className="font-[500] mr-[60px]">India</span>
          <div className="text-black/60">
            <FaCaretDown />
          </div>
        </button>
      </div>
      <div className="w-full border-b-[.1px] border-black/40 my-[14px]"></div>
      <div className="flex gap-4 mb-[40px]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black/40 w-[10px] h-[10px] rounded-md mb-[10px]"></div>
          <div className="border-b-[.2px] bg-black/40 h-[100px] w-[1px]"></div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#709cef] font-[500] text-[12px]">
            February 12, 2024
          </span>
          <span className="font-[500]">Industrial Production</span>
          <span className="text-[12px] text-black/70">
            Index of Industrial Production (IIP) grew by 3.8% YoY in December, as compared to a 5.1% YoY growth in the same month last year. 
            Electricity has seen the slowest growth of 1.2% YoY in December as compared to 10.4% YoY growth in the same month last year.
          </span>
        </div>
      </div>
      <div className="flex gap-4 mb-[14px]">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-black/40 w-[10px] h-[10px] rounded-md mb-[10px]"></div>
          <div className="border-b-[.2px] bg-black/40 h-[100px] w-[1px]"></div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#709cef] font-[500] text-[12px]">
            February 12, 2024
          </span>
          <span className="font-[500]">CPI Inflation</span>
          <span className="text-[12px] text-black/70">
            India's Inflation eased to 5.1% in Jan, a 60 basis points decrese from the previous month. 
            Consumer Food Price Index (CFPI) declined from 9.5% in Dec 23 to 8.3%
          </span>
        </div>
      </div>
    </div>
  )
}
export default recents
