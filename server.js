const express = require('express')
const app = express()
app.use(express.json())
const db = require('./model')

db.sequelize.sync();

require('./routes/tutorialroutes')(app)

/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
*/



app.listen(8000, () => {
    console.log(`Listening at port 8000`)
})