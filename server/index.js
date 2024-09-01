const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const { firstNum, secondNum } = req.body;
  let result = parseFloat(firstNum) + parseFloat(secondNum);
  result = result.toFixed(7);
  res.json({ result: parseFloat(result) });
});

app.post('/subtract', (req, res) => {
  const { firstNum, secondNum } = req.body;
  let result = parseFloat(firstNum) - parseFloat(secondNum);
  result = result.toFixed(7);
  res.json({ result: parseFloat(result) });
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});
