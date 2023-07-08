import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact =() =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm=useRef()
 
useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])

const sendEmail=(e)=>{
    e.preventDefault()

    emailjs
    .sendForm(
    'service_7cpf3v9',
    'template_nduf0ab',
    refForm.current,
    'n8P2b5jJTbqZE9mPM',
    )
    .then(
        () =>{
            alert('Message successfully sent!')
            window.location.reload(false)
        },
        () =>{
            alert('Failed to send the message, please try again')
        }
    )
}

    return(
        <>
        <div className="container contact-page">
        <div className='text-zone'>
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','o','n','t','a','c','t',' ',' ','m','e']} 
            idx={15}
            />
        </h1>
        <p>
            I am interested in oppurtunities - especially ambitious or 
            large projects. However, if you have other request or question,
            don,t hesitate to contact me using below form wither.
        </p>
        <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input type="text" name="name" placeholder="Name" required />
                    </li>
                    <li className='half'>
                        <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        required 
                        />
                    </li>
                    <li>
                        <input
                         placeholder="Subject" 
                         type="text" 
                         name="subject"
                        required 
                        />
                    </li>
                    <li>
                        <textarea 
                        placeholder="Message" 
                        name="message"
                        required
                        ></textarea>
                    </li>
                    <li>
                       <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
            </form>
        </div>
        </div>
        <div className="info-map">
            Sagar Yadav
            <br/>
            India,
            <br/>
            dwarka sec-14,near radisson blue hotel <br/>
            Delhi <br/>
            <span>popeyesy5463@gmail.com</span>
        </div>
        <div className="map-wrap">
            <MapContainer center={[28.5964764,77.034089]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[28.5964764,77.034089]}>
                    <Popup>Sagar Lives here, come join me:</Popup>
                </Marker>

            </MapContainer>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact