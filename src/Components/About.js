import React from 'react';
import '../App.css';
import aboutpic1 from "../Images/about1.jpg";
import aboutpic2 from "../Images/about2.jpg"

const About = () => {
    return (
        // <div>
        //     <section className="about section" id="about">
        //         <div className="about__container container grid">
        //             <div className="about__data">
        //                 <h2 className="section__title about__title">More Information  About Assam</h2>
        //                 <p className="about__description">Soothing beauty, offbeat tourists attractions, spiritual ambiance, the sacred river, humble people, and zealous culture, Assam boasts plenty of fascinating secrets. Being one of the Northeast India’s iconic seven sisters, a holiday in Assam is about witnessing a heady mix of history, culture, and nature at the same time. The state happens to be the land of many wildlife reserves, which are further home to the one-horned rhino, one of Assam's tourism best-known mascots.
        //                 </p>
        //                 <a href="#" className="button">Reserve a place</a>
        //             </div>

        //             <div className="about__img">
        //                 <div className="about__img-overlay">
        //                     <img src="aboutpic1" alt=""/>
                            
        //                 </div>

        //                 <div className="about__img-overlay">
        //                 <img src="aboutpic2" alt=""/>
                            
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
        <>
        <h2 className="aboutHeading">More Information  About Assam</h2>
        <div className="container">
  <div className="about row">
    <div className="col">
      <p>Soothing beauty, offbeat tourists attractions, spiritual ambiance, the sacred river, humble people, and zealous culture, Assam boasts plenty of fascinating secrets. Being one of the Northeast India’s iconic seven sisters, a holiday in Assam is about witnessing a heady mix of history, culture, and nature at the same time. The state happens to be the land of many wildlife reserves, which are further home to the one-horned rhino, one of Assam's tourism best-known mascots.</p>
    </div>
    <div className="col">
      <img src={aboutpic1} alt="" weight="90px" height="180px"/>

      
    
      <img className="aboutpic2" src={aboutpic2} alt="" weight="90px" height="180px" />
    </div>
  </div>
</div>
        </>
    )
}

export default About
