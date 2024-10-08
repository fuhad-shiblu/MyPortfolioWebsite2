import '../ContactCompo/ContactCompo.css'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_setContactScroll w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] rounded-2xl flex flex-col gap-[100px] p-5 overflow-y-scroll">
        <div className="flex flex-col gap-5">
            <h1 className='fuhadShiblu_aboutLine w-[260px] text-center relative text-[30px] uppercase font-bold text-white'>Get in touch</h1>
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
      </div>
    </>
  )
}

export default ContactCompo
