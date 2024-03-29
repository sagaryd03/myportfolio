import {Link} from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray=['a','g','a','r',',']
    const jobArray=[
    'I','','a','m','','a','','B.','T','e','c','h','','S','t','u','d','e','n','t','','f','r','o','m','','N','S','U','T',
    ]
    useEffect(() => {
        const idTimeOut = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        return () => clearTimeout(idTimeOut);
      }, [])

    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                 <span className={letterClass}>H</span>   
                 <span className={`${letterClass}_12`}>i,</span>   
                <br />
                <span className={`${letterClass}_13`}>I</span> 
                <span className={`${letterClass}_14`}>'m</span> 
                <img src={LogoTitle} alt="student" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={6} />
                </h1>
                <h2>Student / Gamer / Fun Lover</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home
