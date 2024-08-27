/**
 * Демонстрация ошибочного решения.
 * Попытка сделать универсальный интерфейс вместо набора индивидуальных.
 * 1. TSC не может понять тип value.name в функции display
 * 2. Делать суперсущности неверно. Это бесконечно дибильная идея.
 *    Такой подход приводит к трудно понимаемому коду, который тяжело поддерживать.
 *    Этот код подвержен ошибкам.
 */
(
    () => {
        // interface CarInterface {
        //     name: 'car'
        //     wheels: number;
        // }
        //
        // interface ShipInterface {
        //     name: 'ship';
        //     sail: string;
        // }
        //
        // type VehicleUnion = CarInterface | ShipInterface;

        interface ComplexVehicleInterface {
            name: 'car' | 'ship';
            wheels?: number;
            sail?: string;
        }

        function display(
            value: ComplexVehicleInterface
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
                    const tscCheckValue: never = value; // error TS2322: Type 'ComplexVehicleInterface' is not assignable to type 'never'
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
