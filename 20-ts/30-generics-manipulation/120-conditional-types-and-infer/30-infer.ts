(
    () => {

        demo1();

        function demo1() {
            type GetElementType<T> = T extends Array<infer TItem> ? TItem : T;


            const
                data1 = [3, 2, 1],
                data1item0: GetElementType<typeof data1> = data1[0]
            ;
            console.log('data0item', data1item0);             // data0item 3
            console.log('data0item type', typeof data1item0); // data0item type number

            const
                data2 = ['A', "B", "C"],
                data2item1: GetElementType<typeof data2> = data2[1]
            ;
            console.log('data2item1', data2item1);             // data2item1 B
            console.log('data2item1 type', typeof data2item1); // data2item1 type string


            // Initial type: number
            type TExOfData1 = GetElementType<typeof data1>;
            const ex1: TExOfData1 = 123321;
            console.log('ex1', ex1);             // ex1 123321
            console.log('ex1 type', typeof ex1); // ex1 type number

            type TExOfData2 = GetElementType<typeof data2>;
            const ex2: TExOfData2 = 'Hello, World!';
            console.log('ex2', ex2);             // ex2 Hello, World!
            console.log('ex2 type', typeof ex2); // ex2 type string
        }

        demo2();

        /**
         * @see https://scriptdev.ru/guide/043/#_3
         */
        function demo2() {
            type ParamType<T> = T extends (p: infer U) => void
                ? U
                : undefined;

            function f0(param: number): void {
            }

            function f1(param: string): void {
            }

            function f2(): void {
            }

            function f3(p0: number, p1: string): void {
            }

            function f4(param: number[]): void {
            }

            let v0: ParamType<typeof f0>; // let v0: number
            let v1: ParamType<typeof f1>; // let v1: string
            let v2: ParamType<typeof f2>; // let v2: {} (начиная с версии 3.5.1 let v2: unknown)
            let v3: ParamType<typeof f3>; // let v3: undefined
            let v4: ParamType<typeof f4>; // let v4: number[]. Oops, ожидалось тип number вместо number[]
            v0 = 1;
            //v0 = '1'; // error TS2322: Type 'string' is not assignable to type 'number'.
            console.log('v0', v0);
        }

        demo3();

        function demo3() {
            type TDataGeneric<T> = T extends (data: infer TData) => infer TData
                ? TData
                : undefined;
            type TF1Data = TDataGeneric<typeof f1>;
            type TF2Data = TDataGeneric<typeof f2>;

            function f1(data: number): number {
                return data;
            }

            function f2(data: string): string {
                return data;
            }

            let f1v1: TDataGeneric<typeof f1> = f1(123);
            let f2v1: TDataGeneric<typeof f2> = f2('123');
            console.log('f1v1', typeof f1v1, f1v1); // f1v1 number 123
            console.log('f2v1', typeof f2v1, f2v1); // f2v1 string 123


            let f1v2: TF1Data = f1(321);
            let f2v2: TF2Data = f2('321');
            console.log('f1v2', typeof f1v2, f1v2); // f1v2 number 321
            console.log('f2v2', typeof f2v2, f2v2); // f2v2 string 321
        }
    }
)();
