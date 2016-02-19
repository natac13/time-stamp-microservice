const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', function(req, res) {
  res.send('You can input a date string into the url and get back an json object with the unix date stamp and the natural date for properties');
});


app.get('/:date', function(req, res) {
  const dateString = req.params.date;

  const dateObj = new Date(dateString);
  const dateMoment = moment.utc(dateObj); // moment date object
  const dateUnix = moment.unix(dateString); // moment date unix object

  if (dateMoment.isValid()) { // check if valid date with string
    const dateToDisplay = {
      unix: dateMoment.unix(),
      natural: dateMoment.format('MMMM Do, YYYY')
      }
    res.json(dateToDisplay);

  } else if (dateUnix.isValid()) { // checks if valid date for unix number
    const dateToDisplay2 = {
      unix: dateUnix.unix(),
      natural: dateUnix.format('MMMM Do, YYYY')
      }
    res.json(dateToDisplay2);
  } else {
    // redirect on any wrong inputs into the url query
    res.redirect('/');
  }



});



module.exports = app;
