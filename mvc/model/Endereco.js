Ext.define('Endereco',{
	extend: 'Ext.data.Model',
	config:{
		fields: [
			{name: 'id', type: 'int'},
			{name: 'logradouro', type: 'string'},
			{name: 'numero', type: 'int'},
			{name: 'complemento', type: 'string'},
			{name: 'contato_id', type: 'int'}
		]
	}
});
