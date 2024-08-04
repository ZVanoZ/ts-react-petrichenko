/**
 * Пример использования модификатора "readonly" при объявлении классов.
 *
 * Результат: выдаст ошибку на этапе компиляции.
 * Причина: пытаемся присвоить значение полю с модификатором "readonly".
 */
(
    () => {
        class Animal {
            readonly name: string = 'name';
        }

        let
            animal = new Animal()
        ;
        animal.name = 'Dog'; // error TS2540: Cannot assign to 'name' because it is a read-only property.

        console.log('animal', animal);
    }
)();
