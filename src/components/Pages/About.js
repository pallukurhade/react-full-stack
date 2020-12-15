import React, {Component} from 'react';
import Header from '../Common/Header';



import image from '../assets/img/about-us.jpg';
import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';
import Timeline from '../Common/Timeline';


const about = [
   {title: '2009-2011', subtitle:'Our Humble Beginnings', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' , image:img1,myclass : ''},
   {title: 'March 2011', subtitle:'An Agency is Born', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' ,image:img2 , myclass : 'timeline-inverted'},
   {title: 'December 2012', subtitle:'Transition to Full Service', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' , image:img3},
   {title: 'July 2014', subtitle:'Phase Two Expansion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!' , image:img4 , myclass : 'timeline-inverted'}


];

class About extends Component {

 render() {

   return (
    <div> 
    <Header 
    title = "It's a amazing story"
    subtitle = "Meet us"
    link = "/services"
    showButton = {false}
    image = {image}
  
     />
       <section className="page-section" id="about">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">About</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
                {about.map((item, index) => {
                     return <Timeline {...item} key={index} />
                 })}
                <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>
                                Be Part
                                <br />
                                Of Our
                                <br />
                                Story!
                            </h4>
                        </div>
                    </li>
               
            </ul>
        </div>
        
    </section>
   </div>
   )

 }


}

export default About;