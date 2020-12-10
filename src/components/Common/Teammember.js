import React, {Component} from 'react';

class Teammember extends Component {

    render() {

        return (
          
            <div className="col-lg-4">
            <div className="team-member">
                <img className="mx-auto rounded-circle" src={this.props.image} alt="" />
        <h4>{this.props.tname}</h4>
        <p className="text-muted">{this.props.designation}</p>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
            </div>
        </div>



        )
    }
}

export default Teammember;