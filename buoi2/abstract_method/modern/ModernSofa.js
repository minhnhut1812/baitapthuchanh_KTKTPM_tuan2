const Sofa = require("../products/Sofa");

class ModernSofa extends Sofa {
    lieOn() {
        console.log("Lying on Modern Sofa");
    }
}

module.exports = ModernSofa;