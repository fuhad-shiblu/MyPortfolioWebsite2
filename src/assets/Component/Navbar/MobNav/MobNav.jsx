import { NavLink } from 'react-router-dom'
import '../MobNav/MobNav.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const MobNav = () => {
  return (
    <>
      <div className="fuhadShiblu_setMobScroll fixed w-full bg-[#024CAA] bottom-0 overflow-x-scroll block md:hidden z-10">
      <ul className="flex justify-between gap-5">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><FaHome className='text-[30px]'/>home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><FaUser className='text-[30px]'/>about</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><FaHeadphones className='text-[30px]'/>contact</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><GrProjects className='text-[30px]'/>projects</NavLink></li>
        <li><NavLink to="/products" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><AiOutlineProduct className='text-[30px]'/>products</NavLink></li>
        <li><NavLink to="/faq" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><FaQuestion className='text-[30px]'/>faq</NavLink></li>
        <li><NavLink to="/blog" className={({ isActive }) => isActive ? "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight" : "flex flex-col items-center gap-3 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] p-3 rounded-xl transition-all font-extralight"}><FaBlog className='text-[30px]'/>blog</NavLink></li>
      </ul>
    </div>
    </>
  )
}

export default MobNav
