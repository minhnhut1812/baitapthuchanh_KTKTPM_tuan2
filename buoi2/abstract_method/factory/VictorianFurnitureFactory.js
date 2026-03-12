const FurnitureFactory = require("./FurnitureFactory");

const VictorianChair = require("../victorian/VictorianChair");
const VictorianSofa = require("../victorian/VictorianSofa");
const VictorianCoffeeTable = require("../victorian/VictorianCoffeeTable");

class VictorianFurnitureFactory extends FurnitureFactory {

    createChair() {
        return new VictorianChair();
    }

    createSofa() {
        return new VictorianSofa();
    }

    createCoffeeTable() {
        return new VictorianCoffeeTable();
    }

}

module.exports = VictorianFurnitureFactory;