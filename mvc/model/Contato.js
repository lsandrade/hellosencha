//proxy
Ext.define('Contato',{
	extend: 'Ext.data.Model',
	 alias: 'widget.Contato',
	config:{
		fields: [
			{name: 'id', type:'int'},
			{name: 'nome',  type: 'string'},
			{name: 'sobrenome', type: 'string'}
		],
		proxy:{
			type: 'rest',
			url: 'dados',
			format: 'json'
		},
		hasMany: {model: 'Telefone', foreignKey:'contato_id'}, //se usar o nome contato_id não precisa declarar a FK
		hasOne: {model: 'Endereco', foreignKey:'contato_id'}
	}

});