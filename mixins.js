//Mixin = adicionar capacidade genérica ao prototype da classe
Ext.define('Tocar',{ //Mixin (herança multipla)
	tocar : function(){
		console.log('Tocando instrumento');
	}
});

Ext.define('Afinar',{ //Mixin
	afinar : function(){
		console.log('Afinando instrumento');
	}
});

Ext.define('Violao',{ //Classe
	mixins: {
		tocarInstrumento: 'Tocar',
		afinarInstrumento: 'Afinar'
	}
});