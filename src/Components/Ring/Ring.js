import React, {Component} from 'react';
import axios from 'axios'
import './Ring.css'

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
          <button className="ring-moves-button" onClick={() => this.handlePunch(element.strength)}>{element.name}</button>
        </div>
      )
    })

    return(
      <div className="robot-background">

        <div className="match-container">
          <img className="opponent-image" src={opponentImg[0].photo} alt=""/>
          {this.state.health <= 0 ?  
          (<div>
            <img className="knockout" src="http://cappysgym.com/wordpress/wp-content/uploads/2016/03/knockout.jpg" alt="KO"/>
          </div>) : (
          <div className="center-elements">
            
            <h2 className="white-h2"><span className="red-entrant">{this.props.entrantName}</span> 
               {` vs `}     
              <span className="blue-entrant">{this.props.selectedMatch}</span>
            </h2>
            <h3 className="white-h3">Their Health: {this.state.health}/100</h3>

            {this.state.health < 50 ? // this is what gives alerts your winning
            (<div>
              <h1 className="yellow-h1">You've Got Em On The Ropes</h1>
            </div>) : (<div></div>)}



            <h2 className="title-three">{`${this.props.entrantName}'s Moves`}</h2>
            <div className="mapped-combos-two-column">
              {mappedCombo} 
            </div>
            
          </div>  
          )
          
          
          }

        
        </div>
      </div>
    )
  }

}

export default Ring;