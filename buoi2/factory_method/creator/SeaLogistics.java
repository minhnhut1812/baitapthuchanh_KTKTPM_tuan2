package creator;

import products.Transport;
import products.Ship;

public class SeaLogistics extends Logistics {

    @Override
    public Transport createTransport() {
        return new Ship();
    }

}