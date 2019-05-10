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
    const opponentImg = this.props.opponents.filter((element) => {
      return element.title === this.props.selectedMatch
    })
    const mappedCombo = this.state.combos.map((element, i) => {
      return (
        <div key={i}>
          <button onClick={() => this.handlePunch(element.strength)}>{element.name}</button>
        </div>
      )
    })

    return(
      <div>
        <img src={opponentImg[0].photo} alt=""/>
        {this.state.health <= 0 ?  
        (<div>
          <img src="http://cappysgym.com/wordpress/wp-content/uploads/2016/03/knockout.jpg" alt="KO"/>
        </div>) : (
        <div>
          
          <h1>Match</h1>
          <h1>{`${this.props.selectedMatch} vs ${this.props.entrantName}`}</h1>
          <h1>Their Health: {this.state.health}/100</h1>

          {this.state.health < 50 ? // this is what gives alerts your winning
          (<div>
            <h1>You've Got Em On The Ropes</h1>
          </div>) : (<div></div>)}



          <h1>{`${this.props.entrantName}'s Moves`}</h1>
          {mappedCombo} 
        </div>  
        )
        
        
        }

      
      </div>
    )
  }

}

export default Ring;