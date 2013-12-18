/* ====================================================================================================
	JQUERY PLUGIN TEMPLATE
	==================================================================================================== */
/*
*	Project : 
*	Author : Jérôme Cany
*	Date : 
*	Description : Template de plugin jQuery
*	Mots-clé : jQuery, plugins, encapsulation
*	jQuery version : 
*/

(function($) {
	
	// pluginName = le nom de votre plugin
	$.pluginName = function(element, options) {
		
		/* OPTIONS PAR DÉFAUT */
		/* ==================================================================================================== */
		// Propriété privée, accessible uniquement depuis l'intérieur du plugin
		var defaults = {
			optionName: 'the value',
			// Si le fonctionnement du plugin est lié à des évènements, vous pouvez implémenter des fonctions de callback autour de ces évènements.
			// Executez ces fonctions avant ou après les évènements de votre plugin, pour que les utilisateurs puissent customiser les évènements sans changer le code du plugin.
			// 2 méthodes callback pour démonstration - à supprimer!
			beforeCallBack : function() {
				
			},
			afterCallBack : function() {
				
			}
		}
		
		// Pour éviter les confusions, utiliser la variable "plugin" pour référencer l'instance courante de l'objet
		var plugin = this;
		
		// Ceci prévient le merge par défaut des options par défaut et des options utilisateur (merge final des options réalisé après dans init())
		// Les propriétés du plugin seront disponibles via un objet type :
		// depuis l'intérieur du plugin -> plugin.settings.propertyName
		// depuis l'extérieur du plugin -> element.data('pluginName').settings.propertyName, où "element" est l'élément auquel est attaché le plugin lors de l'init (id, classe...)
		plugin.settings = {}
		
		var $element = $(element),	// reference to the jQuery version of DOM element
		element = element;			// reference to the actual DOM element
		
		/* CONSTRUCTEUR DU PLUGIN, APPELÉ A LA CRÉATION DE L'OBJET */
		/* ==================================================================================================== */
		plugin.init = function() {
			// Les propriétés finales de l'objet sont un merge des valeurs par défaut et des options utilisateur (s'il y en a)
			plugin.settings = $.extend({}, defaults, options);
			// Votre code ici...
			//
			//
			//
			//
		}
		
		/* MÉTHODES PUBLIQUES */
		/* ==================================================================================================== */
		// Ces méthodes peuvent être invoquées comme ceci :
		// depuis l'intérieur du plugin -> plugin.nomMethode(arg1, arg2, ... argn);
		// depuis l'extérieur du plugin -> element.data('pluginName').publicMethod(arg1, arg2, ... argn); où "element" est l'élément auquel est attaché le plugin

		// Une méthode publique pour démonstration - à supprimer!
		plugin.ma_methode_public = function() {
			// Votre code ici...
		}
		
		/* MÉTHODES PRIVÉES */
		/* ==================================================================================================== */
		// Ces méthodes peuvent être invoquées uniquement depuis l'intérieur du plugin de cette façon :
		// nomMethode(arg1, arg2, ... argn);

		// Une méthode privée pour démonstration - à supprimer!
		var ma_methode_privee = function() {
			// Votre code ici...
		}
		
		/* LANCES TON PLUGIN (appelle le constructeur) */
		/* ==================================================================================================== */
		plugin.init();
		
	}
	
	/* AJOUTER LE PLUGIN A L'OBJET JQUERY.FN */
	/* ==================================================================================================== */
	$.fn.pluginName = function(options) {
		// Itère sur les éléments du DOM auxquels est attaché le plugin
		return this.each(function() {
			// Si le plugin n'a pas encore été attaché à l'élément
			if (undefined == $(this).data('pluginName')) {
				// Crée une nouvelle instance du plugin
				// Passe l'élément du DOM et les options utilisateurs en arguments
				var plugin = new $.pluginName(this, options);
				// In the jQuery version of the element, store a reference to the plugin object
				// Vous pouvez accéder ensuite au plugin et à ses méthodes et propriétés via :
				// element.data('pluginName').publicMethod(arg1, arg2, ... argn) OU element.data('pluginName').settings.propertyName
				$(this).data('pluginName', plugin);
			}
		});
	}
	
})(jQuery);

/* EXEMPLES D'UTILISATION D'UN PLUGIN */
/* ==================================================================================================== */
jQuery(document).ready(function() {
    // Attacher votre plugin à un(des) élément(s) (s'en servir quoi :-)
    //jQuery('#element').pluginName({'optionName': 'the value'});
    // Invoquer une méthode publique
    //jQuery('#element').data('pluginName').foo_public_method();
    // Récupérer valeur d'une propriété
    //jQuery('#element').data('pluginName').settings.foo;
});


