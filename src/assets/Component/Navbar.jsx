import { NavLink } from 'react-router-dom';
import myProfile from '../../../public/img/profile.jpg'
import { FaReact } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="fuhadShiblu_setNavScroll scroll h-[555px] p-5 fixed bg-[rgba(0,0,0,0.5)] overflow-y-scroll rounded-2xl flex flex-col items-center gap-10">
          <div className="flex flex-col gap-5 items-center">
            <img className='w-[150px] h-[150px] rounded-full' src={myProfile} alt="Profile" />
            <p className='text-xl flex items-center gap-1 font-bold text-white bg-[#03346E] p-1 rounded-lg'><FaReact className='text-[#4cbee0]'/>React Developer</p>
          </div>
          <ul className='flex flex-col items-center gap-5'>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>about</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>contact</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>projects</NavLink></li>
            <li><NavLink to="/faq" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>faq</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "font-semibold text-lg uppercase text-white bg-[#4B70F5] px-10 py-2 rounded-xl transition-all" : "font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all"}>blog</NavLink></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar

// font-semibold text-lg uppercase text-white hover:bg-[#4B70F5] px-10 py-2 rounded-xl transition-all