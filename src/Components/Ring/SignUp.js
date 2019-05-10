import React, {Component} from 'react';
import Ring from './Ring'

class SignUp extends Component {
  constructor(){
    super();
    this.state={
      yourName: ''
    }
  }

  handleSignUp(val){
    this.setState({yourName: val})
  }

  render(){
    return(
      <div>
        <div>
          <input
            onChange={(e) => this.handleSignUp(e.target.value)}
            value = {this.state.yourName}
            placeholder='Enter Your Name'
          />
          <button>Enter the Ring</button>
        </div>
        <div>
          <Ring
            entryName={this.state.yourName }
          />
        </div>
      </div>
    )
  }
}

export default SignUp;