import React from 'react'

function Home() {
  return (
    <section className='home' id='home'>
        <h1 className='section--title section--title--home'>
            Hi,<br /> I am <strong>Linh</strong>
        </h1>
        <p className='section--sub section--sub--home'>front-end dev</p>
        <img src={process.env.PUBLIC_URL + "/images/pic2.png"} alt="" className='home--img'/>  
    </section>
  )
}

export default Home