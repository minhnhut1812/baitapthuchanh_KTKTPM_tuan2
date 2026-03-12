const ModernFurnitureFactory = require("./factory/ModernFurnitureFactory");
const VictorianFurnitureFactory = require("./factory/VictorianFurnitureFactory");

// chọn loại family
const style = "modern";

let factory;

if (style === "modern") {
    factory = new ModernFurnitureFactory();
} else {
    factory = new VictorianFurnitureFactory();
}

const chair = factory.createChair();
const sofa = factory.createSofa();
const table = factory.createCoffeeTable();

chair.sitOn();
sofa.lieOn();
table.putCoffee();