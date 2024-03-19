import express from 'express';
import bodyParser from 'body-parser';
import data from './data/groceries.json' assert { type: 'json' };


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
let groceries = data;

// READ
app.get('/groceries/:id', (req, res) => {
    const id = Number(req.params.id);
    const grocery = data.filter((element) => element.id === id);
    res.json(grocery);
});

// CREATE
app.post('/groceries/create', (req, res) => {
  const grocery = req.body;
  // no need to input the id, it will be automatically generated
  groceries.push({ ...grocery, id: groceries.length + 1 });
  res.send(groceries);
});

// UPDATE
app.post('/groceries/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const grocery = req.body;

  groceries = groceries.map(grocery => {
    if (grocery.id === id) {
        res.send({...grocery, ...req.body});
        return;
    }
  });
  res.send(`grocery with id ${id} not found`);
  
  
});

// DELETE 
app.delete('/groceries/:id', (req, res) => {
  const id = parseInt(req.params.id);
  groceries = groceries.filter(grocery => grocery.id !== id);
  res.send(groceries);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
