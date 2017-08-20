sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel'
], function (UIComponent, JSONModel) {

    var out = ['sap-icon://paging']

    function shuffle(array) {
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }



    return UIComponent.extend('thilo.dev.ui5.memory.Component', {
        metadata: {
            manifest: 'json'
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
            this.createModelData();
        },

        createModelData: function () {

            var aIcons = sap.ui.core.IconPool
                .getIconNames()
            var oData = shuffle(aIcons)
                .slice(0, 10)
                .map(function (iconName) {
                    return icon = {
                        iconName: iconName
                    }

                });
            oData = oData.concat(oData);

            var oModel = new JSONModel({
                gameSet: oData
            });

            this.setModel(oModel, 'game')
        }

    })
})