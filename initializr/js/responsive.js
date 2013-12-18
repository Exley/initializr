/* ====================================================================================================
	LISTENER TAILLE ÉCRAN POUR RESPONSIVE
	==================================================================================================== */
var responsive, new_responsive, W, width_max_mobile=767, width_min_tablet=768, width_max_tablet=979, width_min_desktop=980, width_max_desktop=1365, width_min_full=1366;

jQuery(window).resize(function(){
	jQuery('html').css('overflow-y', 'hidden');
	W = jQuery(window).width();
	jQuery('html').css('overflow-y', 'visible');
	new_responsive = '';
	
	if (W<=width_max_mobile){									new_responsive = 'mobile';
	}else if (W>=width_min_tablet && W<=width_max_tablet){ 		new_responsive = 'tablet';
	}else if (W>=width_min_desktop && W<=width_max_desktop){ 	new_responsive = 'desktop';
	}else if (W>=width_min_full){ 								new_responsive = 'full'; }
	
	if(responsive!=new_responsive){
		switch (new_responsive){
			case 'full':
				
				break;
			case 'desktop':
				
				break;
			case 'tablet':
				
				break;
			case 'mobile':
				
				break;
		}
		responsive=new_responsive;
		console.log("[ResponsiveListener] Device or screensize detected : " + responsive +"("+W+" px)");
	}
}).resize().scroll(function(){
	
});
