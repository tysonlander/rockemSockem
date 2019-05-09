let combos = [
  {
    name: 'the old one two',
    strength: 10,
    id: 1
  },
  { name: 'headbutt',
  strength: 20,
  id: 2
  },
  {
    name: 'uppercut',
    strength: 15,
    id: 3
  },
  {
    name: 'light the room on fire like jason bourn',
    strength: 100,
    id: 4
  },
  {
    name: 'bodyslam',
    strength: 20,
    id: 5
  },
  {
    name: 'granny punch',
    strength: -20,
    id: 6
  },
  {
    name: 'feather slap',
    strength: 1,
    id: 7
  },
  {
    name: 'bob and weave',
    strength: 0,
    id: 8
  },
  {
    name: 'crane kick',
    strength: 50,
    id: 9
  },
  {
    name: 'miss (your aim sucks)',
    strength: -20,
    id: 10
  }
]

module.exports = {
  getAllCombos: (req, res) => {
    res.status(200).send(combos)
  },
  getComboById: (req, res) => {
    const combo = combos.filter((combo) =>{
      return combo.id === +req.params.id
    })
    res.status(200).send(combo[0])
  },
  addCombo: (req, res) => {
    console.log(req.body)
    let id = combos.length + 1
    const newCombo = {
      name: req.body.name,
      strength: req.body.strength,
      id: id
    }
    combos.push(newCombo)
    res.status(200).send(combos)
  },
  updateCombo: (req, res) => {
    const {id} = req.params;
    const updatedCombo = req.body;
    let selectedCombo = combos.find(element =>{
      return element.id === +id
    })

    selectedCombo.name = updatedCombo.name;
    res.status(200).send(combos)
  },
  deleteCombo: (req, res) => {
    const {id} = req.params;
    console.log(id)
    combos = combos.filter((element) => {
      return element.id !== +id
    })
    res.status(200).send(combos)
  }
}