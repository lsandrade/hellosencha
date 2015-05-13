//criando uma classe (EXT)
//parametros(Nome, array de atributos metodos etc, callback)
		Ext.define('User',{ 
			//Condig: cria getters e setter sozinho. mt interessante!!
			config: {
				nome: '',
				senha: '',
			},

			constructor: function(options){ //modificar o construtor
				Ext.apply(this, options || {});
				console.log('construtor foi chamado.');
			},

			login: function(){ //metodo login
				console.log('fazendo login');
			},
			logout: function(){ //metodo logout
				console.log('fazendo logout');
			}
 		},
 			function(){ //callback
 				console.log('callback foi chamado');
 			}
 		);
