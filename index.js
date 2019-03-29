const config = require('./config')

const strava = new require("strava")({
  client_id: config.client_id, 
  client_secret: config.client_secret,
  redirect_uri: config.redirect_uri,
  access_token: config.access_token
})

console.log(strava)

strava.athlete.get(function(err, res) {
  console.log(res)
})