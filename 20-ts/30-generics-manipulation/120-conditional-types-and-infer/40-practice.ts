(
    /**
     * Задача на собеседовании: Нужно создать generic тип, при помощи которого объявить массив данных этого типа.
     *
     * Смысл задачи не совсем понятен.
     * Поэтому делаю как понял.
     * Имеем какой-то массив данных на входе.
     * Нужно вычислить тип данных элемента и создать новый массив на основании этих данных.
     * Например, на входе массив чисел, на выходе такой же массив, но числа увеличены вдвое.
     */
    () => {
        console.log('-- MyAnswer');

        type TDataGeneric<T> = T extends (data: infer TData) => infer TData
            ? TData
            : undefined;
        type TDoubleData = TDataGeneric<typeof doubleData>;

        const inpData: TDoubleData[] = [1, 2, 3, 4, 5];
        let outData: TDoubleData[] = [];
        inpData.forEach(
            (dataItem: TDoubleData) => {
                const dataRes: TDoubleData = doubleData(dataItem);
                outData.push(dataRes);
            }
        )

        console.log('inpData', inpData); // inpData [ 1, 2, 3, 4, 5 ]
        console.log('outData', outData); // outData [ 2, 4, 6, 8, 10 ]

        /**
         * Увеличивает значение вдвое.
         * @param data
         */
        function doubleData(
            data: number //
        ): number//
        {
            return 2 * data;
        }
    }
)();


(
    /**
     * Ответ учителя.
     * Оказалось, generic тип нужно использовать на этапе ОБЪЯВЛЕНИЯ массива данных, а не на
     * этапе преобразования имеющихся массивов данных.
     */
    () => {
        console.log('-- TeacherAnswer');
        type ToArray<T> = T extends any ? T[] : number;

        const aNum : ToArray<number> = [1, 2, 3, 4, 5];
        console.log('aNum', aNum);

        const aStr:ToArray<string> = ['-1-', '-2-', '-3-'];
        console.log('aStr', aStr);
    }
)();