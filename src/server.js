// src/server.js
const Express = require('express');
const bodyParser = require('body-parser');
const postToSlackFactory = require('./postToSlack');

const app = new Express();
app.use(Express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const {SLACK_TOKEN: slackToken, PORT} = process.env;

if (!slackToken) {
  console.error('missing environment variable SLACK_TOKEN');
  process.exit(1);
}

const port = PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/tba/events', function (req, res) {
  console.log('Got TBA notification');
  console.log('request =' + JSON.stringify(req.body));
  console.log(`Body = ${req.body}`);
  console.log('path = ' + req.path);
  switch (req.body.message_type) {
    case 'verification':
      console.log(`Verification code = ${req.body.message_data.verification_key}`);
      res.sendStatus(200);
      break;
    case 'ping':
      console.log('Ping Received');
      res.sendStatus(200);
      break;
    case 'upcoming_match':
      console.log('Upcoming Match notification received');
      res.sendStatus(200);
      break;
    case 'match_score':
      console.log('Match Score notification received');
      res.sendStatus(200);
      break;
    case 'starting_comp_level':
      console.log('Starting Comp Level notification received');
      res.sendStatus(200);
      break;
    case 'alliance_selection':
      console.log('Alliance Selection notification received');
      res.sendStatus(200);
      break;
    case 'awards_posted':
      console.log('Awards Posted notification received');
      res.sendStatus(200);
      break;
    case 'media_posted':
      console.log('Media Posted notification received');
      res.sendStatus(200);
      break;
    case 'schedule_updated':
      console.log('Schedule Updated notification received');
      res.sendStatus(200);
      break;
    case 'final_results':
      console.log('Final Results notification received');
      res.sendStatus(200);
      break;
    case 'broadcast':
      console.log('Broadcast notification received');
      res.sendStatus(200);
      break;
    default:
      console.log(`${req.body.message_type} not handled`);
      res.sendStatus(200);
      break;
  }
});

app.listen(port, () => {
  console.log(`Server started at localhost:${port}`);
});
