import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"
import Footer from "../Component/Footer"
import MobNav from "../Component/Navbar/MobNav/MobNav"

const LayoutOne = () => {
  return (
    <>
    <MobNav className='block md:hidden'/>
    <div className="container mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="md:flex">
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default LayoutOne
