import React, {Component} from 'react';

import Companyitem from './Companyitem';

import img1 from '../assets/img/logos/creative-market.jpg';
import img2 from '../assets/img/logos/designmodo.jpg';
import img3 from '../assets/img/logos/envato.jpg';
import img4 from '../assets/img/logos/themeforest.jpg';




const company = [
    {image : img1},
    {image : img2},
    {image : img3},
    {image : img4}
]

class Company extends Component {

  render(){

    return (
        <div className="py-5">
        <div className="container">
            <div className="row">
               {company.map((item, index) => {
                   return <Companyitem {...item} key={index} />
               })}
            </div>
        </div>
    </div>

    )

  }


}


export default Company;