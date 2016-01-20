/**
 * CuestionarioController
 *
 * @description :: Server-side logic for managing cuestionarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	load: function(req, res, next) {
		Cuestionario.findOne({
			where: { id: Number(req.params.cuestionarioId)}
		}).populate('preguntas').then(function(cuestionario){
			if(cuestionario) {
				req.cuestionario = cuestionario;
				next();
			} else { next(new Error('No existe el cuestionario con el id' + req.params.cuestionarioId));}
		}).catch(function(error){next(error);});
	},

	duplicar: function(req, res, next) {
/*	con metodo de CLASE
		Cuestionario.duplicar(req.cuestionario, function (error, cuestionarioDuplicado) {
			if(error){next(error);};
			res.json(cuestionarioDuplicado);
		});
*/
		req.cuestionario.duplicar(function (error, cuestionarioDuplicado) {
			if(error){next(error);};
			res.json(cuestionarioDuplicado);
		});
	},

	asociarGrupo: function(req, res, next){
		req.cuestionario.asociarGrupo(req.grupo,function (error, cuestionario) {
			if(error){next(error);};
			res.json(cuestionario);
		});
	}

};

