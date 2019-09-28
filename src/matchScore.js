// src/match_score.js

const parseMatchScoreEvent = (body) => {

  const compLevel = body.message_data.match.comp_level;
  const matchNumber = body.message_data.match.match_number;
  const eventName = body.message_data.event_name;
  const blueAlliance1 = body.message_data.match.alliances.blue.teams[0].substr(3);
  const blueAlliance2 = body.message_data.match.alliances.blue.teams[1].substr(3);
  const blueAlliance3 = body.message_data.match.alliances.blue.teams[2].substr(3);
  const redAlliance1 = body.message_data.match.alliances.red.teams[0].substr(3);
  const redAlliance2 = body.message_data.match.alliances.red.teams[1].substr(3);
  const redAlliance3 = body.message_data.match.alliances.red.teams[2].substr(3);
  var blueAllianceScore = body.message_data.match.alliances.blue.score;
  var redAllianceScore = body.message_data.match.alliances.red.score;

  if (blueAllianceScore > redAllianceScore) {
    blueAllianceScore = '*' + blueAllianceScore + '*';
  } else {
    redAllianceScore = '*' + redAllianceScore + '*';
  }

  var cl = "";

  switch(compLevel) {
    case 'qm':
      cl = "Qualification ";
      break;
    case 'ef':
      cl = "Eighth-Finals ";
      break;
    case 'qf':
      cl = "Quarterfinals ";
      break;
    case 'sf':
      cl = "Semifinals ";
      break;
    case 'f':
      cl = "Finals ";
      break;
    default:
      cl = "";
      console.log("WARNING: Unhandled compLevel value: " + compLevel);
  }

  var opening = eventName + '\n' + cl + 'Match Number: ' + matchNumber + '\nResult:';
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
