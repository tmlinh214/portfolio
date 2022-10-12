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
                    <img src={process.env.PUBLIC_URL + "/images/quote-machine.png"} alt="" className='projects--img'/>
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
                    <img src={process.env.PUBLIC_URL + "/images/tenzies.png"} alt="" className='projects--img'/>
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
                    <img src={process.env.PUBLIC_URL + "/images/calculator.png"} alt="" className='projects--img'/>
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
                <h3 className='projects--item--title'>Movie list</h3>
                <div className='projects--img--container'>
                    <img src={process.env.PUBLIC_URL + "/images/movie-list.png"} alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>This project was built with React and styled with Bulma CSS. You can add/remove movies or update information of a movie in this list. You can also search for a movie by title or genre.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/movie-list" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/movie-list" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Fonts Pangrams</h3>
                <div className='projects--img--container'>
                    <img src={process.env.PUBLIC_URL + "/images/pangrams.png"} alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>A simple HTML/CSS site containing various free fonts.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/fonts-pangrams" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/fonts-pangrams/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='projects--item'>
                <h3 className='projects--item--title'>Facts and Ideas</h3>
                <div className='projects--img--container'>
                    <img src={process.env.PUBLIC_URL + "/images/facts.png"} alt="" className='projects--img'/>
                    <div className='projects--img--layer'>
                        <p className='projects--img--text'>A time sensitive site using data from some APIs.</p>
                        <div className='projects--img--layer--icon--layout'>
                            <a href="https://github.com/tmlinh214/facts-ideas" className='projects--link' target="_blank" rel="noreferrer"><FaGithub className='projects--img--layer--icon'/></a>
                            <a href="https://tmlinh214.github.io/facts-ideas/" className='projects--link' target="_blank" rel="noreferrer"><FaExternalLinkAlt className='projects--img--layer--icon'/></a>
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