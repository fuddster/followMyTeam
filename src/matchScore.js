// src/match_score.js
const parseMatchScoreEvent = (body) => {
  var txt = "";

  const matchNumber = body.message_data.match.match_number;
  const eventName = body.message_data.event_name;
  const blueAllianceScore = body.message_data.match.alliances.blue.score;
  const blueAlliance1 = body.message_data.match.alliances.blue.teams[0];
  const blueAlliance2 = body.message_data.match.alliances.blue.teams[1];
  const blueAlliance3 = body.message_data.match.alliances.blue.teams[2];
  const redAllianceScore = body.message_data.match.alliances.red.score;
  const redAlliance1 = body.message_data.match.alliances.red.teams[0];
  const redAlliance2 = body.message_data.match.alliances.red.teams[1];
  const redAlliance3 = body.message_data.match.alliances.red.teams[2];

  // https://api.slack.com/messaging/composing/layouts
  txt += 'Match #' + matchNumber + ' Results:\n';
  return txt;
};

module.exports = parseMatchScoreEvent;
