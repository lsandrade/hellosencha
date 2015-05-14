//proxy
Ext.define('Contato',{
	extend: 'Ext.data.Model',
	config:{
		fields: [
			{name: 'id', type:'int'},
			{name: 'nome',  type: 'string'},
			{name: 'email', type: 'string'}
		],
		proxy:{
			type: 'rest',
			url: 'model',
			format: 'json'
		}
	}
	
});