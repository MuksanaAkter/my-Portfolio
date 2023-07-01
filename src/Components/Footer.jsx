import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-7 bg-slate-900 text-white text-2xl ">
  <div>
    <div className="grid grid-flow-col gap-4">
    <a className='hover:text-yellow-400' href="https://www.facebook.com/muksana.akterpopy"><FaFacebook></FaFacebook> </a> 
<a className='hover:text-yellow-400' href="https://www.linkedin.com/in/muksana-akter-878248279"><FaLinkedin></FaLinkedin> </a>
 <a className='hover:text-yellow-400' href="https://github.com/MuksanaAkter"><FaGithub></FaGithub></a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
  </div>
</footer>
        </div>
    )
}

export default Footer