//Update the name of the controller below and rename the file.
const cards_controller = require("../controllers/cards.js")
module.exports = function(app){

app.get('/', cards_controller.home);
app.get('/cards/:id', cards_controller.add);
app.get('/cards/del/:id', cards_controller.del);

app.post('/cards', cards_controller.newCard);

}
