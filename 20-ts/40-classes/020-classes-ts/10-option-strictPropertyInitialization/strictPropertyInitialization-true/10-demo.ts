(()=>{
    class Box{
        width : number;      // error TS2564: Property 'width' has no initializer and is not definitely assigned in the constructor.
    }
    let box = new Box();
    console.log('box', box);
})();