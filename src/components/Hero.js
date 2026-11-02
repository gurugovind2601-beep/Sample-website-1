import ProfileImage from '../assets/profile.avif'
import '../style/Hero.css'

const Hero=()=>{
    return(
        <section className='Hero'>
            <img src={ProfileImage} alt='profile'/>
            <h1>Hello, I'm Guru Govind</h1>
            <p>Python Full Stack Developer</p>
            <button>Download Resume</button>
        </section>
    )
}
export default Hero