const hakkinda = function(req, res, next) {
  res.render('hakkinda', 
    { 
      title: 'Hakkında',
      'footer' : 'Ceyda Yılmaz 2020'
    }
  );
}

module.exports = {
  hakkinda
}