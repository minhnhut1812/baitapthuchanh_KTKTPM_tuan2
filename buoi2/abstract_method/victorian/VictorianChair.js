const Chair = require("../products/Chair");

class VictorianChair extends Chair {
    sitOn() {
        console.log("Sitting on Victorian Chair");
    }
}

module.exports = VictorianChair;