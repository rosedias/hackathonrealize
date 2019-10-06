const observableModule = require("tns-core-modules/data/observable");

function BrowseViewModel() {
    const viewModel = observableModule.fromObject({
        userName: "Larissa de Macedo Machado",
        cartao: "Conta Prime"
        /* Add your view model properties here */
    });

    return viewModel;
}

module.exports = BrowseViewModel;
