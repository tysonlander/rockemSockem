import React, {Component} from 'react';
import axios from 'axios';
import CombosToDisplay from './CombosToDisplay'

class Combos extends Component {
  constructor(props){
    super(props);
    this.state = {
      combos: [],
      name: '',
      strength: '',
    }
  }
  componentDidMount(){
    this.handleGetCombos()
  }

  handleName(val) {
    this.setState({
      name: val
    })
  }
  
  handleStrength(val){
    this.setState({
      strength: val
    })
  }

  handleGetCombos = () => {
    axios.get('/api/combos')
    .then(res => {
      this.setState({
        combos: res.data
      })
    })
  }

  handleDeleteCombo = (data) => {
    this.setState({
      combos: data
    })
  }

  handleUpdateCombo = (data) => {
    this.setState({
      combos: data
    })
  }

  handleAddCombo = () => {
    axios.post('/api/addCombo', {name: this.state.name, strength: this.state.strength})
    .then(res => {
      this.setState({
        combos: res.data
      })
    })
    this.setState({name: ''})
    this.setState({strength: ''})
  }

  render(){
    const mappedCombos = this.state.combos.map((element, i) => {
      return (
        <CombosToDisplay 
          key={i}
          combo={element}
          updateCombo={this.handleUpdateCombo}
          deleteCombo={this.handleDeleteCombo}
        />
    
      )
    })
    return(
      <div>
        <div>
          <h1>Boxing Academy</h1>
          <h1>Create A new Move</h1>
          <input
            onChange={(e) => this.handleName(e.target.value)}
            value={this.state.name}
            placeholder='Combo Name'
          />
          <input
            onChange={(e) => this.handleStrength(e.target.value)}
            value={this.state.strength}
            placeholder="Strength Level"        
          />
          <button onClick={this.handleAddCombo}>Add A New Combo</button>

        </div>
        <div>
          {mappedCombos}
        </div>

      </div>
    )
  }


}

export default Combos;