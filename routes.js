var controllerhotel = require('./controllerhotel.js');
var controlerAdministrador = require('./controlleradministrador.js')
module.exports = function(app) {

	var clasehotel = new controllerhotel();
	app.post('/api/nuevohotel',clasehotel.Guardar)
	app.post('/api/seleccionartodos', clasehotel.Seleccionartodos)

	var claseadm = new controllerAdministrador();
	app.post('/api/nuevoadm', claseadm.Guardar);
	app.post('/api/loginadm', claseadm.Login);
	
	app.get('*', function(req, res){
		res.sendfile('./login.html');
	});
};