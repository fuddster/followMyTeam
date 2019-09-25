// src/postToSlack.js
const request = require('request');
const parseMatchScoreEvent = require('./matchScore');

const postToSlack = (slackURL, message) => {
  console.log('Posting to Slack');

  //const headers = {"Content-type": "application/json"};
  //var payload = JSON.stringify({ json: message });
  //var payload = { json: message };
  //var payload = JSON.stringify({ text: "This is a test!" });
  //var payload = { text: "This is a test!" };
  var payload = {
  type: "section",
  text: {
    type: "mrkdwn",
    text: "A message *with some bold text* and _some italicized text_."
  }};

  //request.post({url: slackURL, headers: headers, payload: payload}, (error, res, body) => {
  request.post({
    url: slackURL,
    json: payload
  }, (error, res, body) => {

    if (error) {
      console.error('There was an error!');
      console.error(error);
      return;
    }

    //console.log(`request: ${request}`)
    console.log(`statusCode: ${res.statusCode}`);
    console.log(`statusMessage: ${res.statusMessage}`);
    console.log(`headers: ${JSON.stringify(res.headers, null, 4)}`);
    console.log(`keys = ${JSON.stringify(res,null,4)}`);
    console.log(`body2: ${body}`);
    console.log(`error: ${JSON.stringify(error, null, 4)}`);
  });

  return;
};

const postToSlackFactory = (slackURL, body) => {
  var status = 200;
  switch (body.message_type) {
    case 'verification':
      console.log(`Verification code = ${body.message_data.verification_key}`);
      postToSlack(slackURL, { text: 'Verification code received: ' + body.message_data.verification_key } );
      break;
    case 'ping':
      console.log('Ping Received');
      //postToSlack(slackURL, { text: "Received Ping" } );
      postToSlack(slackURL, parseMatchScoreEvent(body));
      break;
    case 'upcoming_match':
      console.log('Upcoming Match notification received');
      break;
    case 'match_score':
      console.log('Match Score notification received');
      postToSlack(slackURL, parseMatchScoreEvent(body));
      break;
    case 'starting_comp_level':
      console.log('Starting Comp Level notification received');
      break;
    case 'alliance_selection':
      console.log('Alliance Selection notification received');
      break;
    case 'awards_posted':
      console.log('Awards Posted notification received');
      break;
    case 'media_posted':
      console.log('Media Posted notification received');
      break;
    case 'schedule_updated':
      console.log('Schedule Updated notification received');
      break;
    case 'final_results':
      console.log('Final Results notification received');
      break;
    case 'broadcast':
      console.log('Broadcast notification received');
      break;
    default:
      console.log(`${req.body.message_type} not handled`);
      break;
  }

  return status;
};

module.exports = postToSlackFactory;
