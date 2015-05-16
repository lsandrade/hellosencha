Ext.application({
	name: 'Sencha',
	launch: function(){
		
Ext.create('Ext.MessageBox').show(
        {
            title: 'Validation',
            message: 'dsdas',
            height: 300,
            scrollable: true,
            buttons: Ext.MessageBox.OK
        }        
    );



		/*
		Ext.create('Ext.Button', {
			text: 'Alerta',
			renderTo: 'btnAlert',
			handler: function() {
				Ext.Msg.alert('Alerta','Simples alerta!', function(btn){
					console.log('apertou o botão ' + btn);
				});
			},
			opt : {
                    scrollable: 'vertical',
                }
		});

		Ext.create('Ext.Button', {
			text: 'Confirmação',
			renderTo: 'btnConfirm',
			handler: function() {
				Ext.Msg.confirm('Confirmação','Quer mesmo deletar o registro?', function(btn){
					console.log('apertou o botão ' + btn);
					if (btn == 'yes'){
						Ext.Msg.alert('Mensagem','Registro deletado com sucesso!');
					} else if (btn == 'no') {
						console.log('cancelou - não deletou o registro.');
					}
				});
			}
		});
		Ext.create('Ext.Button', {
			text: 'Prompt',
			renderTo: 'btnPrompt',
			handler: function() {
				Ext.Msg.prompt('Prompt','Qual é o seu nome?', function(btn, text){
					console.log('apertou o botão ' + btn);
					console.log('entrou com o texto: ' + text);
					if (btn == 'ok'){
						Ext.Msg.alert('Bem vindo!','Bem vindo ' + text + "!");
					} else if (btn == 'cancel') {
						console.log('cancelou');
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Prompt Multiline',
			renderTo: 'btnPromptMult',
			handler: function() {
				Ext.Msg.prompt('Prompt','O que você gosta de fazer?', function(btn, text){
					console.log('apertou o botão ' + btn);
					console.log('entrou com o texto: ' + text);
					if (btn == 'ok'){
						Ext.Msg.alert('Mensagem!',text);
					} else if (btn == 'cancel') {
						console.log('cancelou');
					}
				},this, true, 'descreva aqui o que vc gosta de fazer...');
			}
		});

		Ext.create('Ext.Button', {
			text: 'Icone - ERROR',
			renderTo: 'btnError',
			handler: function() {
				Ext.Msg.show({
					title: 'Erro!',
					msg: 'Alguma coisa deu errado!',
					icon: Ext.Msg.ERROR
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Icone - INFO',
			renderTo: 'btnInfo',
			handler: function() {
				Ext.Msg.show({
					title: 'Info!',
					msg: 'Registro deletado com sucesso!',
					icon: Ext.Msg.INFO
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Icone - QUESTION',
			renderTo: 'btnQuestion',
			handler: function() {
				Ext.Msg.show({
					title: 'Pergunta!',
					msg: 'Você tem certeza de que quer fazer isso?',
					icon: Ext.Msg.QUESTION
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Icone - WARNING',
			renderTo: 'btnWarning',
			handler: function() {
				Ext.Msg.show({
					title: 'Atenção!',
					msg: 'Por favor, cancele a operação.',
					icon: Ext.Msg.WARNING
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - CANCEL',
			renderTo: 'btnCancel',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - CANCEL',
					msg: 'Por favor, cancele a operação.',
					icon: Ext.Msg.WARNING,
					buttons: Ext.Msg.CANCEL,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - NO',
			renderTo: 'btnNo',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - NO',
					msg: 'Você gosta de jiló?',
					buttons: Ext.Msg.NO,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - OK',
			renderTo: 'btnOk',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - OK',
					msg: 'Eu gosto de ExtJS',
					buttons: Ext.Msg.OK,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - OKCANCEL',
			renderTo: 'btnOKCANCEL',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - OKCANCEL',
					msg: 'Você quer deletar o registro?',
					buttons: Ext.Msg.OKCANCEL,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
						if (btn == 'ok'){
							Ext.Msg.alert('Mensagem', 'Registro deletado com sucesso!');
						}
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - YES',
			renderTo: 'btnYES',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - YES',
					msg: 'Você gosta de ExtJS?',
					buttons: Ext.Msg.YES,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - YESNO',
			renderTo: 'btnYESNO',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - YESNO',
					msg: 'Você quer deletar esse registro?',
					buttons: Ext.Msg.YESNO,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
						if (btn == 'yes'){
							Ext.Msg.alert('Mensagem', 'Registro deletado com sucesso!');
						}
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - YESNOCANCEL',
			renderTo: 'btnYESNOCANCEL',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - YESNOCANCEL',
					msg: 'Você quer deletar esse registro?',
					buttons: Ext.Msg.YESNOCANCEL,
					fn: function(btn){
						console.log('apertou o botao ' + btn);
						if (btn == 'yes'){
							Ext.Msg.alert('Mensagem', 'Registro deletado com sucesso!');
						} else if (btn == 'no') {
							Ext.Msg.alert('Mensagem', 'Ok, não vou deletar o registro');
						} else if (btn == 'cancel') {
							Ext.Msg.alert('Mensagem', 'Operação cancelada!');
						}
					}
				});
			}
		});


		Ext.create('Ext.Button', {
			text: 'Show - Prompt',
			renderTo: 'btnShowPrompt',
			handler: function() {
				Ext.Msg.show({
					title: 'Show - Prompt',
					msg: 'Você gosta de ExtJS por qual motivo?',
					prompt: true,
					width: 400,
					buttons: Ext.Msg.OK,
					fn: function(btn, text){
						console.log('apertou o botao ' + btn);
						console.log('texto que escreveu: ' + text);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Show - Prompt Multine',
			renderTo: 'btnShowPromptMult',
			handler: function() {
				Ext.Msg.show({
					title: 'Show - Prompt',
					msg: 'Você gosta de ExtJS por qual motivo?',
					multiline: true,
					width: 400,
					modal: false,
					buttons: Ext.Msg.OK,
					fn: function(btn, text){
						console.log('apertou o botao ' + btn);
						console.log('texto que escreveu: ' + text);
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Show - Progresso',
			renderTo: 'btnProgress',
			handler: function() {
				Ext.Msg.show({
					title: 'Progresso',
					msg: 'Carregando os dados...',
					progressText: 'carregando...',
					progress: true,
					closable: false,
					width: 300
				});

				var f = function(v){
					return function(){
						if (v == 12){
							Ext.Msg.hide();
							Ext.Msg.alert('Pronto!', 'Os dados foram carregados!');
						} else {
							var i = v/11;
							Ext.Msg.updateProgress(i, Math.round(100*i)+'%');
						}
					};
				}

				for (var i=1; i<13; i++){
					setTimeout(f(i), i*500);
				}
			}
		});

		Ext.create('Ext.Button', {
			text: 'Show - Wait',
			renderTo: 'btnWait',
			handler: function() {
				Ext.Msg.show({
					title: 'Espere',
					msg: 'Salvando os dados...',
					wait: true,
					waitConfig: {interval: 200},
					closable: false,
					width: 300
				});

				setTimeout(function(){
					Ext.Msg.hide();
					Ext.Msg.alert('Pronto!', 'Os dados foram salvos com sucesso!');
				}, 8000);
			}
		});

		Ext.create('Ext.Button', {
			text: 'Botão - Customizado',
			renderTo: 'btnYESNOCANCELCustom',
			handler: function() {
				Ext.Msg.show({
					title: 'Botão - Customizado',
					msg: 'Você quer deletar esse registro?',
					buttons: Ext.Msg.YESNOCANCEL,
					buttonText: {
						yes: 'Sim',
						no: 'Não',
						cancel: 'Cancelar'
					},
					fn: function(btn){
						console.log('apertou o botao ' + btn);
						if (btn == 'yes'){
							Ext.Msg.alert('Mensagem', 'Registro deletado com sucesso!');
						} else if (btn == 'no') {
							Ext.Msg.alert('Mensagem', 'Ok, não vou deletar o registro');
						} else if (btn == 'cancel') {
							Ext.Msg.alert('Mensagem', 'Operação cancelada!');
						}
					}
				});
			}
		});

		Ext.create('Ext.Button', {
			text: 'Icone - Customizado',
			renderTo: 'btnCustomIcon',
			handler: function() {
				Ext.Msg.show({
					title: 'Mensagem!',
					msg: 'Eu gosto de ExtJS!',
					icon: 'icon-heart'
				});
			}
		});
		*/
	}
});