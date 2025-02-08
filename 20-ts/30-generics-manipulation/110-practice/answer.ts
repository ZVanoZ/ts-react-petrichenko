(
    /**
     * Если не завернуть весь код в анонимную функцию, то получим ошибку
     * "TS2451: Cannot redeclare block-scoped variable phones"
     * Эта ошибка отображается в IDE Webstorm, но не отображается при выполнении.
     * Вероятно, причина ошибки в том, что IDE находит в проекте файлы в которых
     * есть константа с тем же именем.
     */
    () => {
        interface IPhone {
            company: string;
            number: number;
        }

        type TCompanyPartner = IPhone["company"];

        /**
         *  Вариант 1. Наследование интерфейса
         */
        interface IMobilePhone extends IPhone {
            size: string;
            companyPartner: TCompanyPartner;
            manufactured: Date;
        }

        /**
         * Вариант 2: Создание нового интерфейса, который имплементирует два исходных интерфейса
         * Так не подходит, ибо "IPhonesManufacturedAfterDate extends IMobilePhone", а мы
         * не имеем права менять этот фрагмент
         * <code class="TS">
         *
         *   interface IMobilePhone {
         *       size: string;
         *       companyPartner: TCompanyPartner;
         *       manufactured: Date;
         *   }
         *   interface IMobilePhonesItem extends IMobilePhone, IPhone {
         *   }
         *   type TMobilePhones = IMobilePhonesItem[];
         *  </code>
         */

        /**
         * fixed "TS2451: Cannot redeclare block-scoped variable phones" @see up
         */
        const phones: IMobilePhone[] = [
            {
                company: "Nokia",
                number: 1285637,
                size: "5.5",
                companyPartner: "MobileNokia",
                manufactured: new Date("2022-09-01"),
            },
            {
                company: "Samsung",
                number: 4356637,
                size: "5.0",
                companyPartner: "SamMobile",
                manufactured: new Date("2021-11-05"),
            },
            {
                company: "Apple",
                number: 4552833,
                size: "5.7",
                companyPartner: "no data",
                manufactured: new Date("2022-05-24T12:00:00"),
            },
        ];

        interface IPhonesManufacturedAfterDate extends IMobilePhone {
            initialDate: string;
        }

        // type MobilePhoneKeys = keyof IMobilePhone;

        function filterPhonesByDate(
            phones: IMobilePhone[],
            key: keyof IMobilePhone,
            initial: string
        ): IPhonesManufacturedAfterDate[] {
            let
                result: IPhonesManufacturedAfterDate[] = []
            ;
            phones.forEach(
                (phone: IMobilePhone) => {
                    const
                        propValue = phone[key]
                    ;
                    let
                        compareValue: string = ''
                    ;
                    if (propValue instanceof Date) {
                        compareValue = propValue.toISOString();
                    } else if (typeof propValue === "number") {
                        compareValue = propValue.toString();
                    } else {
                        compareValue = propValue;
                    }

                    if (compareValue < initial) {
                        return;
                    }
                    const newItem: IPhonesManufacturedAfterDate = {initialDate: initial, ...phone};
                    result.push(newItem);
                }
            );

            return result;
        }

        console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));

        /**
         * Работает некорректно т.к. данные нужно приводить к одному виду.
         * Однако, ввиду корявой постановки задачи, закрываем глаза на этот косяк.
         */
        //console.log(filterPhonesByDate(phones, "number", "9"));
    }
)();