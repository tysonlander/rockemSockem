import React, {Component} from 'react';
// import Ring from '../Ring/Ring'
import CompetitorDropDown from './DropDown/CompetitorDropDown'
import '../../App.css'
import './SignUp.css'

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  handleSignUp(val){
    this.setState({yourName: val})
  }

  render(){
    const mappedOpponents = this.props.opponents.map((opponent, i) => { 
      return (<CompetitorDropDown
        key={i}
        opponents={opponent}
        handleSelectMatch={this.props.handleSelectMatch}
        />)
    })
    return(
      <div className="signup-container-one">

      
        <div className="signup-container-two">
          <h2 className="white-h2">Sign Up</h2>
          <h3 className="white-h3">Choose your opponent</h3>
          <ul>
            {mappedOpponents}
          </ul> 
          <div>
            <h3 className="white-h3">Your name</h3>
            <input
              className="signup-input"
              onChange={(e) => this.props.handleEntrant(e.target.value)}
              value = {this.props.entrantName}
              placeholder='Enter Your Name'
            />
            <br/>
            <button onClick={this.props.handleMatched} className="enter-the-ring-button">Enter the Ring</button>
          </div>
          {/* <div>
            <Ring
              entryName={this.props.entrantName}
            />
          </div> */}
        </div>
      </div>
    )
  }
}

export default SignUp;