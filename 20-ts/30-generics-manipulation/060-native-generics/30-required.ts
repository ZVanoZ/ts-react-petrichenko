(
    () => {
        console.log('-- demo1');

        interface IState {
            tag?: string;
            data: {
                name: string;
            };
        }

        let
            state1: IState = {
                data: {
                    name: 'defined-name',
                },
                tag: 'state1'
            }
        ;
        console.log('-- state1-beg', state1);
        state1.tag = undefined;
        console.log('-- state1-end', state1);

        let
            strictState: Required<IState> = {
                tag: 'strictState',
                data: {
                    name: 'defined-name',
                }
            }
        ;

        console.log('-- strictState', strictState);
        //strictState.tag = undefined; // error TS2322: Type 'undefined' is not assignable to type 'string'.
    }
)();
