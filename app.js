const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Mira quién llegó, soy yo, el dueño del party'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
