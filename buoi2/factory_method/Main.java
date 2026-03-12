import creator.RoadLogistics;
import creator.SeaLogistics;
import creator.Logistics;

public class Main {

    public static void main(String[] args) {

        Logistics logistics;

        String type = "road";

        if (type.equals("road")) {
            logistics = new RoadLogistics();
        } else {
            logistics = new SeaLogistics();
        }

        logistics.planDelivery();

    }

}
