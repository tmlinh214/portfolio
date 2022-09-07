/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa'

function Projects() {
  return (
    <section className='projects' id="projects">
        <h2 className='section--title section--title--projects'> My Projects</h2>
        <div className='projects--container'>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Quote Machine</h3>
                <div className='projects--img--container'>
                    <img src="../images/quote-machine.png" alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>I completed this project using React with functional components and useEffect.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/quote-machine" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/quote-machine/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Tenzies Game</h3>
                <div className='projects--img--container'>
                    <img src="../images/tenzies.png" alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>I built this arcade game as final project of the React course from Scrimba. A counter was added by me to determine the number of rolls.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/tenzies" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/tenzies/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Basic Calculator</h3>
                <div className='projects--img--container'>
                    <img src="../images/calculator.png" alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>A calculator with basic operators built with React.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/calculator" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/calculator/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Wallpaper Shop</h3>
                <div className='projects--img--container'>
                    <img src="../images/wallpaper.png" alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>This project was built as part of the advanced React module on Scrimba. I changed the images so that the shop will now sell wallpaper images.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/wallpaper-shop" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/wallpaper-shop" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Fonts Pangrams</h3>
                <div className='projects--img--container'>
                    <img src="../images/pangrams.png" alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>A simple HTML/CSS site containing various free fonts.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/fonts-pangrams" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/fonts-pangrams/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <a href="#" className='btn'>See more</a> */}
        
    </section>
  )
}

export default Projects