// src/match_score.js

const parseMatchScoreEvent = (body) => {

  const matchNumber = body.message_data.match.match_number;
  const eventName = body.message_data.event_name;
  const blueAllianceScore = body.message_data.match.alliances.blue.score;
  const blueAlliance1 = body.message_data.match.alliances.blue.teams[0].substr(3);
  const blueAlliance2 = body.message_data.match.alliances.blue.teams[1].substr(3);
  const blueAlliance3 = body.message_data.match.alliances.blue.teams[2].substr(3);
  const redAllianceScore = body.message_data.match.alliances.red.score;
  const redAlliance1 = body.message_data.match.alliances.red.teams[0].substr(3);
  const redAlliance2 = body.message_data.match.alliances.red.teams[1].substr(3);
  const redAlliance3 = body.message_data.match.alliances.red.teams[2].substr(3);

  var opening = eventName + '\nMatch Number: ' + matchNumber + '\nResult:';
  var score = '*Score*:  ' +  blueAllianceScore + ' - ' + redAllianceScore;

  var txt = { "blocks":
  [
	  {
		  "type": "section",
		  "text": {
			  "text": opening,
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
				  "text": blueAlliance1.toString()
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance1.toString()
			  },
			  {
				  "type": "plain_text",
				  "text": blueAlliance2.toString()
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance2.toString()
			  },
			  {
				  "type": "plain_text",
				  "text": blueAlliance3.toString()
			  },
			  {
				  "type": "plain_text",
				  "text": redAlliance3.toString()
			  }
		  ]
    },
    {
		  "type": "section",
		  "text": {
			  "text": score,
			  "type": "mrkdwn"
      }
	  }
  ]};

  //console.log(JSON.stringify(txt));
  //console.log(`Opening: ${opening}`);
  //console.log(`Score: ${score}`);

  return txt;
};

module.exports = parseMatchScoreEvent;
