/**
 * В этом примере добавили в VehicleUnion тип AirplaneInterface, что привело
 * к ошибке "TS2322" на этапе компиляции.
 *
 * Это весьма полезный инструмент для долгосрочных проектов.
 * Позволяет на этапе компиляции отловить ошибки, связанные с расширением функционала.
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

        interface AirplaneInterface {
            name: "airplane";
            wings: string;
        }

        type VehicleUnion = CarInterface | ShipInterface | AirplaneInterface;

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
                    const tscCheckValue: never = value; //  error TS2322: Type 'AirplaneInterface' is not assignable to type 'never'.
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

        display({
            name: 'airplane',
            wings: "two wings"
        });
    }
)();
