# [Описание эпизода](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/80)

В этом уроке мы начнем своё знакомства с классами и их особенностями в TS

Ресурсы:

* EN [В документации](https://www.typescriptlang.org/docs/handbook/2/classes.html)

* EN [Различные настройки конфигурации](https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html)

* EN [Class fields documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields)

* EN [tsconfig#target](https://www.typescriptlang.org/tsconfig/#target)

## Конспект

* При компиляции конкретного *.ts файла конфигурация tsconfig.json не используется

Чтобы tsconfig.json использовался, путь к нему указывается через свойство --project
```bash
tsc --project ...some-project/tsconfig.json
```

* [10-option-strictPropertyInitialization](10-option-strictPropertyInitialization)

Влияние опции "strictPropertyInitialization" на поведение компилятора. 

См. tsconfig.json в каждой подпапке.  
true  - запрещено создавать поля без присвоения значения.  
false - запрещено создавать поля без присвоения значения. Значение будет "undefined".

```bash
../../node_modules/.bin/tsc --project ./10-option-strictPropertyInitialization/strictPropertyInitialization-false/tsconfig.json
../../node_modules/.bin/tsc --project ./10-option-strictPropertyInitialization/strictPropertyInitialization-true/tsconfig.json
```

* [20-option-files](20-option-files)

Базовая конструкция класса. Использование конфига при компиляции.

Компилятся все файлы *.ts в директории 
```bash
../../node_modules/.bin/tsc  --project ./20-option-files/10-demo-all-files/tsconfig.json
```
Компилятся файлы, что указаны в ctrwbb "files" [tsconfig.json](20-option-files/20-demo-many-files/tsconfig.json)
```bash
../../node_modules/.bin/tsc  --project ./20-option-files/20-demo-many-files/tsconfig.json
```

* [30-demo](30-demo)

1. Демонстрация использования [tsconfig.json](30-demo/tsconfig.json) для понижения 
требований при компиляции (опция "strictPropertyInitialization").
2. Демонстрация импорта в "index1.ts" класса User из файла "User.ts"

```bash
../../node_modules/.bin/ts-node ./30-demo/index1.ts
```