import React from 'react'
import {HiMail} from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaXingSquare} from 'react-icons/fa'
function Contact() {
  return (
    <footer className='contact' id='contact'>
        <h2 className='section--title'>Let's work together</h2>
        <p className='section--sub'></p>

        <ul class="contact--list">
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://github.com/tmlinh214" target="_blank" rel="noreferrer"><FaGithub className='contact--list--icon'/>Github</a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://www.linkedin.com/in/manh-linh-tran-2306a424b/" target="_blank" rel="noreferrer"><FaLinkedin className='contact--list--icon'/>Linkedin</a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="https://www.xing.com/profile/ManhLinh_Tran/cv" target="_blank" rel="noreferrer"><FaXingSquare className='contact--list--icon'/>Xing</a>
            </li>
            <li className="contact--list--item">
                <a className='contact--list--link' href="mailto:tmlinh214@gmail.com"><HiMail className='contact--list--icon'/>E-mail</a>
            </li>
        </ul>
    </footer>
  )
}

export default Contact