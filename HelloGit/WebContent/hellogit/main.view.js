sap.ui.jsview("hellogit.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf hellogit.main
	*/ 
	getControllerName : function() {
		return "hellogit.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf hellogit.main
	*/ 
	createContent : function(oController) {
		//Just a comment
		return new sap.ui.commons.Label({text:"Hello SAPUI5-Git !"});
	}

});
