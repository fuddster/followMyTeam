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

  var ba = '*Blue Alliance:*\n' + blueAlliance1 + '\n' + blueAlliance2 + '\n' + blueAlliance3;
  var ra = '*Red Alliance:*\n' + redAlliance1 + '\n' + redAlliance2 + '\n' + redAlliance3;
  var opening = eventName + '\n' + cl + 'Match Number: ' + matchNumber;
  var score = '*Score*:\nBlue Alliance ' +  blueAllianceScore + ' - ' + redAllianceScore + ' Red Alliance';

  var txt = { "blocks":
  [
	  {
		  "type": "section",
		  "text": {
			  "text": opening,
			  "type": "mrkdwn"
		  }
    },
    {
		  "type": "section",
		  "text": {
			  "text": ba,
			  "type": "mrkdwn"
      }
    },
    {
		  "type": "section",
		  "text": {
			  "text": ra,
			  "type": "mrkdwn"
      }
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
