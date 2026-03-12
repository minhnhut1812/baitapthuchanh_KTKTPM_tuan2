const CoffeeTable = require("../products/CoffeeTable");

class VictorianCoffeeTable extends CoffeeTable {
    putCoffee() {
        console.log("Putting coffee on Victorian Coffee Table");
    }
}

module.exports = VictorianCoffeeTable;