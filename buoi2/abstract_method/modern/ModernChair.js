const Chair = require("../products/Chair");

class ModernChair extends Chair {
    sitOn() {
        console.log("Sitting on Modern Chair");
    }
}

module.exports = ModernChair;