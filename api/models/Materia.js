/**
* Materia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

  	codigo:{
  		type:'string',
  		primaryKey: true,
  		size:6
  	},
  	materia:{ 
  		type: 'string',
  		size: 100

  	},
  	ensenaza:{
  		type: 'string',
  		size: 100
  	},
  	curso:{
  		type: 'string',
  		size:1
  	},
  	alumnos:{
  		collection:'MateriaMatriculada',
  		via:'materia'
  	}
  }
};

