class FurnitureFactory {
    createChair() {
        throw new Error("createChair() must be implemented");
    }

    createSofa() {
        throw new Error("createSofa() must be implemented");
    }

    createCoffeeTable() {
        throw new Error("createCoffeeTable() must be implemented");
    }
}

module.exports = FurnitureFactory;