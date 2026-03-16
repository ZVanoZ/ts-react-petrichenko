(() => {
    type FuelTypeEnum = 'Electric' | 'Gas';
    abstract class AbstractCar {
        protected model: string = '';

        // @ai-review|Анализ вашего решения/Дата: "2026-03-16 00:00"/Пробелы в знаниях/2|Можно глубже закрепить материал, попробовав:
        // @ai-review|Анализ вашего решения/Дата: "2026-03-16 00:00"/Рекомендованные шаги/1|ввести абстрактные свойства
        protected abstract fuelType : FuelTypeEnum;

        abstract prepare(): boolean;

        start(): void {
            console.log('AbstractCar.start');
            console.log('AbstractCar|fuelType', this.fuelType);

            this.prepare();
            console.log('AbstractCar.start', 'Поехали');
        }
    }

    class GasCar extends AbstractCar {
        protected fuelType: FuelTypeEnum = "Gas";

        // Абстрактные методы допустимы только в абстрактном классе
        //abstract checkTires(): void; //error TS1244: Abstract methods can only appear within an abstract class.

        override prepare(): boolean {
            console.log('GasCar.prepare', 'Проверить уровень масла в двигателе');
            console.log('GasCar.prepare', 'Проверить уровень охлаждающей жидкости в бачке');
            return true;
        }
    }

    class ElectricCar extends AbstractCar {
        /**
         * @note Неявно меняем модификатор с protected на public (для демонстрации)
         */
        fuelType: FuelTypeEnum = "Electric";

        override prepare(): boolean {
            console.log('ElectricCar.prepare', 'Проверить заряд аккумуляторов');
            return true;
        }
    }

    // Объект абстрактного класса создать нельзя.
    //const car = new AbstractCar(); //  error TS2511: Cannot create an instance of an abstract class.

    (() => {
        console.log('-- GasCar');
        const car = new GasCar();
        car.start();
        //car.fuelType = "Electric"; // error TS2445: Property 'fuelType' is protected and only accessible within class 'GasCar' and its subclasses.
    })();

    (() => {
        console.log('-- ElectricCar');
        const car = new ElectricCar();
        car.start();
        car.fuelType = "Gas"; // Тут присвоение сработает т.к. в ElectricCar изменен модификатор доступа для свойства fuelType
    })();

    /*
-- GasCar
AbstractCar.start
GasCar.prepare Проверить уровень масла в двигателе
GasCar.prepare Проверить уровень охлаждающей жидкости в бачке
AbstractCar.start Поехали

-- ElectricCar
AbstractCar.start
ElectricCar.prepare Проверить заряд аккумуляторов
AbstractCar.start Поехали
    */


})();
//(()=>{})();