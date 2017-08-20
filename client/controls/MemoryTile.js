sap.ui.define([
    "sap/ui/core/Control",
    "sap/ui/core/Icon"
], function (Control, Icon) {
    "use strict";


    var iconPrefix = "sap-icon://"

    return Control.extend("thilo.dev.ui5.memory.controls.MemoryTile", {



        metadata: {
            properties: {
                iconSrc: {
                    type: "string", defaultValue: "accept"
                },
                flipped: {
                    type: "boolean", defaultValue: false
                }
            },
            aggregations: {
                frontside: {
                    type: "sap.ui.core.Icon", multiple: false, visibility: "hidden"
                },
                backside: {
                    type: "sap.ui.core.Icon", multiple: false, visibility: "hidden"
                }
            },
            events: {
                press: {
                },
                tap: {
                }
            }
        },
        init: function () {
            this.setAggregation("frontside", new Icon({
                src: iconPrefix + "sap-ui5",
                size: "110px",
                hoverColor: "#7ed0ff"
            }));
            this.setAggregation("backside", new Icon({
                src: iconPrefix + this.getIconSrc(),
                size: "110px",
                hoverColor: "#7ed0ff"
            }));
            
        },

        ontap: function () {
            this.firePress()
        },

        onBeforeRendering: function(){
           this.bSetupDone = true;
        },

        onpress: function () {

        },

        flip: function (oControl) {
            if(this.getFlipped()){
                this.removeStyleClass("hover");
                this.setFlipped(false);

            } else {
                this.addStyleClass("hover");
                this.setFlipped(true);
            }
        },

        renderer: function (oRM, oControl) {
            oRM.write("<div");
            oRM.writeControlData(oControl);
            oRM.addClass("MemoryTileFrame")
            oRM.addClass("flip-container")
            oRM.writeClasses();

            oRM.write(">");

            oRM.write("<div")
            oRM.addClass("");
            oRM.addClass("flipper");
            oRM.writeClasses();
            oRM.write(">")

            //Front
            oRM.write("<div")
            oRM.addClass("back MemoryTileTile")
            oRM.writeClasses();
            oRM.write(">")
            oRM.renderControl(new Icon({
                src: iconPrefix + oControl.getIconSrc(),
                size: "110px",
                hoverColor: "#7ed0ff"
            }));
            oRM.write("</div>");

            oRM.write("<div")
            oRM.addClass("front MemoryTileTile shake")
            oRM.writeClasses();
            oRM.write(">")
            oRM.renderControl(oControl.getAggregation("frontside"))
            oRM.write("</div>");

            oRM.write("</div>");
            oRM.write("</div>");
        }
    });
});