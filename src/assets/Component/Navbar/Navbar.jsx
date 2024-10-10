import { Link, NavLink } from 'react-router-dom';
import myProfile from '../../../../public/img/Profile.jpg'
import { FaReact } from "react-icons/fa";
import '../Navbar/Navbar.css'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="fuhadShiblu_setNavScroll scroll h-[500px] p-5 fixed bg-[rgba(0,0,0,0.5)] overflow-y-scroll rounded-2xl flex flex-col items-center gap-10 hidden md:inline-flex">
          <div className="flex flex-col gap-5 items-center">
            <img className='w-[150px] h-[150px] rounded-full' src={myProfile} alt="Profile" />
            <p className='text-xl flex items-center gap-1 font-bold text-white bg-[#03346E] p-1 rounded-lg'><FaReact className='text-[#4cbee0]'/>React Developer</p>
          </div>
          <ul className='flex flex-col items-center gap-5'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><FaHome className='text-xl'/>home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><FaUser className='text-xl'/>about</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><FaHeadphones className='text-xl'/>contact</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><GrProjects className='text-xl'/>projects</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><AiOutlineProduct className='text-xl'/>products</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><FaQuestion className='text-xl'/>faq</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "flex items-center gap-1 font-semibold text-sm uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "flex items-center gap-1 font-semibold text-sm uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}><FaBlog className='text-xl'/>blog</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar