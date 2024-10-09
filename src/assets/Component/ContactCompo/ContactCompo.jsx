import '../ContactCompo/ContactCompo.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_setContactScroll w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] rounded-2xl flex flex-col gap-[100px] p-5 overflow-y-scroll">
        <div className="flex flex-col gap-5">
            <h1 className='fuhadShiblu_contactLine w-[260px] text-center relative text-[30px] uppercase font-bold text-white'>Get in touch</h1>
            <p className='text-white font-semibold text-center'>I’d love to hear from you! Whether you have questions about my work, want to discuss a potential project, or just want to say hello, feel free to reach out. You can contact me through the form below or connect with me on social media. I’m looking forward to connecting and exploring new opportunities together!</p>
        </div>
        <div className="flex justify-between">
            <div className="flex items-center gap-5 bg-[rgba(255,255,255,0.5)] p-5 rounded-xl">
                <IoPhonePortraitOutline className='text-[50px]'/>
                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-sm uppercase font-bold'>Phone</h2>
                    <p className='text-sm font-light'>+8801*********</p>
                </div>
            </div>
            <div className="flex items-center gap-5 bg-[rgba(255,255,255,0.5)] p-5 rounded-xl">
                <FaLocationDot className='text-[50px]'/>
                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-sm uppercase font-bold'>Location</h2>
                    <p className='text-sm font-light'>Dhaka-1230, Bangladesh</p>
                </div>
            </div>
            <div className="flex items-center gap-5 bg-[rgba(255,255,255,0.5)] p-5 rounded-xl">
                <MdEmail className='text-[50px]'/>
                <div className="flex flex-col items-center gap-5">
                    <h2 className='text-sm uppercase font-bold'>e-mail</h2>
                    <p className='text-sm font-light'>fuhadshiblu.web@gmail.com</p>
                </div>
            </div>
        </div>
        <p className='text-center text-[50px] text-white font-bold'>or</p>
        <form className='p-10 rounded-xl'>
          <div className="flex justify-center gap-[100px] flex-wrap">
            <div className="flex flex-col gap-5">
              <label className='text-lg font-bold text-white'>Name</label>
              <input className='w-[350px] h-[50px] rounded-lg pl-5 bg-transparent border-b-[1px] border-solid border-white placeholder:text-[#c9c9c9] placeholder:font-semibold' type="text" placeholder='Enter your name'/>
            </div>
            <div className="flex flex-col gap-5">
              <label className='text-lg font-bold text-white'>E-Mail</label>
              <input className='w-[350px] h-[50px] rounded-lg pl-5 bg-transparent border-b-[1px] border-solid border-white placeholder:text-[#c9c9c9] placeholder:font-semibold' type="text" placeholder='Enter your e-mail'/>
            </div>
            <div className="flex flex-col gap-5">
              <label className='text-lg font-bold text-white'>Subject</label>
              <input className='w-[800px] h-[50px] rounded-lg pl-5 bg-transparent border-b-[1px] border-solid border-white placeholder:text-[#c9c9c9] placeholder:font-semibold' type="text" placeholder='Enter your subject'/>
            </div>
            <div className="flex flex-col gap-5">
              <label className='text-lg font-bold text-white'>Messages</label>
              <textarea className='w-[800px] h-[200px] rounded-lg p-5 bg-transparent border-[1px] border-solid border-white placeholder:text-[#c9c9c9] placeholder:font-semibold' type="text" placeholder='Enter your Messages'/>
            </div>
            <button className='bg-black text-white px-[350px] py-5 rounded-xl text-xl font-bold uppercase active:scale-[1.1] transition-all hover:bg-[#030637] active:bg-[#750E21]'>Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ContactCompo
