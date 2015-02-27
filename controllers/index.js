

var indexController = {
	index: function(req, res) {
		res.render('index');
	},

	countries: function(req, res) {
		res.send('countries');
		
	}
};

module.exports = indexController;