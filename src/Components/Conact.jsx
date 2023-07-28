import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Lottie from "lottie-react";
import contact from "../../public/customer-support.json";
import { FaDiscourse } from 'react-icons/fa';
<script>
    AOS.init();
  </script>

const Contact = () => {
    <script>
    AOS.init();
  </script>
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_jybxuut', 'template_597wneu', form.current, 'R6IN47jL7oZFkCejF')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
       <div className='bg-slate-700'> 
         <div id='contact' data-aos="fade-up"  className='grid max-w-screen-2xl mx-auto md:grid-cols-2 gap-5 py-12  bg-slate-700'>
            <div>
                
                <div data-aos="fade-up"    className='p-8'>
                <Lottie animationData={contact} loop={true} />
                </div>
                <div>
                    {/* <FaLocationArrow></FaLocationArrow>
                    <FaLocationDot></FaLocationDot> */}
                </div>
            </div>
            <div data-aos="fade-up"    className='px-10'>
            <h2 className='p-3 w-52 mt-5 text-center mb-5 text-3xl  text-white font-bold  border-b-4  border-b-yellow-500 '>Contact</h2>
            <p className='text-2xl flex  items-center gap-3 font-semibold text-white py-6'> Get In Touch  <FaDiscourse></FaDiscourse></p>
            <form data-aos="fade-up"    className="flex flex-col" ref={form} onSubmit={sendEmail}>
      <label className=' text-white text-xl py-2'>Name</label>
      <input type="text"  placeholder='Enter Your Name' className="input input-md input-bordered bg-slate-800  w-full max-w-md "  name="name" />
      <label className=' text-white text-xl py-2'>Email</label>
      <input type="email" name="email"  placeholder='Enter Your Email'    className="input input-md bg-slate-800 input-bordered w-full max-w-md" />
      <label className=' text-white text-xl py-2'>Message</label>
      <textarea  className="textarea textarea-bordered w-full max-w-md bg-slate-800" placeholder="Enter Your Massage" name="message" />
      <input type="submit"  className="btn text-white w-40 my-3 px-4 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5" value="Send"  />
      {/* <button onClick={()=>{sendEmail}} className="btn text-white w-40 my-3 px-4 btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5">
      Send
</button> */}
    </form>
            </div>
        </div>
       </div>
    )
}

export default Contact