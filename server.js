const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Item = require('./models/Item');
const db = require('./config/keys').MONGO_URI
//const items = require('./routes/api/items')

const app = express();
app.use(bodyParser.json());
app.use(cors());
//const router = express.Router();
//app.use(router);

//app.use('/api/items', items);


app.get('/api/items/', (req, res) => {
    Item.find()
      .then(items => res.json(items));
  });

app.post('/api/items/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
})

app.delete('/api/items/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.json({success: false}, console.log(err))
    );
})


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('connected to mongodb server'))
    .catch((err) => console.log(err, `mongoUri: ${db}`));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on port ${port};`));