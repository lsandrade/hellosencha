Ext.define('model.Funcionario',{
	extend: 'Ext.data.Model',
	config:{
	fields: [
		{name: 'nome'}, //tipo: auto
		{name: 'idade', type: 'int'}, //tipo: int
		{name: 'salario', type: 'float'}, //tipo: float
		{name: 'ativo', type: 'boolean'}, //tipo: boolean
		{name: 'nasc', type: 'date', dateFormat: 'd/m/Y'}, //data e formatação de data
		{name: 'usuario', type: 'string'}, //string
		{name: 'email', type: 'string', 
			convert: function(value,record){
				return record.get('usuario') + '@email.com';
			}
		},
		{name:'genero',type:'string'}
	],
	validations: [
			{type: 'presence', field: 'nome'},
			{type: 'presence', field: 'usuario'},
			{type: 'presence', field: 'idade'},
			{type: 'length', field: 'usuario', min: 3, max: 10},
			{type: 'format', field: 'nome', matcher: /([a-z]+)/},
			{type: 'inclusion', field: 'genero', list:['F','M']},
			{type: 'exclusion', field: 'idade', list:[0]},
		]
	}
});