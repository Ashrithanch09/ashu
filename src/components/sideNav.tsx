import {
   FaDesktop as DesktopIcon,
   FaRegCalendarCheck as CalendarIcon,
   FaHeadphones as HeadphoneIcon,
} from "react-icons/fa"
import { BsQuestionCircle as QuestionIcon } from "react-icons/bs"
import { HiMiniCurrencyDollar as DollarIcon } from "react-icons/hi2"
import {
   IoSettingsSharp as SettingIcons,
   IoSearch as SearchIcon,
} from "react-icons/io5"
import { NavLink } from "react-router-dom"

const navItems = [
   { path: "/search", Icon: SearchIcon },
   { path: "/", Icon: DesktopIcon },
   { path: "/question", Icon: QuestionIcon },
   { path: "/calendar", Icon: CalendarIcon },
   { path: "/money", Icon: DollarIcon },
   { path: "/audio", Icon: HeadphoneIcon },
]

const SideNav = () => {
   return (
      <div className="w-[70px] h-screen py-5 px-4 bg-white">
         <div className="flex flex-col h-full justify-between items-center">
            <div className="flex flex-col gap-20">
               <span className="rounded-full bg-blue-950 text-white px-2 text-xl">
                  P
               </span>
               <div className="flex flex-col justify-center items-center gap-8">
                  {navItems.map(({ path, Icon }, index) => (
                     <NavLink
                        key={index}
                        to={path}
                        className={({ isActive }) =>
                           isActive ? "text-black/[0.8]" : "text-black/[0.5]"
                        }
                     >
                        <Icon className="h-[25px] w-[25px] cursor-pointer transition-all  hover:text-neutral-500 active:scale-90 hover:scale-110" />
                     </NavLink>
                  ))}
               </div>
            </div>
            <SettingIcons className="h-[25px] w-[25px] active:scale-90 hover:scale-105 transition-all cursor-pointer" />
         </div>
      </div>
   )
}

export default SideNav
