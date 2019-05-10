import React, {Component} from 'react';
import './App.css';
import Combos from './Components/Combos/Combos'
import SignUp from './Components/SignUp/SignUp'
import Ring from './Components/Ring/Ring'

class App extends Component {
  constructor(){
    super()
  this.state = {
    entrant: '',
    selectedMatch: '',
    matched: false,
    opponents: [
      {
        id: 0,
        title: 'Dwayne the rock johnson',
        selected: false,
        photo: 'https://fsmedia.imgix.net/91/46/6a/7b/f142/4b54/93cf/e2f6fca20a0a/dwayne-the-rock-johnson-net-worthjpg.jpeg?rect=12%2C0%2C1000%2C500&auto=format%2Ccompress&w=650',
        key: 'location'
      },
      {
        id: 1,
        title: 'Muhammad Ali',
        selected: false,
        photo: 'http://www.biography.com/.image/t_share/MTE5NDg0MDU0ODc2NTU0NzY3/muhammad-ali-1-raw.jpg',
        key: 'location',
      },
      {
        id: 2,
        title: 'Danny DeVito',
        selected: false,
        photo: 'https://i.pinimg.com/originals/8a/d7/35/8ad735bbb683375f3544620032ec4b7a.jpg',
        key: 'location'
      },
      {
        id: 3,
        title: 'Jason Bourne',
        selected: false,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWURzTbHjNTDgM8u7h_em0wUNZFDFhPdt7zKLZDXm0n5W3cKed3A',
        key: 'location'
      },
      {
        id: 4,
        title: 'Ron Weasley',
        selected: false,
        photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcFa-He5TFuVOBjS5EIWJhzyLqmX-lqB36NNOcL9E1ze8Pt8ldg',
        key: 'location'
      }
      
    ]
    }
  }

  handleEntrant = (data) => {
    this.setState({
      entrant: data
    })
  }

  handleSelectMatch = (data) => {
    this.setState({
      selectedMatch: data
    })
  }

  handleMatched = () => {
    this.setState({
      matched: true
    })
  } 

  render(){
    console.log(this.state.selectedMatch, this.state.matched)
    return (
      <div className="App">
        {/* <img src="https://media.gq.com/photos/5aac26f0a980810c2d4f23d7/16:9/w_1280%2Cc_limit/rockem.gif" alt="super awesome gif"/> */}
        {!this.state.matched ? 
        (
        <div className="entry-sign-up">
          <SignUp   
            handleEntrant={this.handleEntrant}
            entrantName={this.state.entrant}
            opponents={this.state.opponents}
            handleSelectMatch={this.handleSelectMatch}
            handleMatched={this.handleMatched}
          />
        </div>  
        ) : (
        <div>
          <Ring 
            opponents={this.state.opponents}
            entrantName={this.state.entrant}
            selectedMatch={this.state.selectedMatch}
          />
        </div>
        )}
        
        
        
        {/* <Combos/> */}
      </div>
    );
    
  }

}


export default App;
