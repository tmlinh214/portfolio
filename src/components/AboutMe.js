import React from 'react'

function AboutMe() {
  return (
    <section className='about' id='about'>
        <h2 className='section--title section--title--about'>About me</h2>
        <p className='section--sub section--sub--about'>a self taught frontend developer</p>

        <div className='about--body'>
            <p>I recently graduated from Leibniz University Hannover after completing Bachelor of Science in Mechatronics. When learning basic programming module i found out a new passion: coding. Unfortunately, my major doesn't really focus on this field.</p>
            <p>So i started my journey as a web developer while still writing my thesis by taking online courses. Let's see where it leads me to!</p>
        </div>

        <img src={process.env.PUBLIC_URL + "/images/pic1.png"} alt="" className='about--img'/> 
    </section>
  )
}

export default AboutMe