
import Banner from '../Banner'
import Navigation from '../Navigation'
import About from '../About'
import Skills from '../Skills'
import Contact from '../Conact'
import Footer from '../Footer'
import Projects from '../Projects'

const Home = () => {
  

    return (
        <div id="home" className=' '>
           <div className='bg-slate-900'>
           <Navigation></Navigation>
           </div>
            <Banner></Banner>
            
             <About></About>
            
            
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home