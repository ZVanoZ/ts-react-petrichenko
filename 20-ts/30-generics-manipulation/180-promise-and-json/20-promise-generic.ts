(() => {
    new Promise<string>(
        (resolve, reject) => {
            //return resolve(1); //error TS2345: Argument of type 'number' is not assignable to parameter of type 'string | PromiseLike<string>'.
            return resolve('Hello World!');
        }
    ).then(
        (res) => {
            console.log('res', res); // res Hello World!
        }
    ).catch(
        (reason) => {
            console.log('err', reason);
        }
    )
})();