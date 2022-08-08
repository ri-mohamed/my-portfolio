import React from 'react';
import image from "../images/img.jpg";

function Home() {
  return (
    <main>
      <img src={image} alt="background image" className="absolute object-cover w-full h-full"/>
      <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
        <h1 className='text-6xl text-green-100 cursive leding-none lg:leading-snug home-name '>Hello I'm Mohamed Rami.</h1>
      </section>
    </main>
  )
}

export default Home