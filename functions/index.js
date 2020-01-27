const functions = require('firebase-functions');
const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.send('hello');
});

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '2GB',
};

exports.myExpressApp = functions.runWith(runtimeOpts).https.onRequest(app);