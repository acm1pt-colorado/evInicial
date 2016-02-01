/**
* MateriaMatriculada.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	anyo:{
  		type:'string',
  		size:7
  	},

  	expediente:{
  		model:'alumno'
  	},
  	materia:{
  		model:'materia'
  	},
  	profesor:{
  		model:'profesor'
  	}
  }
};

