import React, { Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';

// Re-eusable Components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Team from '../Common/Team';
import Company from '../Common/Company';
import Timeline from './About';


class Home extends Component {

  render(){

    return (

       <div>

         <Header 
           title = "Welcome To Our Studio!"
           subtitle = "IT'S NICE TO MEET YOU"
           buttonText = "Tell me more"
           link = "/services"
           showButton = {true}
           image = {image}
         
         />
          <Services/>
          <Portfolio/>
          <Timeline/>
          <Team/>
          <Company/>
       </div>

    )
  }
}

export default Home;