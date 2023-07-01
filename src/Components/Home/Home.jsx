
import Banner from '../Banner'
import Navigation from '../Navigation'
import About from '../About'
import Skills from '../Skills'
import Contact from '../Conact'
import Footer from '../Footer'
import Projects from '../Projects'

const Home = () => {
    <script>
    AOS.init();
  </script>

    return (
        <div id="home" className='max-w-screen-xl mx-auto bg-slate-900 '>
            <Navigation></Navigation>
            <Banner></Banner>
             <div data-aos="fade-up">
             <About></About>
             </div>
            
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}

export default Home