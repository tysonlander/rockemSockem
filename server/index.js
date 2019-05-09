const express = require('express')
const app = express()
const rockem_ctrl = require('./controllers/rockem_controller')

app.use(express.json())

app.get('/api/combos', rockem_ctrl.getAllCombos)
app.get('/api/combo/:id', rockem_ctrl.getComboById)
app.post('/api/addCombo', rockem_ctrl.addCombo)     // add a new combo
app.put('/api/combo/:id', rockem_ctrl.updateCombo) // edit an existing combo
app.delete('/api/deleteCombo/:id', rockem_ctrl.deleteCombo)


const PORT = 5555
app.listen(PORT, () => console.log(`lets get ready to rumble on ${PORT}`))