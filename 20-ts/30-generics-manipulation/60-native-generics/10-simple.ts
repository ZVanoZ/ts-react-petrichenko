(
    () => {
        // interface Array<T> {...}
        console.log('-- Array ');

        const arrNumber: Array<number> = [1, 2, 3.45, 4];
        arrNumber.push(5);
        console.log('-- Array<number>', arrNumber);

        const arrString: Array<string> = ['A', 'BC'];
        console.log('-- Array<string>', arrString);
    }
)();


(
    () => {
        // interface ReadonlyArray<T> {...}
        console.log('-- ReadonlyArray ');

        const arrNumber: ReadonlyArray<number> = [1, 2, 3.45, 4];
        //arrNumber.push(5); //error TS2339: Property 'push' does not exist on type 'readonly number[]'.
        console.log('-- ReadonlyArray<number>', arrNumber);

        const arrString: ReadonlyArray<string> = ['A', 'BC'];
        console.log('-- ReadonlyArray<string>', arrString);
    }
)();
