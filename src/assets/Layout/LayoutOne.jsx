import { Outlet } from "react-router-dom"
import Navbar from "../Component/Navbar"
import Footer from "../Component/Footer"

const LayoutOne = () => {
  return (
    <>
    <div className="container mx-auto pt-5">
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
