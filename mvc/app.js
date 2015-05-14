//CARREGAMENTO DINAMICO
Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
			name: 'Sencha',

			launch: function(){
				//Criação de um funcionário do Model
				var funcionario = Ext.create('model.Funcionario',{
					nome: 'Luan',
					idade: 22,
					salario: 1200.99,
					ativo: true,
					nasc: '26/05/1992',
					usuario: 'luan'
				});
				
				funcionario.set('nome','Pablo'); //setando nome
				console.log(funcionario.get('nome'));

				var funcionario2= Ext.create('model.Funcionario',{
					nome:'Luan',
					genero: 'M',
					usuario: 'luan',
					idade: 25
				});
				var errors = funcionario2.validate();
				console.log(errors.isValid());
				console.log(errors.items);
				console.log(errors.getByField('nome'));

				//proxy teste POST/salvar informação
				/*var contato = Ext.create('model.Contato',{
					nome: 'Luan',
					email: 'luan@hotmail.com'
				});
				contato.save();*/
				Contato.load(1,{
					success: function(contato){
						console.log('Nome do contato eh: '+contato.get('nome')); //get. consultar valor
						//contato.set('nome', 'Xunda'); // requisicao PUT. atualizar
						//contato.save();
						contato.destroy(); //requisição DELETE
					}
				});

			}

		});