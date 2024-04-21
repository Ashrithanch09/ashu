import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaArrowAltCircleRight as RightIcon } from "react-icons/fa"
import { FaArrowAltCircleLeft as LeftIcon } from "react-icons/fa"
import banking from "../../public/assets/banking.jpg"
import business from "../../public/assets/business.png"
import capex from "../../public/assets/capex.png"
import chart from "../../public/assets/chart.avif"
import workingCapital from "../../public/assets/workingCapital.avif"

const Carousel = () => {
   const carouselData = [
      {
         img: business,
         title: "Business Strategies",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, architecto?",
      },
      {
         img: banking,
         title: "Banking Sector",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, asperiores.",
      },

      {
         img: capex,
         title: "Capex",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur.",
      },
      {
         img: workingCapital,
         title: "Working Capital",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, suscipit.",
      },
      {
         img: chart,
         title: "Statistics",
         description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
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
