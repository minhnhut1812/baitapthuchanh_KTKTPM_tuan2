const FurnitureFactory = require("./FurnitureFactory");

const ModernChair = require("../modern/ModernChair");
const ModernSofa = require("../modern/ModernSofa");
const ModernCoffeeTable = require("../modern/ModernCoffeeTable");

class ModernFurnitureFactory extends FurnitureFactory {

    createChair() {
        return new ModernChair();
    }

    createSofa() {
        return new ModernSofa();
    }

    createCoffeeTable() {
        return new ModernCoffeeTable();
    }

}

module.exports = ModernFurnitureFactory;