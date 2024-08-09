/**
 * Копипаст демок из руководства @link (https://scriptdev.ru/guide/014/#unknown)
 */
console.log('@see RU @link (https://scriptdev.ru/guide/014/#unknown)');

(
    /**
     * Тип Unknown является типобезопасным аналогом типа any и представлен в виде литерала unknown.
     * Все типы совместимы с типом unknown, в то время как сам тип unknown совместим только с самим собой и типом any.
     */
    () => {
        class TypeSystem {
            static unknown: unknown;

            static any: any = TypeSystem.unknown; // Ok
            // static number: number = TypeSystem.unknown; // Error
            // static string: string = TypeSystem.unknown; // Error
            // static boolean: boolean = TypeSystem.unknown; // Error
            // static null: null = TypeSystem.unknown; // Error
            // static undefined: undefined = TypeSystem.unknown; // Error
            // static void: void = TypeSystem.unknown; // Error
            // static never: never = TypeSystem.unknown; // Error
        }

        TypeSystem.unknown = TypeSystem.any; // Ok
        // TypeSystem.unknown = TypeSystem.number; // Ok
        // TypeSystem.unknown = TypeSystem.string; // Ok
        // TypeSystem.unknown = TypeSystem.boolean; // Ok
        // TypeSystem.unknown = TypeSystem.null; // Ok
        // TypeSystem.unknown = TypeSystem.undefined; // Ok
        // TypeSystem.unknown = TypeSystem.void; // Ok
        TypeSystem.unknown = TypeSystem.unknown; // Ok
    }
)();

(
    () => {
    }
)();


(
    /**
     * Кроме того, над типом unknown запрещено выполнение каких-либо операций.
     */
    () => {
        try {
            let v0: any;
            v0.a = 5; // Ok
            v0.a = ''; // Ok
            v0(); // Ok

            let v1: unknown = v0; // Ok
            // v1.a = 5; // Error
            // v1.a = ''; // Error
            // v1(); // Error
        } catch (e) {
            console.log('runtime-error', e);// runtime-error TypeError: Cannot set properties of undefined (setting 'a')
        }
    }
)();

(
    /**
     * Если тип unknown составляет тип пересечение (intersection), то
     * он будет перекрыт всеми типами.
     */
    () => {
        type T0 = any & unknown; // type T0 = any
        type T1 = number & unknown; // type T1 = number
        type T2 = string & unknown; // type T2 = string
        type T3 = boolean & unknown; // type T3 = boolean
        type T4 = null & unknown; // type T4 = null
        type T5 = undefined & unknown; // type T5 = undefined
        type T6 = void & unknown; // type T6 = void
        type T7 = never & unknown; // type T7 = never
        type T8<T> = T & unknown; // type T8 = T
        type T9 = unknown & unknown; // type T9 = unknown
    }
)();

(
    /**
     * Если тип unknown составляет тип объединение (union), то
     * он перекроет все типы, за исключением типа any.
     */
    () => {
        type T0 = any | unknown; // type T0 = any
        type T1 = number | unknown; // type T1 = unknown
        type T2 = string | unknown; // type T2 = unknown
        type T3 = boolean | unknown; // type T3 = unknown
        type T4 = null | unknown; // type T4 = unknown
        type T5 = undefined | unknown; // type T5 = unknown
        type T6 = void | unknown; // type T6 = unknown
        type T7 = never | unknown; // type T7 = unknown
        type T8<T> = T | unknown; // type T8 = unknown
        type T9 = unknown | unknown; // type T9 = unknown
    }
)();

(
    /**
     * Помимо этого, запрос ключей (keyof) для типа unknown возвращает тип never.
     */
    () => {
        type T0 = keyof number; // type T0 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
        type T1 = keyof any; // type T1 = string | number | symbol
        type T2 = keyof unknown; // type T2 = never
    }
)();

(
    /**
     * Тип unknown позволяется использовать только в операциях
     * равенства ===, ==, !== и != и в операциях с логическими
     * операторами &&, || и !.
     */
    () => {
        let v0: unknown = 5;

        let v1 = 5 === v0; // Ok
        let v2 = 5 !== v0; // Ok
        // let v3 = 5 > v0; // Error
        // let v4 = 5 < v0; // Error
        // let v5 = 5 >= v0; // Error
        // let v6 = 5 <= v0; // Error
        // let v7 = 5 - v0; // Error
        // let v8 = 5 * v0; // Error
        // let v9 = 5 / v0; // Error
        // let v10 = ++v0; // Error
        // let v11 = --v0; // Error
        // let v12 = v0++; // Error
        // let v13 = v0--; // Error

        let v14 = 5 && v0; // Ok, let v14: unknown
        let v15 = 5 || v0; // Ok, let v15: number
        let v16 = v0 || 5; // Ok, let v16: unknown
        let v17 = !v0; // Ok, let v17: boolean
    }
)();

(
    /**
     * Также стоит упомянуть, что функция, у которой возвращаемый тип
     * принадлежит к типу unknown, может не возвращать значение явно.
     */
    () => {
        function f0(): unknown {
            return; // Ok
        }

        function f1(): number {
            return; // Error
        }

        let v = f0(); // Ok, let v: unknown
    }
)();

(
    /**
     * При активной опции --strictPropertyInitialization
     * принадлежащие к типу unknown поля не нуждаются в инициализации.
     */
    () => {
        class T {
            f0: unknown; // Ok
            f1: number; // Error
            f2: number = 5; // Ok
        }
    }
)();

(
    /**
     * Если в определении типа данных участвует сопоставленный тип (Mapped Type),
     * которому в качестве аргумента типа передается тип unknown,
     * то такой сопоставленный тип будет выведен как объектный тип {}.
     * Поскольку сопоставленные типы (Mapped Types), псевдонимы типов (types), а
     * также обобщения (Generics<>) будут рассмотрены позднее, то стоит просто
     * помнить об этом факте и повторно прочесть написанное при необходимости.
     */
    () => {
        type MappedType<T> = {
            [K in keyof T]: T;
        };

        type T0 = MappedType<number>; // type T0 = number
        type T1 = MappedType<any>; // type T1 = { [x: string]: any; }
        type T2 = MappedType<unknown>; // type T2 = {}
    }
)();


// (
//     () => {
//     }
// )();
