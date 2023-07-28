import reactIcon  from '../assets/react-9d641e86.png';
import html from '../assets/html-92b76a73_2.png'
import css  from '../assets/css-79a7f026.png';
import bootstrap from '../assets/download.png'
import tailwind  from '../assets/tailwind-28e4d023.png';
import js from '../assets/JS.png'
import nodejs from '../assets/nodeJs-d83eb6dd.png'
import expressjs  from '../assets/express-removebg-preview.png';
import firebase from '../assets/firebase-e5a69ac5.png'
import mongodb from '../assets/Mongo.png'
import git from '../assets/git.png'
import figma from '../assets/figma.png'
import { useEffect } from 'react';
import AOS from 'aos';
import Tilt from 'react-parallax-tilt';
import 'aos/dist/aos.css';
import { Fade } from 'react-reveal';
const Skills = () => {

   
  useEffect(() => {
    AOS.init();
  }, []);

    return (
        <div className='bg-slate-800 py-10'>
          <Fade bottom >
            <div className="skills-section max-w-screen-2xl mx-auto grid-cols-5">
      <h2 className='p-5 w-52 mx-auto text-center mb-5 text-5xl  text-white font-bold  border-b-4  border-b-yellow-500 '>Skills</h2>
      <div className='grid gap-5 lg:grid-cols-6 md:grid-cols-3 grid-cols-2  mx-5 mb-10 '>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-5 ' src={html} alt="" />
          <p className='text-white text-center text-2xl font-bold pb-3'>HTML5</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-3' src={css} alt="" />
          <p className='text-white text-center text-2xl font-bold'>CSS</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-3' src={bootstrap} alt="" />
          <p className='text-white text-center text-2xl font-bold'>Bootstrap</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className='p-3' src={tailwind} alt="" />
          <p className='text-white text-center text-2xl font-bold'>Tailwind</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-3' src={js} alt="" />
          <p className='text-white text-center text-2xl font-bold'>JavaScript</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-5 ' src={reactIcon} alt="" />
          <p className='text-white text-center text-2xl pb-3 font-bold'>React</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left"  className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-3' src={nodejs} alt="" />
          <p className='text-white text-center text-2xl font-bold'>Node.Js</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left" className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className=' p-3' src={expressjs} alt="" />
          <p className='text-white text-center text-2xl pb-3 font-bold'>Express.Js</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left" className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className='p-3 w-full mb-4' src={firebase} alt="" />
          <p className='text-white text-center text-2xl font-bold'>Firebase</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left" className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className='w-full p-3' src={mongodb} alt="" />
          <p className='text-white text-center text-2xl pb-3 font-bold'>MongoDb</p>
        </div></Tilt>
        <Tilt><div data-aos="flip-left" className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className='w-full p-3' src={git} alt="" />
          <p className='text-white text-center text-2xl pb-3 font-bold'>GitHub</p>
        </div></Tilt>
        <Tilt>
        <div data-aos="flip-left" className=' bg-slate-900 shadow-2xl rounded-xl text-center p-3 m-3'>
          <img className='w-full md:h-32 mb-8 p-3' src={figma} alt="" />
          <p className='text-white text-center text-2xl pb-3 font-bold'>Figma</p>
        </div>
        </Tilt>
        
      </div>
      
    </div>
    </Fade>
        </div>
    )
}

export default Skills