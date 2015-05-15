Ext.define('Telefone',{
	extend: 'Ext.data.Model',
	config:{
		fields: [
			{name: 'id', type: 'int'},
			{name: 'ddd', type: 'int'},
			{name: 'numero', type: 'int'},
			{name: 'contato_id', type: 'int'}
		],
	belongsTo: {model: 'Contato'} //não precisa colocar a FK por causa do contato_id
	}
});
