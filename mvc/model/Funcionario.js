Ext.define('model.Funcionario',{
	extend: 'Ext.data.Model',
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
		}
	]
});