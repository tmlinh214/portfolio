import React from 'react'
import {HiMail} from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaXingSquare} from 'react-icons/fa'
function Contact() {
  return (
    <footer className='contact' id='contact'>
        <h2 className='section--title'>Let's work together!</h2>
        <p className='section--sub'></p>

        <ul class="contact--list">
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://github.com/tmlinh214" target="_blank" rel="noreferrer"><span><FaGithub className='contact--list--icon'/>Github</span></a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://www.linkedin.com/in/manh-linh-tran-2306a424b/" target="_blank" rel="noreferrer"><span><FaLinkedin className='contact--list--icon'/>Linkedin</span></a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://www.xing.com/profile/ManhLinh_Tran/cv" target="_blank" rel="noreferrer"><span><FaXingSquare className='contact--list--icon'/>Xing</span></a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="mailto:tmlinh214@gmail.com"><span><HiMail className='contact--list--icon'/>E-mail</span></a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact