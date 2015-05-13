Ext.define('Calculadora',{
	statics: {
		pi: 3.14159,
		area: function(raio){
			return this.pi * raio * raio;
		}
	},
	constructor: function(){
		this.statics().pi++;
	}
});