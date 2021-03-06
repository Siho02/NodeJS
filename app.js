const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')  
})

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(express.static('public'));
app.use(express.static('files'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})