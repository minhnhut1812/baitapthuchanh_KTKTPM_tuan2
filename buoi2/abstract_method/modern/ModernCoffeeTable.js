const CoffeeTable = require("../products/CoffeeTable");

class ModernCoffeeTable extends CoffeeTable {
    putCoffee() {
        console.log("Putting coffee on Modern Coffee Table");
    }
}

module.exports = ModernCoffeeTable;