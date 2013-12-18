/* ====================================================================================================
	JQUERY PLUGIN TEMPLATE
	==================================================================================================== */
/*
*	Project : 
*	Author : J�r�me Cany
*	Date : 
*	Description : Template de plugin jQuery
*	Mots-cl� : jQuery, plugins, encapsulation
*	jQuery version : 
*/

(function($) {
	
	// pluginName = le nom de votre plugin
	$.pluginName = function(element, options) {
		
		/* OPTIONS PAR D�FAUT */
		/* ==================================================================================================== */
		// Propri�t� priv�e, accessible uniquement depuis l'int�rieur du plugin
		var defaults = {
			optionName: 'the value',
			// Si le fonctionnement du plugin est li� � des �v�nements, vous pouvez impl�menter des fonctions de callback autour de ces �v�nements.
			// Executez ces fonctions avant ou apr�s les �v�nements de votre plugin, pour que les utilisateurs puissent customiser les �v�nements sans changer le code du plugin.
			// 2 m�thodes callback pour d�monstration - � supprimer!
			beforeCallBack : function() {
				
			},
			afterCallBack : function() {
				
			}
		}
		
		// Pour �viter les confusions, utiliser la variable "plugin" pour r�f�rencer l'instance courante de l'objet
		var plugin = this;
		
		// Ceci pr�vient le merge par d�faut des options par d�faut et des options utilisateur (merge final des options r�alis� apr�s dans init())
		// Les propri�t�s du plugin seront disponibles via un objet type :
		// depuis l'int�rieur du plugin -> plugin.settings.propertyName
		// depuis l'ext�rieur du plugin -> element.data('pluginName').settings.propertyName, o� "element" est l'�l�ment auquel est attach� le plugin lors de l'init (id, classe...)
		plugin.settings = {}
		
		var $element = $(element),	// reference to the jQuery version of DOM element
		element = element;			// reference to the actual DOM element
		
		/* CONSTRUCTEUR DU PLUGIN, APPEL� A LA CR�ATION DE L'OBJET */
		/* ==================================================================================================== */
		plugin.init = function() {
			// Les propri�t�s finales de l'objet sont un merge des valeurs par d�faut et des options utilisateur (s'il y en a)
			plugin.settings = $.extend({}, defaults, options);
			// Votre code ici...
			//
			//
			//
			//
		}
		
		/* M�THODES PUBLIQUES */
		/* ==================================================================================================== */
		// Ces m�thodes peuvent �tre invoqu�es comme ceci :
		// depuis l'int�rieur du plugin -> plugin.nomMethode(arg1, arg2, ... argn);
		// depuis l'ext�rieur du plugin -> element.data('pluginName').publicMethod(arg1, arg2, ... argn); o� "element" est l'�l�ment auquel est attach� le plugin

		// Une m�thode publique pour d�monstration - � supprimer!
		plugin.ma_methode_public = function() {
			// Votre code ici...
		}
		
		/* M�THODES PRIV�ES */
		/* ==================================================================================================== */
		// Ces m�thodes peuvent �tre invoqu�es uniquement depuis l'int�rieur du plugin de cette fa�on :
		// nomMethode(arg1, arg2, ... argn);

		// Une m�thode priv�e pour d�monstration - � supprimer!
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
		// It�re sur les �l�ments du DOM auxquels est attach� le plugin
		return this.each(function() {
			// Si le plugin n'a pas encore �t� attach� � l'�l�ment
			if (undefined == $(this).data('pluginName')) {
				// Cr�e une nouvelle instance du plugin
				// Passe l'�l�ment du DOM et les options utilisateurs en arguments
				var plugin = new $.pluginName(this, options);
				// In the jQuery version of the element, store a reference to the plugin object
				// Vous pouvez acc�der ensuite au plugin et � ses m�thodes et propri�t�s via :
				// element.data('pluginName').publicMethod(arg1, arg2, ... argn) OU element.data('pluginName').settings.propertyName
				$(this).data('pluginName', plugin);
			}
		});
	}
	
})(jQuery);

/* EXEMPLES D'UTILISATION D'UN PLUGIN */
/* ==================================================================================================== */
jQuery(document).ready(function() {
    // Attacher votre plugin � un(des) �l�ment(s) (s'en servir quoi :-)
    //jQuery('#element').pluginName({'optionName': 'the value'});
    // Invoquer une m�thode publique
    //jQuery('#element').data('pluginName').foo_public_method();
    // R�cup�rer valeur d'une propri�t�
    //jQuery('#element').data('pluginName').settings.foo;
});


