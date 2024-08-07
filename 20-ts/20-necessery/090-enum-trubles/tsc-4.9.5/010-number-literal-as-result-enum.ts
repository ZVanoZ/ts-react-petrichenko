/**
 * Этот пример не актуален.
 *
 * Автор хотел показать, что компилятор TS допускал возврат числовых
 * литералов в качестве результата функции с результатом типа enum.
 * При этом компилятор не проверял есть ли в перечисление,
 * соответствующее возвращаемому значению.
 *
 * В данный момент ошибка исправлена и компилятор TS находит такие ошибки.
 *
 * $ node -v
 * v21.7.1
 *
 * $ tsc -v
 * Version 4.9.5
 */
(
    () => {
        enum Hello {
            world
        }

        const
            sayHello0 = (): Hello => {
                return 0; // ОК. Индекс "Hello.world" соответствует 0
            },
            sayHello2 = (): Hello => {
                // Индекс "2" отсутствует в перечислении.
                // Ранее компилятор позволял такое и не выдавал ошибки.
                // Теперь компилятор генерирует TS2322
                return 2; // error TS2322: Type '2' is not assignable to type 'Hello'.
            }
        ;
        console.log(sayHello0());
    }
)();

(
    /**
     * @link (https://github.com/microsoft/TypeScript/issues/32690)
     */
    () => {
        const enum MyEnum {
            Zero,
            One
        }

        const foo: MyEnum.Zero = 0 // Ok as expected (since MyEnum.Zero is zero)
        const bar: MyEnum.Zero = 1 // OK, but expected Error!
    }
)();