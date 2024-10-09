import '../AboutCompo/AboutCompo.css'
import myProfile from '../../../../public/img/Profile.jpg'

const AboutCompo = () => {
  return (
    <>
      <div className="fuhadShiblu_setAboutScroll w-[4000px] h-[500px] bg-[rgba(0,0,0,0.5)] rounded-2xl flex flex-col gap-[100px] p-5 overflow-y-scroll">
        <div className="flex flex-col gap-[50px]">
          <h1 className="fuhadShiblu_aboutLine w-[200px] text-center relative text-[30px] uppercase font-bold text-white">about me</h1>
          <div className="flex items-center gap-[100px]">
            <p className='w-[555px] bg-[rgba(255,255,255,0.5)] text-justify p-5 rounded-xl text-lg font-light'>Hello! I’m a passionate front-end web developer with over three years of experience in creating dynamic and responsive user interfaces. Proficient in HTML, CSS, and JavaScript, I specialize in modern frameworks like React.js, utilizing tools such as React Redux for state management.<br /><br />I also have experience with Firebase for backend services and design frameworks like Bootstrap and Tailwind to enhance user experience. I love transforming ideas into interactive web applications and continuously strive to learn and implement the latest technologies in my projects. Let’s connect!</p>
            <img className='w-[300px] h-[300px] rounded-2xl' src={myProfile} alt="Profile" />
          </div>
        </div>
        <div className="flex flex-col gap-[50px]">
          <h2 className='fuhadShiblu_skillsLine relative uppercase font-bold text-white text-[30px] w-[200px] text-center'>my skills</h2>
          <div className="flex justify-between gap-10 flex-wrap">
            <div class="card">
              <p class="card-title">HTML</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>



            <div class="card">
              <p class="card-title">CSS</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>



            <div class="card">
              <p class="card-title">JavaScript</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>




            <div class="card">
              <p class="card-title">ReactJS</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>





            <div class="card">
              <p class="card-title">Bootstrap</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>




            <div class="card">
              <p class="card-title">Tailwind</p>
              <p class="small-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio officia deleniti. Expedita iste et illum, quaerat pariatur consequatur eum nihil itaque!</p>
              <div class="go-corner"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[50px]">
          <h3 className='fuhadShiblu_testimonialLine relative uppercase font-bold text-white text-[30px] w-[250px] text-center'>Testimonial</h3>
          <div className="flex flex-wrap gap-5 justify-center items-center bg-[rgba(0,0,0,0.25)] p-5 rounded-xl">
            <div className="flex flex-col gap-5 bg-white p-5 rounded-2xl items-center hover:scale-[1.1] transition-all">
              <img className='w-10 h-10' src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small_2x/user-icon-on-transparent-background-free-png.png" alt="Profile" />
              <p className='text-lg'>Name</p>
              <p>Review</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCompo
