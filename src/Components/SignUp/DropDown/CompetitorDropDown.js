import React, {Component} from 'react';
import '../SignUp.css';

class CompetitorDropDown extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }


  handleClickMath = () => {
    this.props.handleSelectMatch(this.props.opponents.title)
  } 

  render(){
    const{opponents} = this.props
    const{listOpen, headerTitle} = this.state
    return(
        <div>
          <button className="signup-opponent-buttons" 
              onClick={this.handleClickMath}
              >
              {this.props.opponents.title} 
          </button>
        </div>
        
    )
  }
}

export default CompetitorDropDown;