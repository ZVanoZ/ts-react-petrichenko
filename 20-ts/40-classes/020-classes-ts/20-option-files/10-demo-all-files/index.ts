(() => {
    class Box {
        width: number;

        constructor(
            width: number
        ) {
            this.width = width;

            // * Можно без объявления поля, но IDE выдаст
            // @WARN: "TS2339: Property height does not exist on type Box"

            // компилятор tsc выдаст ошибку
            // tsc  ./20-demo/10-demo.ts
            //  error TS2339: Property 'height' does not exist on type 'Box'.
            this.height = 500;
        }
    }

    let box = new Box(13);
    console.log('box', box);
})();