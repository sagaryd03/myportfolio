import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGit, faGithub, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import {Loader} from 'react-loaders'

const About = () =>{
const [letterClass, setLetterClass] = useState('text-animate')
useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])
  
    return(
        <>
       <div className="container about-page">
        <div className="text-zone">
            <h1>
             <AnimatedLetters
                letterClass={letterClass}
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
             />
            </h1>
            <p>
            I'm very ambitious student looking for a role in established
            IT company with the oppurtunity to work with the latest 
            technologies on challenging and diverse projects.
            </p>
            <p>
             I'm quiet confident,naturally curious, and perpetually working on
             improving my skills with time.   
            </p>
            <p>
             If I need to define myself in one sentence that would be a family person,
             a sports fanatic, and tech-obsessed!!!
            </p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face2">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face3">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face4">
                <FontAwesomeIcon icon={faJsSquare} color="#F0DB4F" />
                </div>
                <div className="face5">
                <FontAwesomeIcon icon={faGit} color="#F1502F" />
                </div>
                <div className="face6">
                <FontAwesomeIcon icon={faNodeJs} color="#215732" />
                </div>
            </div>
        </div>
       </div> 
        <Loader type="pacman" />
       </>
    )
}

export default About