//CARREGAMENTO DINAMICO
Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
			name: 'Sencha',

			launch: function(){

				var funcionario = Ext.create('model.Funcionario',{
					nome: 'Luan',
					idade: 22,
					salario: 1200.99,
					ativo: true,
					nasc: '26/05/1992',
					usuario: 'luan'
				});
				
				funcionario.set('nome','Pablo');
				console.log(funcionario.get('nome'));
				
			}

		});