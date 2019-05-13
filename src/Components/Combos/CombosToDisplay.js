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
    this.setState({editComboName: ''})
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
      <div className="combo-card">
        <h2 className="yellow-h2">{this.props.combo.name}</h2>
        <h3 className="white-h3-small-margin">Strength: {this.props.combo.strength}</h3>
      
        <input
          className="edit-input"
          onChange={(e) => this.handleNameInput(e.target.value)}
          value={this.state.editComboName}
          placeholder='Edit Combo Name Here'
        />
        <button className="edit-input" onClick={() => this.handleUpdateCombo(this.props.combo.id)}>Submit</button>

        <br/>
        <button className="small-red-button" onClick={this.handleDeleteCombo}>Retire Move</button>
      </div>
    )
  }
}

export default CombosToDisplay;