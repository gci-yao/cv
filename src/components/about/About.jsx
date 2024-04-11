import React from 'react'
import './about.css'
import ME from '../../Asserts/gci0.jpeg'
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi2";
import { FaFolderPlus } from "react-icons/fa";
const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                 <h5>Experience</h5>
                 <small>2+ Years Working</small> 
              </article>

              <article className='about__card'>
                <HiUsers className='about__icon' />
                 <h5>Clienst</h5>
                 <small>200+ worldwide</small> 
              </article>

              <article className='about__card'>
                 <FaFolderPlus className='about__icon' />
                 <h5>Projects</h5>
                 <small>80+ completed</small> 
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aspernatur debitis cumque quis maiores sapiente corrupti quaerat, at dolores aliquam nisi minus laudantium ad, dolorem eius dicta! Voluptatibus, iste illum.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}
// rafce
export default About