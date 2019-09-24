// src/match_score.js
const parseMatchScoreEvent = (body) => {
  // const matchNumber = body.message_data.match.match_number;
  // const eventName = body.message_data.event_name;
  // const blueAllianceScore = body.message_data.match.alliances.blue.score;
  // const blueAlliance1 = body.message_data.match.alliances.blue.teams[0];
  // const blueAlliance2 = body.message_data.match.alliances.blue.teams[1];
  // const blueAlliance3 = body.message_data.match.alliances.blue.teams[2];
  // const redAllianceScore = body.message_data.match.alliances.red.score;
  // const redAlliance1 = body.message_data.match.alliances.red.teams[0];
  // const redAlliance2 = body.message_data.match.alliances.red.teams[1];
  // const redAlliance3 = body.message_data.match.alliances.red.teams[2];

  const matchNumber = 1;
  const eventName = 'Midwest Regional';
  const blueAllianceScore = 99;
  const blueAlliance1 = 48;
  const blueAlliance2 = 111;
  const blueAlliance3 = 2451;
  const redAllianceScore = 10;
  const redAlliance1 = 9999;
  const redAlliance2 = 9998;
  const redAlliance3 = 9997;

  var txt =
  [
	  {
		  "type": "section",
		  "text": {
			  "text": eventName + '\nMatch Number: ' + matchNumber + '\nResult:',
			  "type": "mrkdwn"
		  },
		  "fields": [
			  {
				  "type": "mrkdwn",
				  "text": "*Blue Alliance*"
			  },
			  {
				  "type": "mrkdwn",
				  "text": "*Red Alliance*"
			  },
			  {
				  "type": "plain_text",
				  "text": blueAlliance1
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance1
			  },
			  {
				  "type": "plain_text",
				  "text": blueAlliance2
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance2
			  },
			  {
				  "type": "plain_text",
				  "text": blueAlliance3
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance3
			  }
		  ]
	  },
	  {
		  "type": "section",
		  "text": {
			  "text": '*Score*:  ' +  blueAllianceScore + ' - ' + redAllianceScore,
			  "type": "mrkdwn"
		  }
    }
  ];
  return txt;
};

module.exports = parseMatchScoreEvent;
