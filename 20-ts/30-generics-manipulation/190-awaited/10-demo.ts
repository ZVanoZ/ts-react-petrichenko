(async () => {
    (() => {
        type T1 = Awaited<Promise<number>>; // Initial type: number

        type TPromiseString = Promise<string>;
        type T2 = Awaited<TPromiseString>; //Initial type: string
    })();

    (async () => {
        interface IUser {
            name: string;
        }

        async function fetchUsers(): Promise<IUser[]> {
            let res: IUser[] = [];
            res.push({
                name: "Alex"
            });
            return res;
        }

        // Пример 1. Получаем типизированный промис, который вернет массив пользователей.
        const users1: Promise<IUser[]> = fetchUsers();
        console.log('#users1#', users1); // #users1# Promise { [ { name: 'Alex' } ] }

        // Пример 2. Получаем массив пользователей. Тип данных в массиве хардкодим.
        const users2: IUser[] = await fetchUsers();
        console.log('#users2#', users2); // #users2# [ { name: 'Alex' } ]

        // Пример 3. Получаем массив пользователей. Тип данных в массиве получаем через ReturnType + Awaited.
        type TFetchUsersResult = ReturnType<typeof fetchUsers>;   // Promise<IUser[]>
        type TFetchUsersAwaitResult = Awaited<TFetchUsersResult>; // IUser[]
        const users3: TFetchUsersAwaitResult = await fetchUsers();//
        console.log('#users3#', users3); // #users3# [ { name: 'Alex' } ]

        // Пример 4. Получаем массив пользователей.
        // Тип данных в массиве получаем через ReturnType + "Generic infer".
        // @see [30-infer.ts](../120-conditional-types-and-infer/30-infer.ts)
        // Этот способ использовался в TS версии < 4.5 (до появления Awaited)
        type OldTsAwaiter<T> = T extends Promise<infer TResult> ? TResult : T;
        type TFetchUsersExtractedResult = OldTsAwaiter<TFetchUsersResult>; // IUser[]
        const users4: TFetchUsersExtractedResult = await fetchUsers();//
        console.log('#users4#', users4); // #users4# [ { name: 'Alex' } ]

    })();
})();