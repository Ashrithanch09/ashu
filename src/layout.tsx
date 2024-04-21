import { Outlet } from "react-router-dom"
import SideNav from "./components/sideNav"
import Header from "./components/header"

const Layout = () => {
   return (
      <div className="flex h-[100vh] w-[100vw]">
         <SideNav />
         <div className="flex flex-col basis-0 grow bg-indigo-50/[0.4]">
            <Header />
            <Outlet />
         </div>
      </div>
   )
}

export default Layout
