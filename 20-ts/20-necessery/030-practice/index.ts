/**
 * https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/36
 */
(
    () => {
        // структура данных склада с одеждой
        interface ClothesWarehouse {
            jackets: "empty" | number;
            hats: "empty" | number;
            socks: "empty" | number;
            pants: "empty" | number;
        }

        // структура данных склада с канцтоварами
        interface StationeryWarehouse {
            scissors: "empty" | number;
            paper: "empty" | boolean;
        }

        // структура данных склада с бытовой техникой
        interface AppliancesWarehouse {
            dishwashers: "empty" | number;
            cookers: "empty" | number;
            mixers: "empty" | number;
        }

        // общая структура данных, наследуюет все данные из трех выше
        // + добавляет свои
        interface TotalWarehouse
            extends //
                ClothesWarehouse,
                StationeryWarehouse,
                AppliancesWarehouse //
        {
            deficit: boolean;
            date?: Date;
        }

        // главный объект со всеми данными, должен подходить под формат TotalWarehouse
        const
            totalData: TotalWarehouse = {
                jackets: 5,
                hats: "empty",
                socks: "empty",
                pants: 15,
                scissors: 15,
                paper: true,
                dishwashers: 3,
                cookers: "empty",
                mixers: 14,
                deficit: false,
                // date: undefined
            }
        ;

        // Реализуйте функцию, которая принимает в себя главный объект totalData нужного формата
        // и возвращает всегда строку
        // Функция должна отфильтровать данные из объекта и оставить только те названия товаров, у которых значение "empty"
        // и поместить их в эту строку. Если таких товаров нет - возвращается другая строка (см ниже)

        // С данным объектом totalData строка будет выглядеть:
        // "We need this items: hats, socks, cookers"
        // Товары через запятую, в конце её не должно быть. Пробел после двоеточия, в конце строки его нет.
        function printReport(
            data: TotalWarehouse
        ): string {
            let
                goods: string[] = [],
                result: string = ''
            ;
            for (const key in data) {
                if (data[key] === 'empty') {
                    goods.push(key);
                }
            }
            // goods = goods.sort();
            result = goods.join(', ');
            result = result.length > 0 ? `We need this items: ${result}` : "Everything fine";
            return result;
        }

        console.log(printReport(totalData));
    }
)();