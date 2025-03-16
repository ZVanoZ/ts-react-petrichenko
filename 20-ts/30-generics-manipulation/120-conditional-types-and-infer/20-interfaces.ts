{

    demo1();

    function demo1() {
        interface User<T extends 'created' | Date> {
            created: T extends 'created' ? 'created' : Date;
        }

        const user: User<'created'> = {
            created: "created"
        }
    }

    demo2();

    function demo2() {
        interface IDataFromUser {
            weight: string;
        }

        interface IDataFromBase {
            calories: number;
        }

        type FromUserOrBase<T extends string | number> = T extends string ? IDataFromUser : IDataFromBase;

        demo2_1();

        function demo2_1() {
            let
                data1 = {
                    weight: '1t'
                }
            ;
            const dataFromUser: FromUserOrBase<typeof data1.weight> = data1;

            let
                data2 = {
                    calories: 1000
                }
            ;
            const dataFromBase: FromUserOrBase<typeof data2.calories> = data2;
        }

        demo2_2();

        function demo2_2() {
            function calculateDailyCalories(data: string): IDataFromUser;
            function calculateDailyCalories(data: number): IDataFromBase;
            function calculateDailyCalories(
                numOrStr: string | number
            ): IDataFromUser | IDataFromBase//
            {
                if (typeof numOrStr === 'string') {
                    const obj: IDataFromUser = {
                        weight: numOrStr,
                    }
                    return obj;
                } else {
                    const obj: IDataFromBase = {
                        calories: 0

                    }
                    return obj;
                }
            }
        }

        demo2_3();

        function demo2_3() {
            // function calculateDailyCalories(data: string): IDataFromUser;
            // function calculateDailyCalories(data: number): IDataFromBase;
            function calculateDailyCalories<T extends string | number>(
                numOrStr: T
            ): T extends string ? IDataFromUser : IDataFromBase //
            {
                if (typeof numOrStr === 'string') {
                    const obj: IDataFromUser = {
                        weight: numOrStr,
                    }
                    return obj as FromUserOrBase<T>;
                } else {
                    const obj: IDataFromBase = {
                        calories: 0

                    }
                    //return obj as T extends string ? IDataFromUser : IDataFromBase;
                    return obj as FromUserOrBase<T>;
                }
            }
        }
    }
}
