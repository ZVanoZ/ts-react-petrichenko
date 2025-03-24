"use strict";
(() => {
    class Box {
        width; // OK. Компиляция пройдена
    }
    let box = new Box();
    console.log('box', box);
})();
