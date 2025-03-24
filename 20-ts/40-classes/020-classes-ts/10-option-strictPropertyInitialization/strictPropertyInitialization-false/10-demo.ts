(()=>{
    class Box{
        width : number;   // OK. Компиляция пройдена
    }
    let box = new Box();
    console.log('box', box);
})();