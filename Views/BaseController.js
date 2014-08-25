sap.ui.core.mvc.Controller.extend("SAPWORKS.GraphWorks.views.BaseController", {
    getRouter : function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
    },
    navBack: function() {
        this.getRouter().backWithoutHash(this.getView());
    }
});