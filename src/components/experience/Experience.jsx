import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
        <h5>That skills i have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
           <div className="experience__frontend">
              <h3>Frontend development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                 <div className="div">
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                 </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill  className='experience__details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Boostrap</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Tailwind</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>React.Js</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
           </div>
           <div className="experience__backend">  
           <h3>Backend development</h3> 
           <div className="experience__content">      
              <article className='experience__details'>         
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                      <h4>Node.Js</h4>
                      <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                      <h4>MongoûtU</h4>
                     <small className='text-light'>Experienced</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>MSQL</h4>
                    <small className='text-light'>baasic</small>
                  </div>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                      <h4>Python</h4>
                      <small className='text-light'>Experienced</small>
                  </div>
                </article>
              </div>
            </div> 
        </div>
    </section>
  )
}

export default Experience