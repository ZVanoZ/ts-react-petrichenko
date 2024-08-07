# О лекции

В этом уроке мы обсудим, а нужно ли вообще использовать перечисления и чем их можно заменить

[Лекция](https://campfire-school.com/courses/polnyy-kurs-po-typescript-react/episode/ZZZ)

## Ресурсы

* EN [Показанная проблема](https://github.com/microsoft/TypeScript/issues/36756)
* EN [Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking)
* EN [Расширение Enums](https://stackoverflow.com/questions/52857698/extending-enum-in-typescript)
* EN [Про проблемы в документации](https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls)

## RUN

````shell
pwd
ls -l
````

````shell
npm install
npm update
````

````shell
node -v
./node_modules/.bin/tsc -v
````
* Компиляция *.ts в *.js при помощи локально установленного tsc
  * Compilation SUCCESS 
    ````shell
    ./node_modules/.bin/tsc 010-number-literal-as-result-enum.ts 020-string-literal-as-param-success.ts
    ````
  * Compilation FAIL
    ````shell
    ./node_modules/.bin/tsc 020-string-literal-as-param-fail.ts
    ````