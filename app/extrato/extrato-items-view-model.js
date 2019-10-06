const observableModule = require("tns-core-modules/data/observable");

function HomeItemsViewModel() {
    const viewModel = observableModule.fromObject({
        gruposGastos: [
            { type: "C", count: 100 },
            { type: "R", count: 15 },
            { type: "S", count: 120 },
            { type: "H", count: 45 },
            { type: "M", count: 300 }
          ],
        items: [
            {
                date: "01/10",
                tag: "Comida",
                name: "Produto 1",
                value: "R$ 17,04",
                description: "Produto 1"
            },
            {
                date: "02/10",
                tag: "Roupas",
                name: "Produto 2",
                value: "R$ 20,45",
                description: "Produto 2"
            },
            {
                date: "04/10",
                tag: "Saúde",
                name: "Produto 3",
                value: "R$ 10,40",
                description: "Produto 3"
            },
            {
                date: "07/10",
                tag: "Serviço",
                name: "Produto 4",
                value: "R$ 150,04",
                description: "Produto 4"
            },
            {
                date: "09/10",
                tag: "Roupas",
                name: "Produto 5",
                value: "R$ 58,04",
                description: "Produto 5"
            },
            {
                date: "11/10",
                tag: "Comida",
                name: "Produto 6",
                value: "R$ 95,47",
                description: "Produto 6"
            },
            {
                date: "14/10",
                tag: "Saúde",
                name: "Produto 7",
                value: "R$ 98,36",
                description: "Produto 7"
            },
            {
                date: "15/10",
                tag: "Roupas",
                name: "Produto 8",
                value: "R$ 43,54",
                description: "Produto 8"
            },


        ]
    });

    return viewModel;
}

module.exports = HomeItemsViewModel;
