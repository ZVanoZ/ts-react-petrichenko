(
    () => {
        console.log('now is', new Date());

        const var10 = {
            f1: true,
            f2: "aaaa",
            f3: 123
        };

        function fun10(
            arg1: {
                f1: boolean,
                f2: string,
                f3: number
            }
        ): void {
            console.log("-- fun10");
            console.log(arg1.f1, arg1.f2, arg1.f3);
        }

        fun10(var10);

        function fun20(
            comment: string,
            user: {
                firstname: string;
                midlename: string;
                birthday: Date | string
            } | {
                login: string,
                pass: string
            }
        ): void {
            console.log("-- fun20");
            if ("login" in user) {
                user.login = user.login.toUpperCase();
                user.pass = user.pass.replace(/./g, "*");

            } else {
                if (user.birthday instanceof Date) {
                    user.birthday = user.birthday.toISOString();
                }
            }
            console.log(comment, user);
        }

        fun20(
            "Вариант 1",
            {
                firstname: "Василий",
                midlename: "Теркин",
                birthday: new Date(2000, 0, 31)
            }
        );
        fun20(
            "Вариант 2",
            {
                login: "Василий",
                pass: "Теркин"
            }
        );


    }
)();
//-----------------------------------------------------------------------------
(
    () => {
        console.log("interface");

        interface IClass1 {
            field1: boolean
        }

        interface IClass2 {
            field2: string
        }

        interface IClass1And2 extends IClass1, IClass2 {
            field3: number
        }


        const
            obj1: IClass1And2 = {
                field1: true,
                field2: "Hello",
                field3: 123,
            }
//  error TS2561: Object literal may only specify known properties, but 'field3' does not exist in type 'IClass1 & IClass2'. Did you mean to write 'field1'?
//             obj2: IClass1 & IClass2 = {
//                 field1: true,
//                 field2: "Hello",
//                 field3: 123,
//             }
    }
)();
//-----------------------------------------------------------------------------
(
    () => {
        //console.log("XXX");
    }
)();