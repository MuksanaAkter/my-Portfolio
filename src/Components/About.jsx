import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'animate.css';
import AOS from 'aos';

import Lottie from "lottie-react";
import about from "../../public/Woman on Computer with Idea.json";
import { useEffect } from 'react';
import { Fade } from 'react-reveal';
<script>
    AOS.init();
  </script>

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  <script>
    AOS.init();
  </script>


    //const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fh260/background/20210424/pngtree-world-children-s-day-image_663804.jpg';
  return (
    <div id='about'  className='bg-slate-900 py-10'>
  
      <div data-aos="fade-up" className=" h-auto pb-10 py-10 px-5 ">
      <Fade buttom >
       <div className=" max-w-7xl mx-auto flex md:flex-row  gap-10 flex-col justify-center items-center">
       <div data-aos="fade-up"  className="bg-cover bg-center ">

       <Lottie animationData={about} loop={true} />;

        </div>
        <div data-aos="fade-up"   className="text-2xl px-4 md-px-10 text-white text-center md:text-left md:w-1/2 ">
        <h2 className='p-3 w-52  text-center mb-5 text-3xl  text-white font-bold  border-b-4  border-b-yellow-500 '>ABOUT ME</h2>
        <p className='text-base py-6 text-justify pr-5'>Hi, My name is Muksana Akter and I am a front-end developer. I am basically from Sylhet but I am currently live in Chittagong for study purpose. I am currently studying bsc in computer science engineering from International Islamic university. As a front-end developer, I have worked on many projects where I developed responsive and user-friendly interfaces using HTML, CSS, JavaScript etc. I also have experience with popular front-end frameworks like React. I have recently completed a Full stack Web Development course on Programing Hero. where I gained knowledge in both front-end and back- end technologies. I learned how to build dynamic website, handle server-side programming with Node.js Express.js, and work with databases like momgodb.</p>

        
        <a href="Muksana's_Resume.pdf" download="Muksana's_Resume.pdf" >
  <button className="btn text-white btn-primary mb-7 bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5">
  <FontAwesomeIcon icon={faDownload} /> Download Resume
  </button>
    
  </a> 

              
        </div>
       </div>
       </Fade>
      </div>
      
    </div>
  );
};

export default About;