jQuery.sap.declare("SAPWORKS.GraphWorks.Component");
jQuery.sap.require("SAPWORKS.GraphWorks.Router");

sap.ui.core.UIComponent.extend("SAPWORKS.GraphWorks.Component", {
    metadata: {
        name: "GraphWorks Dashboard",
        version: "1.0",
        includes: [],
        dependencies: {
            libs: ["sap.m", "sap.ui.layout", "sap.makit", "sap.viz"],
            components: []
        },

        rootView: "SAPWORKS.GraphWorks.Views.Application",

        routing: {
            config: {
             routerClass: SAPWORKS.GraphWorks.Router,
                viewType: "XML",
                viewPath: "SAPWORKS.GraphWorks.Views",
           targetControl: "mainApplication",
       targetAggregation: "pages",
             clearTarget: false
            },

            routes: [{
                pattern: "",
                   name: "dashboard",
                   view: "DashboardMain"
            }]
        }
    },

    init: function() {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);

        var oModel = new sap.ui.model.json.JSONModel("model/graph1.json");
        this.setModel(oModel);
        this.getRouter().initialize();
    }

});
