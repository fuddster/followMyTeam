// src/server.js
const Express = require('express');
const bodyParser = require('body-parser');
const postToSlackFactory = require('./postToSlack');

const app = new Express();
app.use(Express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const {SLACK_URL: slackURL, PORT} = process.env;

 if (!slackURL) {
   console.error('missing environment variable SLACK_URL');
   process.exit(1);
 }

const port = PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/tba/events', function (req, res) {
  console.log('Got TBA notification');
  console.log('request =' + JSON.stringify(req.body));
  console.log(`Body = ${req.body}`);
  console.log('path = ' + req.path);
  const status = postToSlackFactory(slackURL, req.body);
  res.sendStatus(status);
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
