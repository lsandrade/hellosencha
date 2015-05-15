//SessionStorage
Ext.define('Coisa',{
		extend: 'Ext.data.Model',
		config:{
			fields: [
				{name: 'id', type:'int'},
				{name: 'descricao', type: 'string'}
			],
			proxy: {
				type: 'sessionstorage',
				id: 'coisa'
			}
		}
	});
