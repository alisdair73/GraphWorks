jQuery.sap.require("SAPWORKS.GraphWorks.views.BaseController");
//jQuery.sap.require("sap.viz.ui5.StackedColumn");
SAPWORKS.GraphWorks.views.BaseController.extend("SAPWORKS.GraphWorks.views.DashboardScenarioWithSteps", {

    onInit: function() {
        this.getView().addEventDelegate({
            onBeforeShow: jQuery.proxy(function(oEvent) {
                this.onBeforeShow(oEvent);
            }, this)
        });
    },
    onBeforeShow: function(oEvent) {
        var oView = this.getView();
oView.byId("DashboardScenarioWithStepsChart").invalidate()
//        var oModel = oView.getModel();
//var oModel = new sap.ui.model.json.JSONModel("model/graph1.json");


        //oView.byId("DashboardScenarioWithStepsChart").setModel(oModel);
       // oView.setModel(sap.ui.core.UIComponent.getModel());
    }
});