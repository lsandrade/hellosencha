
Ext.application({
			name: 'Sencha',

			launch: function(){

				var painel = Ext.create('Ext.Panel',{
					fullscreen: true,
					html: 'Hello World',
					items:{
						//botao com Xtype
						xtype: 'button',
						text: 'botao'
					}
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

				 //Criando uma classe com mixins
				 var violao = Ext.create('Violao');
				 violao.tocar();
				 violao.afinar();

				 //Criando uma classe com Alias/widget
				 var botao2= Ext.widget('meubotao',{
				 	text: 'Meu Botao 2',
				 	renderTo: 'botao02'
				 });

				 //Config
				 var usuario2= Ext.create('User');
				 usuario2.setNome('Xunda');
				 usuario2.setSenha('54321');
				 console.log(usuario2.getNome()+" - "+usuario2.getSenha());

				 //Criação de coisas estáticas
				 console.log(Calculadora.pi);
				 var calculadora = Ext.create('Calculadora');
				 console.log(Calculadora.pi);
				 console.log(Calculadora.area(2));

				 //Singleton
				 //var constante = Ext.create('Constantes'); <-- DESSE JEITO NAO PODE!!!
				 console.log(Constantes.PI);
			}

		});