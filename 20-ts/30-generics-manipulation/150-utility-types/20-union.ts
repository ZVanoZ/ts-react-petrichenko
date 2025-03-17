(()=>{
    type MyAnimation = 'fade' | 'swipe';
    type Direction = 'in' | 'out';

    (()=>{
        // Initial type: "fade"
        type TAnimation = Exclude<MyAnimation, 'swipe'>; // Удаляем 'swipe' из перечисления
    })();

    (() => {
        // Initial type: "swipe"
        type TAnimation1 = Extract<MyAnimation, 'swipe'>;             // Извлечь 'swipe' из MyAnimation
        type TAnimation2 = Extract<MyAnimation | Direction, 'swipe'>; // Извлечь 'swipe' из MyAnimation и Direction
    })();
})();

(()=>{
    
})();