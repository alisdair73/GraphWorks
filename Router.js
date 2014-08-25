jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("sap.ui.core.routing.Router");
jQuery.sap.declare("SAPWORKS.GraphWorks.Router");

sap.ui.core.routing.Router.extend("SAPWORKS.GraphWorks.Router", {

	constructor : function() {
		sap.ui.core.routing.Router.apply(this, arguments);
		this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this);
	},
	myNavToWithoutHash : function (oOptions) {
		var oApp = this._findApp(oOptions.currentView);
		var oView = this.getView(oOptions.targetViewName, oOptions.targetViewType);
		oApp.addPage(oView);
		oApp.to(oView.getId(), "slide", oOptions.data); 
	},
	backWithoutHash : function (oCurrentView) {
		var oApp = this._findApp(oCurrentView);
		oApp.back();
	},
	destroy : function() {
		sap.ui.core.routing.Router.prototype.destroy.apply(this, arguments);
		this._oRouteMatchedHandler.destroy();
	},
	_findApp : function(oControl) {
		var sAncestorControlName = "mainApplication";
		if (oControl instanceof sap.ui.core.mvc.View && oControl.byId(sAncestorControlName)) {
			return oControl.byId(sAncestorControlName);
		}

		return oControl.getParent() ? this._findApp(oControl.getParent()) : null;
	}
});
