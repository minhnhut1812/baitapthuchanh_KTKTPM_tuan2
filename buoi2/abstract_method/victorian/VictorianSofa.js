const Sofa = require("../products/Sofa");

class VictorianSofa extends Sofa {
    lieOn() {
        console.log("Lying on Victorian Sofa");
    }
}

module.exports = VictorianSofa;