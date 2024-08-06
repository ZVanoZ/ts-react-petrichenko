(function () {
    console.log("\
\n-- Демонстрация оптимизации больших Enum. Компилируем в JS и анализируем результат.\
\n-- Тут получается ОПТИМИЗИРОВАННЫЙ JS-файл.\
\n--\
\n-- Все объявления структур данных исчезли из JS.\
\n-- Вместо них используются константы + комментарий вида '/* TimingFuncEnum.EASE_IN */'.\
\n--\
\n-- Внимание! В официальной документации строго не рекомендуют использовать 'const enum' потому что это может привести к ошибкам.\
\n-- @link https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls\
\n-- Do not use const enums at all. You can easily ban const enums with the help of a linter.\
\n-- Obviously this avoids any issues with const enums, but prevents your project from inlining its own enums. \
\n-- Unlike inlining enums from other projects, inlining a project’s own enums is not problematic and has performance implications.\
\n--\
");
    //        console.log('DirectionsEnum', DirectionsEnum); // error TS2475: 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query.
    console.log('DirectionsEnum.RIGHT', 20 /* DirectionsEnum.RIGHT */);
    //        console.log('TimingFuncEnum', TimingFuncEnum); // error TS2475: 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query.
    console.log('TimingFuncEnum.EASE_IN', "ease-in" /* TimingFuncEnum.EASE_IN */);
})();
