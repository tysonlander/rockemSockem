import React, {Component} from 'react';
// import Ring from '../Ring/Ring'
import CompetitorDropDown from './DropDown/CompetitorDropDown'

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
      <div>
        <ul>
          {mappedOpponents}
        </ul>
        <div>
          <input
            onChange={(e) => this.props.handleEntrant(e.target.value)}
            value = {this.props.entrantName}
            placeholder='Enter Your Name'
          />
          <button onClick={this.props.handleMatched}>Enter the Ring</button>
        </div>
        {/* <div>
          <Ring
            entryName={this.props.entrantName}
          />
        </div> */}
      </div>
    )
  }
}

export default SignUp;