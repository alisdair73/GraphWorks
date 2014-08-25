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

      //MATT: If you add this code it works
       
        // var oView = this.getView();
        // var oModel = new sap.ui.model.json.JSONModel("model/graph1.json");
        // oView.setModel(oModel);
    }
});