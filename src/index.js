const express = require('express');
const routes = require('./routes/routes.js');
const app = express();
const port = 3000;

app.use('/', routes);

app.use('/about', routes);

app.use('/contact', routes);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});