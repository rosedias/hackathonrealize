const BrowseViewModel = require("./cashback-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new BrowseViewModel();
}

exports.onNavigatingTo = onNavigatingTo;


function onItemTap(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "cashback/opcoes/cashback-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function onItemTapRenner(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "cashback/opcoes/cashback-item-detail-renner",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

function onItemTapMeuEstilo(args) {
    const view = args.view;
    const page = view.page;
    const tappedItem = view.bindingContext;

    page.frame.navigate({
        moduleName: "cashback/opcoes/cashback-item-detail-meuestilo",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}

exports.onItemTap = onItemTap;
exports.onItemTapRenner = onItemTapRenner;
exports.onItemTapMeuEstilo = onItemTapMeuEstilo;
exports.onNavigatingTo = onNavigatingTo;