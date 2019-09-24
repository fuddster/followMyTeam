# followMyTeam
Follow an FRC team (via The Blue Alliance) in Slack

This application will listen for TBA events (based on your subscription settings) and post those events to your desired Slack channel.

Installation:

* Create and configure a new application in Slack
** https://api.slack.com -> Your Apps
** Create new app
** Create new slack channel to post to (if needed)
** Create Incoming Webhook
*** Turn on "Activate Incoming Webhooks"
*** Add New Webhook
*** Copy Webhook URL

* Deploy code to node Server
** Create SLACK_URL environment variable
*** Heroku: heroku config:set SLACK_URL="<COPIED SLACK WEBHOOK URL> --app=<HEROKU APP NAME>
