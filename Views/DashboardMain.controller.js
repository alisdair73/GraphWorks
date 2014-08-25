jQuery.sap.require("SAPWORKS.GraphWorks.views.BaseController");
SAPWORKS.GraphWorks.views.BaseController.extend("SAPWORKS.GraphWorks.views.DashboardMain", {

  displayDashboard: function(controlEvent){

    var view = this.getView();
    var listItem = view.byId(controlEvent.getSource().getId());

    var viewName = "SAPWORKS.GraphWorks.views." + listItem.data("viewName");

    this.getRouter().myNavToWithoutHash({
          currentView: this.getView(),
       targetViewName: viewName,
       targetViewType: "XML"
    });

  }
});