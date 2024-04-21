const Card = ({
   title,
   message,
   icon,
}: {
   title: string
   message: string
   icon: JSX.Element
}) => {
   return (
      <div className="h-[150px] w-[200px] border shadow-md p-4 flex flex-col justify-center rounded-lg gap-2 bg-white -translate-y-8">
         {icon}
         <h1 className="font-semibold">{title}</h1>
         <p className="text-sm">{message}</p>
      </div>
   )
}

export default Card
