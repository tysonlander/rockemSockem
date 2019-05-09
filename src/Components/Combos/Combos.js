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
      id: '',
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
        {mappedCombos}
      </div>
    )
  }


}

export default Combos;