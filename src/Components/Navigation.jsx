import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './project.css'
import { FaMonero } from "react-icons/fa"

const Navigation = () => {
  
    return (
        <div className="">
            <div className="navbar fixed z-10 bg-slate-900 text-white ">
  <div className="navbar-start">
    <div className="dropdown ">
      <label tabIndex={0} className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About Me</a></li>
      <li><a href="#project">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-2xl font-bold"> <FaMonero></FaMonero>Muksana</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-3 font-bold  ">

      <li><a className="hover:text-yellow-500" href="#home">Home</a></li>
      <li><a  className=" hover:text-yellow-500" href="#about">About Me</a></li>
      <li ><a className=" hover:text-yellow-500" href="#project">Projects</a></li>
      <li><a  className=" hover:text-yellow-500 active:bg-white" href="#contact">Contact</a></li>
    </ul>

  </div>
  <div className="navbar-end">
  <a href="Muksana's_Resume.pdf" download="Muksana's_Resume.pdf" >
  <button className="btn text-white btn-primary bg-gradient-to-r from-blue-600 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800 hover:to-blue-600 hover:border-white border border-transparent mr-5">
  <FontAwesomeIcon icon={faDownload} /> Download Resume
  </button>
    
  </a>
  
</div>
</div>
        </div>
    )
}

export default Navigation