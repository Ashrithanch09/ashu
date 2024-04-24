import Card from "./card"
import { FaRegCreditCard as CardIcon } from "react-icons/fa6"
import Carousel from "./carousel"
import Recents from "./recents"

const Home = () => {
   return (
      <div className="flex flex-col h-[100%] w-[100%]">
         <div className="flex items-center justify-between gap-2 px-5 h-[100px]">
            <Card
               icon={<CardIcon className="h-[25px] w-[25px] text-yellow-500" />}
               title="My Saved Library 1"
               message={"dd-mm-yyyy"}
            />
            <Card
               icon={<CardIcon className="h-[25px] w-[25px] text-red-500" />}
               title="My Saved Library 2"
               message={"dd-mm-yyyy"}
            />
            <Card
               icon={<CardIcon className="h-[25px] w-[25px] text-blue-500" />}
               title="My Saved Library 3"
               message={"dd-mm-yyyy"}
            />
            <Card
               icon={<CardIcon className="h-[25px] w-[25px] text-green-500" />}
               title="My Saved Library 4"
               message={"dd-mm-yyyy"}
            />
            <Card
               icon={<CardIcon className="h-[25px] w-[25px] text-orange-500" />}
               title="My Saved Library 5"
               message={"dd-mm-yyyy"}
            />
         </div>
         <div className="flex gap-5 basis-0 grow p-5 w-[100%]">
            <Carousel />
            <Recents />
         </div>
      </div>
   )
}

export default Home
