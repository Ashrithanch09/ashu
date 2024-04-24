import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaArrowAltCircleRight as RightIcon } from "react-icons/fa"
import { FaArrowAltCircleLeft as LeftIcon } from "react-icons/fa"
import market from "../../public/assets/market.png"
import Capex from "../../public/assets/Capex.png"
import Taxes from "../../public/assets/Taxes.png"
import monitor from "../../public/assets/monitor.png"

const Carousel = () => {
   const carouselData = [
      {
         img: market,
         title: "State of Markets",
         description:
            "The market capitalisation of Indian stocks crossed US$4.5 trillion in January",
      },
      {
         img: Capex,
         title: "The Central Capex Surge",
         description:
            "The last few years have seen a very substantial step up in capital",
      },

      {
         img: Taxes,
         title: "Direct Taxes and Business Cycle",
         description:
            "The shore of direct taxes in total tax collections of the Central government.",
      },
      {
         img: monitor,
         title: "Banking Monitor",
         description:
            "Credit growth has remained broadly stable in recent weeks at just",
      },
   ]

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const NextArrow = (props: any) => {
      return (
         <div className={props.className} onClick={props.onClick}>
            <RightIcon className="h-[25px] w-[25px] text-black -translate-y-[25px]" />
         </div>
      )
   }
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const PreviousArrow = (props: any) => {
      return (
         <div className={props.className} onClick={props.onClick}>
            <LeftIcon className="h-[25px] w-[25px] text-black -translate-y-[25px] " />
         </div>
      )
   }

   const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
   }
   return (
      <div className="bg-white rounded-lg shadow-md h-[100%] w-[70vw] px-10 py-10">
         <Slider {...settings}>
            {carouselData.map((item, index) => (
               <CarouselCard
                  key={index}
                  img={item.img}
                  title={item.title}
                  description={item.description}
               />
            ))}
         </Slider>
      </div>
   )
}

const CarouselCard = ({
   img,
   title,
   description,
}: {
   img: string
   title: string
   description: string
}) => {
   return (
      <div className="flex flex-col justify-evenly items-center mx-auto w-[220px] h-[350px] border rounded-xl shadow-md p-2 mb-1">
         <img
            src={img}
            alt={title}
            className="h-[150px] w-[220px] rounded-lg mx-auto"
         />
         <div className="flex flex-col gap-4 p-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="line-clamp-3 text-neutral-500">{description}</p>
         </div>
      </div>
   )
}

export default Carousel
