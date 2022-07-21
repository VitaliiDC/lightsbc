const express = require('express');
const mongoose = require('mongoose');
const ListSchema = require('./models/list');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    ListSchema.find({}, (err, obj) => {
        if(err) throw err;
        res.send(obj[obj.length - 1]);
    })
})

app.post('/', async (req, res) => {

    const {preList} = req.body;

    const list = await new ListSchema({
        list: preList
    });

    console.log(list)

    await list.save();
    res.json({message: 'saved'});
})

mongoose.connect('mongodb+srv://Vitalii_Drobit:b8qT3yZkCwRDqE7@cluster0.jn0xs.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(process.env.PORT, () => {
    console.log('Server has been started');
}));