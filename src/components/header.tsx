import { FaRegCalendarCheck as CalendarIcon } from "react-icons/fa6"
import { MdAccessTime as TimeIcon } from "react-icons/md"
import { GoBell as BellIcon } from "react-icons/go"

const Header = () => {
   const date = new Date()
   const day = date.toLocaleDateString(undefined, { day: "numeric" })
   const month = date.toLocaleDateString(undefined, { month: "long" })
   const time = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
   })
   const today = `${day} ${month}`
   return (
      <div className="flex justify-between items-center px-7 pt-3 pb-20 bg-indigo-950 text-white">
         <div className="flex flex-col">
            <span className="text-lg ">Good Afternoon, Akshay</span>
            <span className="text-sm text-neutral-400">
               You are subscribed to Retail Plan
            </span>
         </div>
         <div className="flex gap-5">
            <div className="flex items-center gap-1">
               <CalendarIcon className="h-[22px] w-[22px]" />
               Today, {today}
            </div>
            <div className="flex items-center gap-1">
               <TimeIcon className="h-[22px] w-[22px]" />
               {time}
            </div>
            <BellIcon className="h-[25px] w-[25px] ml-16 animate-pulse" />
         </div>
      </div>
   )
}

export default Header
