package products;

public class Truck implements Transport {

    @Override
    public void deliver() {
        System.out.println("Delivering by Truck on the road");
    }

}