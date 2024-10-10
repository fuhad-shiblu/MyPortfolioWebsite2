import '../ProjectsCompo/ProjectsCompo.css'
import ardoxSSimg from '../../../../public/img/ARDOXSS.png'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";


const ProjectsCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_setProjectsScroll w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] rounded-2xl flex flex-col gap-[100px] p-5 overflow-y-scroll">
        <div className="flex flex-col gap-10">
            <h1 className='fuhadShiblu_projectsLine w-[250px] text-center relative text-[30px] uppercase font-bold text-white'>My Projects</h1>
            <div className="flex flex-wrap gap-5">
                <div className="w-[250px] h-[200px] fuhadShiblu_ARlss rounded-xl overflow-hidden relative m-5 hover:scale-[1.1] transition-all">
                    <Link className='fuhadShiblu_ARlpv w-[150px] h-[50px] rounded-xl absolute bottom-[-100px] left-[50%] translate-x-[-50%] text-white justify-center text-lg font-bold flex items-center gap-1 transition-all active:scale-[1.1]' to='https://ardox-demo-web-with-html-fuhad-shiblu.vercel.app/' target='_blank'><FaEye/>Live Preview</Link>
                </div>



                <div className="w-[250px] h-[200px] fuhadShiblu_Frlss rounded-xl overflow-hidden relative m-5 hover:scale-[1.1] transition-all">
                    <Link className='fuhadShiblu_Frlpv w-[150px] h-[50px] rounded-xl absolute bottom-[-100px] left-[50%] translate-x-[-50%] text-white justify-center text-lg font-bold flex items-center gap-1 transition-all active:scale-[1.1]' to='https://fresh-demo-web-with-html-fuhad-shiblu.vercel.app/' target='_blank'><FaEye/>Live Preview</Link>
                </div>
            </div>
            {/* <div className="w-full h-[350px] flex justify-center items-center">
                <p className='text-[rgba(255,255,255,0.5)] font-light'>Available projects will be shown here</p>
            </div> */}
        </div>
      </div>
    </>
  )
}

export default ProjectsCompo