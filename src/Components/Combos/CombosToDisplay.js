import React, {Component} from 'react';
import axios from 'axios';

class CombosToDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editComboName: ''
    }
  }

  handleNameInput(val){
    this.setState({editComboName: val})
  }

  handleToggle = () => {
    this.setState({
      edit: !this.state.edit
    })
  }

  handleUpdateCombo(id){
    let updatedCombo = {
      name: this.state.editComboName
    }
    axios.put(`/api/combo/${id}`, updatedCombo)
    .then(res => {
      this.props.updateCombo(res.data)
      this.handleToggle();
    })
  }

  handleDeleteCombo = () => {
    axios.delete(`/api/deleteCombo/${this.props.combo.id}`)
    .then(res => {
      this.props.deleteCombo(res.data)
      // console.log(res)
    })
  }





  render(){
    return(
      <div>
        <h1>{this.props.combo.name}</h1>
        <h3>Strength: {this.props.combo.strength}</h3>
      
        <input
          onChange={(e) => this.handleNameInput(e.target.value)}
          value={this.state.editComboName}
          placeholder='Edit Combo Name Here'
        />
        <button onClick={() => this.handleUpdateCombo(this.props.combo.id)}>Submit</button>


        <button onClick={this.handleDeleteCombo}>Retire Move</button>
      </div>
    )
  }
}

export default CombosToDisplay;