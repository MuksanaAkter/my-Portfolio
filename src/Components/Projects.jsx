import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import toy from '../assets/toy-house.jpg'
import chef from '../assets/Korean Kitchen.jpg'
import music from '../assets/Melody Master.jpg'
import './project.css'
import Tilt from 'react-parallax-tilt';
import { FaCode, FaLink } from 'react-icons/fa';
import { Fade } from 'react-reveal';
<script>
    AOS.init();
  </script>

const Projects = () => {

    <script>
    AOS.init();
  </script>

    // class App extends React.Component {
        const [isFlipped , setIsFlipped] =useState(false)
        const [isFlippeds , setIsFlippeds] =useState(false)
        const [isFlippedss , setIsFlippedss] =useState(false)
    // super();
    //   this.state = {
    //   isFlipped: false
    // };
    // this.handleClick = this.handleClick.bind(this);
    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    const handleClicks = () => {
        setIsFlippeds(!isFlippeds);
    }
    const handleClickss = () => {
        setIsFlippedss(!isFlippedss);
    }
  

//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }
    return (
      <Fade>
        <div id="project" data-aos="fade-up" className="bg-slate-900 py-16 text-white">
            <div>
            <h2 className='p-5 w-52 mx-auto text-center mb-5 text-5xl  text-white font-bold  border-b-4  border-b-yellow-500 '>Projects</h2>
            </div>
            <div className='bg-slate-900 max-w-screen-2xl mx-auto grid md:grid-cols-3 px-3 items-center gap-5 justify-items-center'>
            <Tilt> <div className='p-3 bg-slate-600 my-8 shadow-2xl'>
                    <Fade>
                     
                        <ReactCardFlip data-aos="fade-up"   isFlipped={isFlipped} flipDirection="vertical">
       
       <div   >
       <p className='font-bold text-white py-4 text-lg'>Toy Market <br /> (A toy house full of animal toys)</p>
      <div  className='image-container'>
       
         <img  className="w-full" src={toy} alt="" />
      </div>
      <div className='flex items-center justify-between gap-3 ml-6 mr-5 my-4'>
      <a href="https://toy-house-7db48.web.app/"><p className='flex gap-2 items-center hover:text-yellow-400'><FaLink></FaLink> Live Link</p></a>
   
   <a href="https://github.com/MuksanaAkter/toy-house-client"> <p className='flex gap-2 items-center hover:text-yellow-400' ><FaCode></FaCode>Code</p></a>
       <button className="btn text-white w-30 my-3 px-2 py-2 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent " onClick={handleClick}>View detail</button>
      </div>
      
       </div>
   

      <div>
      <h2 className='text-xl font-bold py-4'>Toy Market <br /> (A toy house full of animal toys)</h2>
      <p>
        <ul className='list-disc pl-8 pb-2'>
            <li>This project is mainly focused on firebase authentication. Users can login with google, email-password or can sign up with email.</li>
            <li className='py-5'>There are many animal toys. They can see toys and can add their own toys for sell.</li>
            <li className=''>This project is database connected and we are using CURD operation in this project.User can add , delete and update toys.</li>
            </ul>
</p>
       <button className="btn my-5 text-white w-30  px-5 py-2 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5" onClick={handleClick}>Back</button>
      </div>
  
   </ReactCardFlip>
                    
                
   </Fade>
                </div>
                </Tilt>
                <Tilt>
     <div className='p-3 bg-slate-600 my-8 shadow-2xl' >
     
     <ReactCardFlip data-aos="fade-up"   isFlipped={isFlippeds} flipDirection="vertical">
       
       <div  >
       <p className='font-bold text-white py-4 text-lg'>Korean kitchen <br /> (Korean food and Chef details)</p>
      <div  className='image-container'>
       
         <img  className="w-full" src={chef} alt="" />
      </div>
      <div className='flex items-center justify-between gap-3 ml-6 mr-5 my-4'>
      <a href="https://chef-recipe-hunter-3c32e.web.app/home"><p className='flex gap-2 items-center hover:text-yellow-400'><FaLink></FaLink> Live Link</p></a>
   
   <a href="https://github.com/MuksanaAkter/Chef-recipe-client"> <p className='flex gap-2 items-center hover:text-yellow-400' ><FaCode></FaCode>Code</p></a>
       <button className="btn text-white w-30 my-3 px-2 py-2 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent "  onClick={handleClicks}>View detail</button>
      </div>
      
       </div>
   

      <div >
      <h2 className='text-xl font-bold py-5'>Korean kitchen <br /> (Korean food and Chef details)</h2>
      <p>
        <ul className='list-disc pl-8 pb-2'>
            <li>This project is mainly focused on firebase authentication. Users can login with google, email-password or can sign up with email.</li>
            <li className='py-5'>Information page is Private Route so,to go this page they have to login first.</li>
            <li className=''>This website is korean food base website there are a review section and popular food and restaurants section.</li>
            </ul>
</p>
       <button className="btn my-5 text-white w-30  px-5 py-2 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5"  onClick={handleClicks}>Back</button>
      </div>
  
   </ReactCardFlip>
     </div>
     </Tilt>
     <Tilt>
      <div className='p-3 bg-slate-600 my-8 shadow-2xl' >
        <Tilt></Tilt>
        <ReactCardFlip data-aos="fade-up"  isFlipped={isFlippedss} flipDirection="vertical">
       
       <div   >
       <p className='font-bold text-white py-4 text-lg'>Melody Master <br /> (Learning Musical Instruments)</p>
      <div  className='image-container'>
       
         <img  className="w-full" src={music} alt="" />
      </div>
      <div className='flex items-center justify-between gap-3 ml-6 mr-5 my-4'>
    <a href="https://music-instruments-a7055.web.app/"><p className='flex gap-2 items-center hover:text-yellow-400'><FaLink></FaLink> Live Link</p></a>
   
<a href="https://github.com/MuksanaAkter/summer-camp-client"> <p className='flex gap-2 items-center hover:text-yellow-400' ><FaCode></FaCode>Code</p></a>
       <button className="btn text-white w-30 my-3 px-2 py-2 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent "  onClick={handleClickss}>View detail</button>
      </div>
      
       </div>
   

      <div>
      <h2 className='text-xl font-bold py-5'>Melody Master <br /> (Learning Musical Instruments)</h2>
      <p>
        <ul className='list-disc pl-8 pb-4'>
            <li> Users admin & instructor can login with google, email-password or can sign up with email.</li>
            <li className='py-6'>There are 3 dashboard - Admin, Student, Instructor. Admin can handle all users & instructor can add classes</li>
            <li className='pb-3'>For joining class student have to pay for the class it will show in enrolled classes.</li>
            </ul>
</p>
       <button className="btn my-5 text-white w-30  px-5 py-3  btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5"  onClick={handleClickss}>Back</button>
      </div>
  
   </ReactCardFlip></div></Tilt>
            </div>
            
        </div>
        </Fade>
    )
}

export default Projects