(() => {
    console.log('--');
    type MyAnimation = 'fade';
    type TNewAnimation = `${MyAnimation}In`;
    const animation1: TNewAnimation = 'fadeIn';
    console.log('animation1', animation1);               // animation1 fadeIn
    console.log('typeof animation1', typeof animation1); // typeof animation1 string
})();

(() => {
    console.log('--');
    type MyAnimation = 'fade' | 'swipe';
    type TNewAnimation = `${MyAnimation}In`;
    const animation1: TNewAnimation = 'swipeIn';
    console.log('animation1', animation1);          // animation1 swipeIn

    //const animation2: TNewAnimation = 'swipeXXX'; // error TS2322: Type '"swipeXXX"' is not assignable to type '"fadeIn" | "swipeIn"'.
})();

(() => {
    console.log('--');
    type MyAnimation = 'fade' | 'swipe';
    type Direction = 'in' | 'out';
    type TNewAnimation = `${MyAnimation}${Direction}`; // "fadein" | "fadeout" | "swipein" | "swipeout"
    const animation1: TNewAnimation = 'swipeout';
    console.log('animation1', animation1);          // animation1 swipeout

    //const animation2: TNewAnimation = 'swipeXXX'; // error TS2322: Type '"swipeXXX"' is not assignable to type '"fadein" | "fadeout" | "swipein" | "swipeout"'.
})();

(() => {
    // Используем встроенный Generic "Capitalize" для приведения строки в camelCase
    console.log('--');
    type MyAnimation = 'fade' | 'swipe';
    type Direction = 'in' | 'out';
    type TNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;// "fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"
    const animation1: TNewAnimation = 'swipeOut';
    console.log('animation1', animation1);           // animation1 swipeOut

    // const animation2: TNewAnimation = 'swipeout'; // error TS2820: Type '"swipeout"' is not assignable to type '"fadeIn" | "swipeIn" | "fadeOut" | "swipeOut"'. Did you mean '"swipeOut"'?
})();
