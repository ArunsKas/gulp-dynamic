var functions = {
	init: function(){
		this.removeAtributosImg();
	},

	removeAtributosImg: function(){
		jQuery('img').each(function(){
			jQuery(this).removeAttr('width')
			jQuery(this).removeAttr('height');
		});
	},
}

jQuery(function(){
	functions.init();
});