
Ext.application({
			name: 'Sencha',

			launch: function(){

				var painel = Ext.create('Ext.Panel',{
					fullscreen: true,
					html: 'Hello World'
				});
				//instanciando um objeto User
				var usuario = Ext.create('User',{ //cria a classe user
					nome: 'Luan', //construtor
					senha: '12345'
				});
				usuario.login();
				usuario.logout();
				console.log(usuario); //mostra o objeto usuario

				var botao= Ext.create('MeuBotao',{
						text: 'Meu Botao',
						renderTo: 'botao01'
					});
				 //Ext.Viewport.add(botao);

				 var violao = Ext.create('Violao');
				 violao.tocar();
				 violao.afinar();
			}

		});