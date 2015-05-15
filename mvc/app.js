//CARREGAMENTO DINAMICO
Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'Sencha',

	launch: function(){
		//Criação de um funcionário do Model
		/*var funcionario = Ext.create('model.Funcionario',{
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
		console.log(errors.getByField('nome'));*/

		//proxy teste POST/salvar informação
		/*var contato = Ext.create('model.Contato',{
			nome: 'Luan',
			email: 'luan@hotmail.com'
		});
		contato.save();*/
		/*Contato.load(1,{
			success: function(contato){
				console.log('Nome do contato eh: '+contato.get('nome')); //get. consultar valor
				//contato.set('nome', 'Xunda'); // requisicao PUT. atualizar
				//contato.save();
				contato.destroy(); //requisição DELETE
			}
		});*/
		/*Contato.load(1,{
			success: function(contato){
				console.log('Nome do contato eh: '+contato.get('nome')); //get. consultar valor
				var telefones = contato.telefones();// contato.telefoneS pq é hasMany
				telefones.each(function (tel){
					console.log(tel.get('ddd')+' '+tel.get('numero'));

					var c = tel.getContato();
					console.log('Numero pertence a '+ c.get('nome'));
				});
				var end = contato.getEndereco(); //endereco sem plural pq é hasOne
				console.log('Endereco: '+ end.get('logradouro') + end.get('numero'))

			}
		});*/


		//LocalStorage
		var store = Ext.create('Ext.data.Store',{
			model: 'Lista'
		});
		//store.load();
		//store.add({descricao:'gravar aula 16'});
		//store.add({descricao:'gravar aula 17'});
		//store.add({descricao:'gravar aula 18'});
		//store.sync();
		store.load(
			function(records, op, success){
				var lista, i;
				for(i=0;i<records.length;i++){
					lista= records[i].data;
					console.log(lista.id +" "+ lista.descricao);
				}
			}
			);
		
	}
});