import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import myProfile from '../../../../public/img/Profile.jpg'
import '../HomeCompo/HomeCompo.css'

const HomeCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_bs w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] overflow-hidden rounded-2xl items-center flex pl-5 justify-between pr-5">
        <div className="flex flex-col gap-[100px] items-center">
            <h1 className="font-bold text-[30px] text-white text-center">Hello, I'm Fuhad Hasan Shiblu <span className="block">I'm a Front-End Web Developer</span></h1>
            <Link className="text-xl text-[#C63C51] bg-[#6EACDA] p-5 font-bold rounded-xl border-2 border-solid border-[#6EACDA] hover:bg-[rgba(110,171,218,0.5)] transition-all"  download='resume' to='#'>Download CV</Link>
            <div className="flex gap-10 items-center text-2xl text-[#03AED2]">
                <Link className='hover:text-[rgba(91,187,255,0.5)] transition-all active:text-[#03346E]' to='#'><FaFacebook/></Link>
                <Link className='hover:text-[rgba(91,187,255,0.5)] transition-all active:text-[#03346E]' to='#'><FaInstagram/></Link>
                <Link className='hover:text-[rgba(91,187,255,0.5)] transition-all active:text-[#03346E]' to='#'><FaYoutube/></Link>
                <Link className='hover:text-[rgba(91,187,255,0.5)] transition-all active:text-[#03346E]' to='#'><FaLinkedin/></Link>
                <Link className='hover:text-[rgba(91,187,255,0.5)] transition-all active:text-[#03346E]' to='#'><FaGithub/></Link>
            </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="fuhadShiblu_animated w-[360px] h-[360px] bg-black rounded-2xl flex flex-col justify-center items-center">
              <img className="w-[350px] h-[350px] rounded-2xl" src={myProfile} alt="Profile" />
          </div>
          <Link className="text-white uppercase font-bold text-xl bg-[#266294] p-5 rounded-xl hover:bg-[rgba(199,108,66,0.5)] transition-all active:scale-[1.1]" to='/contact'>hire me</Link>
        </div>
      </div>
    </>
  )
}

export default HomeCompo
