// src/postToSlack.js
const request = require('request');

const postToSlack = (slackURL, message) => {
  console.log('Posting to Slack');

  request.post(slackURL, {
    json: {
      text: message
    } }, (error, res, body) => {

    if (error) {
      console.error(error);
      return;
    }

    console.log(`statusCode: ${res.statusCode}`);
    console.log(body);
  });

  return;
  // const req = request({
  //   url: slackURL,
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({text:message}),
  //   resolveWithFullResponse: true
  // });

  // req
  //   .then((response) => {
  //     const result = JSON.parse(response.body);
  //     console.log(`result: ${result}`);
  //     var k = Object.keys(result);
  //     console.log(`Result properties: ${k}`);
  //     k = Object.keys(response);
  //     console.log(`Response properties: ${k}`);
  //     resolve(result);
  //   })
  //   .catch((err) => {
  //     console.log(`Error response: ${err.response}`);
  //     var k = Object.keys(err.response);
  //     console.log(`Response properties: ${k}`);
  //     console.log(`Status Message: ${err.statusMessage}`);
  //     console.log(`Request: ${err.request}`);
  //     console.log(`Body: ${err.body}`);
  //   });

};

const postToSlackFactory = (slackURL, body) => {
  var status = 200;
  switch (body.message_type) {
    case 'verification':
      console.log(`Verification code = ${req.body.message_data.verification_key}`);
      postToSlack(slackURL, 'Verification code received: ' + req.body.message_data.verification_key);
      break;
    case 'ping':
      console.log('Ping Received');
      postToSlack(slackURL, "Received Ping");
      break;
    case 'upcoming_match':
      console.log('Upcoming Match notification received');
      break;
    case 'match_score':
      console.log('Match Score notification received');
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
