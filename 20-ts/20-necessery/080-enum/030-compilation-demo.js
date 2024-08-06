(function () {
    console.log("\
\n-- Демонстрация оптимизации больших Enum. Компилируем в JS и анализируем результат.\
\n-- Тут получается НЕ ОПТИМИЗИРОВАННЫЙ JS-файл.\
\n--\
");
    // Числовые операции работают
    var DirectionsEnum;
    (function (DirectionsEnum) {
        DirectionsEnum[DirectionsEnum["TOP"] = 10] = "TOP";
        DirectionsEnum[DirectionsEnum["RIGHT"] = 20] = "RIGHT";
        DirectionsEnum[DirectionsEnum["LEFT"] = 30] = "LEFT";
        DirectionsEnum[DirectionsEnum["BOTTOM"] = 40] = "BOTTOM";
    })(DirectionsEnum || (DirectionsEnum = {}));
    console.log('DirectionsEnum', DirectionsEnum);
    console.log('DirectionsEnum.RIGHT', DirectionsEnum.RIGHT);
    var TimingFuncEnum;
    (function (TimingFuncEnum) {
        TimingFuncEnum["EASE"] = "ease";
        TimingFuncEnum["EASE_IN"] = "ease-in";
        TimingFuncEnum["LINEAR"] = "linear";
    })(TimingFuncEnum || (TimingFuncEnum = {}));
    console.log('TimingFuncEnum', TimingFuncEnum);
    console.log('TimingFuncEnum.EASE_IN', TimingFuncEnum.EASE_IN);
})();
