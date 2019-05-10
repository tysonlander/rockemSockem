import React, {Component} from 'react';

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
          <li className="dd-list-item" 
              onClick={this.handleClickMath}
              >
              {this.props.opponents.title} 
          </li>
        </div>
        
    )
  }
}

export default CompetitorDropDown;