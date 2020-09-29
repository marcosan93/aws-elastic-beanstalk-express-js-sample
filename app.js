const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello it is working on Sept 29 2020'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
