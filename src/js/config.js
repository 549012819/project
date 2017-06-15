require.config({

	paths:{
		"jquery": "../lib/jquery-3.2.1",
		'gdszoom':'../lib/jquery-gdszoom/jquery.gdszoom',
		'lxCarousel':'../lib/jquery-lxCarousel/jquery.lxCarousel'
	},

	shim:{
		'gdszoom':['jquery'],
		'lxCarousel':['jquery']
	}
});