/**
* Profesor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	id:{
  		type:'string',
  		size:6,
  		primaryKey:true
  	},
 
    nombre : { 
    	type: 'string',
    	size:19,
    	required:true

    },

    apellidos : { 
    	type: 'string',
    	size:19,
    	required:true
    },

    email : { 
    	type: 'string',
    	size:100
    },

    materias:{
    	collection:'MateriaMatriculada',
    	via:'profesor'
    }
  }
};

