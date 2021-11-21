const coleccionUsuarios = require('../schemas/usuarios.schema');
const operaciones = {};

operaciones.getUsuarios = async function(req, res) {
	const datos = await coleccionUsuarios.find()
	res.json(datos);
}

operaciones.getUsuario = async function(req, res) {
	const dato = await coleccionUsuarios.findById(req.params.id);
	res.json(dato);
}
/*
operaciones.crearUsuario = async function(req, res) {
	const producto = new coleccionUsuarios(req.body);
	console.log(usuario)
	await usuario.save();
	res.json({"status":"Dato de usuario guardado"});	
}

operaciones.actualizarUsuario = async function(req, res) {
	const { id } = req.params;
	const usuario = {
		nombres: req.body.nombres,
    	apellidos: req.body.apellidos,
    	identificacion: req.body.identificacion,
        direccion: req.body.direccion,
		email: req.body.email,
		mascotas:[
			{
				nombre_mascota: req.body.nombre_mascota,
				fecha_nacimiento: req.body.fecha_nacimiento,
				raza: req.body.raza
			}
		]
	}

	console.log(usuario)
	await coleccionUsuarios.findByIdAndUpdate(req.params.id, {$set: usuario}, {new: true});
	res.json({"status":"Dato de usuario actualizado"});
}

operaciones.borrarUsuario = async function(req, res) {
	await coleccionUsuarios.findByIdAndRemove(req.params.id);
	res.json({"status":"Dato de usuario borrado"});	

}
*/
module.exports = operaciones