import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar/Navbar"
import Footer from "../Component/Footer"

const LayoutOne = () => {
  return (
    <>
    <div className="container mx-auto rounded-tl-2xl rounded-bl-2xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="flex">
        <Navbar/>
        <Outlet/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default LayoutOne
