sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {

    var flippedFirst = false;

    return Controller.extend('thilo.dev.ui5.memory.controller.Game', {



        onInit: function() {


        },

        onMemoryTilePressed : function(oEvt) {
            /*
            if(flippedFirst) {
                this._flipBack(this.oFirstFlippedCard,oEvt.getSource())
                this.oFirstFlippedCard = null;
                flippedFirst = false;
            } else {
                flippedFirst = true;
                this.oFirstFlippedCard = oEvt.getSource();
                oEvt.getSource().flip();
            }
            */
            oEvt.getSource().flip();
        },


        _flipBack(oCtr1, oCtr2) {
            oCtr1.flip();
            oCtr2.flip();
        }
    });
});