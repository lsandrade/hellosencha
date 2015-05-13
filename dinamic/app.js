//CARREGAMENTO DINAMICO SÓ FUNCIONA COM APACHE
Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
			name: 'Sencha',

			launch: function(){

				var usuario = Ext.create('model.User',{ //cria a classe user
					nome: 'Luan', //construtor
					senha: '12345'
				});
				usuario.login();
				usuario.logout();
				console.log(usuario); //mostra o objeto usuario

				
			}

		});