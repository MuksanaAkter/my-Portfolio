import 'animate.css';
import backgroundImageUrl from "../assets/bg3.jpg";
import {  FaArrowRight, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Cursor, Typewriter } from 'react-simple-typewriter'
import wave from "../assets/waves-removebg-preview.png";
import Marquee from 'react-fast-marquee';
import Lottie from "lottie-react";
import banner from "../../public/Web-development.json";
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

import { Link } from 'react-scroll'

const Banner = () => {


    //const backgroundImageUrl = 'https://png.pngtree.com/thumb_back/fh260/background/20210424/pngtree-world-children-s-day-image_663804.jpg';
  return (
    <div>
      <div
        className="bg-cover bg-center h-auto pb-10 py-10 overflow-x-hidden "
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
       <div className=" max-w-screen-2xl mx-auto flex md:flex-row flex-col justify-center items-center">
        <div className="text-2xl mx-5 pt-10 text-white text-center md:text-left md:w-1/2 animate__animated animate__fadeInLeft">
            <div className='flex flex-row my-3 py-2 justify-center md:justify-start'>
            <h3 style={{ fontFamily: 'Lobster Two, sans-serif' }} className="text-4xl text-center">
            Hi </h3> <img className='h-10' src={wave} alt="" />
            </div>
            <h2 className='font-bold md:text-4xl'> I'm Muksana Akter</h2>
            <h4 className='font-bold md:text-4xl my-3'>I am a <span className='text-yellow-400 font-bold'> <Typewriter words={['WEB DEVELOPER', 'FRONT_END DEVELOPER', 'MERN DEVELOPER']} loop cursor={<Cursor />} /></span>
            
            </h4>

        <h1 className="text-xl pb-5 text-justify">Welcome to my portfolio! I have a strong set of technical skills, a problem-solving mindset, great teamwork abilities, a love for learning, keen attention to detail, and a strong commitment to my work.</h1>
      
<div className='flex gap-4 items-center'>
<button className="btn text-white  my-3 px-4 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5">
  
  <Link to="contact" spy={true} smooth={true} offset={50} duration={5000}>
  Get In Touch </Link> <FaArrowRight></FaArrowRight>
        
</button>

<a className='hover:text-yellow-400' href="https://www.facebook.com/muksana.akterpopy" target='blank' ><FaFacebook></FaFacebook> </a> 
<a className='hover:text-yellow-400' href="https://www.linkedin.com/in/muksana-akter-878248279" target='blank'><FaLinkedin></FaLinkedin> </a>
 <a className='hover:text-yellow-400' href="https://github.com/MuksanaAkter" target='blank'><FaGithub></FaGithub></a></div>                
        </div>
        
                
              
        <div className="bg-cover bg-center animate__animated   animate__fadeInRight">

        <Lottie className='w-96 m-10' animationData={banner} loop={true} />;

        </div>
       </div>
      </div>
      <Marquee className='bg-black'>
        <div className=' bg-black py-3  text-white flex gap-3'>
        <div className='flex gap-3 px-3 items-center'>
          <img className='w-14 text-xl' src={html} alt="" /><span>HTML</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-14 text-xl' src={css} alt="" /><span>CSS</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-14 text-xl' src={js} alt="" /><span>JavaScript</span>
        </div> 
        <div className='flex gap-3 items-center'>
          <img className='w-14 text-xl' src={bootstrap} alt="" /><span>Bootstrap</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-14 text-xl' src={tailwind} alt="" /><span>Tailwind</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={reactIcon} alt="" /><span>React</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={firebase} alt="" /><span>Firebase</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={nodejs} alt="" /><span>Node.Js</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={expressjs} alt="" /><span>Express.Js</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={mongodb} alt="" /><span>Mongodb</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={git} alt="" /><span>GitHub</span>
        </div>
        <div className='flex gap-3 items-center'>
          <img className='w-16 text-xl' src={figma} alt="" /><span>Figma</span>
        </div>
        </div>
</Marquee>
    </div>
  );
};

export default Banner;