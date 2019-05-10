import React, {Component} from 'react';
import axios from 'axios'


class Ring extends Component {
  constructor(props){
    super(props);
    this.state = {
      combos: [],
      health: 100
    }
  }
  componentDidMount(){
    this.handleGetCombos()
  }

  handleGetCombos = () => {
    axios.get('/api/combos')
    .then(res => {
      this.setState({
        combos: res.data
      })
    })
  }

  handlePunch = (val) => {
    this.setState({
      health: this.state.health - +val
    })
  }


  render(){
    const mappedCombo = this.state.combos.map((element, i) => {
      return (
        <div>
          <button onClick={() => this.handlePunch(element.strength)}>{element.name}</button>
        </div>
      )
    })
    return(
      <div>
        {this.state.health <= 0 ?  
        (<div>
          <img src="http://cappysgym.com/wordpress/wp-content/uploads/2016/03/knockout.jpg" alt="KO"/>
        </div>) : (
        <div>
          <h1>Opponent Name</h1>
          <h1>Health: {this.state.health}/100</h1>
          <h1>{`${this.props.entryName}'s Moves`}</h1>
          {mappedCombo} 
        </div>  
        )}

      
      </div>
    )
  }

}

export default Ring;