const express = require('express');
const moment = require('moment');
const app = express();

app.get('/', function(req, res) {
  res.send('Input date in url query');
})
app.get('/:date', function(req, res) {
  console.log(req.params);
  const dateString = req.params.date;

  const regex = /\w+\s\d{1,2},\s\d{4}/i;

  if (regex.test(dateString)) {
    const dateObj = new Date(dateString);
    const dateMoment = moment(dateObj);
    const dateToDisplay = {
      unix: dateMoment.unix(),
      natural: dateMoment.format('MMMM Do, YYYY')
      }
    res.json(dateToDisplay);

  } else {
    res.redirect('/');
  }

});



module.exports = app;
