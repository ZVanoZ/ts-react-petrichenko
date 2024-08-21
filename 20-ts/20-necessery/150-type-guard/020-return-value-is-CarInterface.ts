(
    () => {
        interface CarInterface {
            engine: string;
            wheels: number;
        }

        interface ShipInterface {
            engine: string;
            sail: string;
        }

        function isCar(
            value: CarInterface | ShipInterface
        ): value is CarInterface //
        {
            return 'wheels' in value;
        }

        let
            randValue = Math.round(100 * Math.random()),
            someValue: CarInterface | ShipInterface
        ;
        someValue = (
            (isCreateCar): CarInterface | ShipInterface => {
                if (isCreateCar) {
                    return {
                        engine: 'Car engine',
                        wheels: 4
                    }
                }
                return {
                    engine: 'Ship engine',
                    sail: 'One sail on the ship'
                }
            }
        )(randValue > 50);

        if (isCar(someValue)) {
            console.log('print car', "\n* engine:", someValue.engine, "\n* wheels:", someValue.wheels,);
        } else {
            console.log('print sheep', "\n* engine:", someValue.engine, "\n* sail:", someValue.sail);
        }


    }
)();
