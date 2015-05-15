//LocalStorage
Ext.define('Lista',{
		extend: 'Ext.data.Model',
		config:{
			fields: [
				{name: 'id', type:'int'},
				{name: 'descricao', type: 'string'}
			],
			proxy: {
				type: 'localstorage',
				id: 'lista'
			}
		}
	});
