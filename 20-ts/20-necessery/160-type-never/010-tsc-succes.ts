/**
 *
 */
(
    () => {
        interface CarInterface {
            name: 'car'
            wheels: number;
        }

        interface ShipInterface {
            name: 'ship';
            sail: string;
        }

        type VehicleUnion = CarInterface | ShipInterface;

        function display(
            value: VehicleUnion
        ) {
            switch (value.name) {
                case 'car' :
                    console.log('type "CarInterface": wheels=', value.wheels);
                    break;
                case 'ship' :
                    console.log('type "ShipInterface": sail=', value.sail);
                    break;
                default:
                    console.log('type "never" or something', value)
                    const tscCheckValue : never = value; // OK. Ошибки нет т.к. в case обработаны все варианты из VehicleUnion
                    break;
            }
        }

        display({
            name: 'car',
            wheels: 4
        });

        display({
            name: 'ship',
            sail: "one sail"
        });
    }
)();
