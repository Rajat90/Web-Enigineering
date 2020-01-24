/* eslint-disable no-magic-numbers */

const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static('_dist'));

app.listen(port);

console.log(`SERVER: Listening on port ${port}`);