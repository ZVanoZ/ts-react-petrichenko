(
    () => {
        console.log('-- demo1');

        interface IState {
            data: {};
            tag: string;
        }

        let
            state1: IState = {
                data: [],
                tag: 'state1'
            },
            state2: IState = {
                data: [],
                tag: 'state2'
            }
        ;
        console.log('-- state1-beg', state1);
        mutableAction(state1);
        console.log('-- state1-end', state1);

        console.log('-- state2-beg', state2);
        const state2copy = immutableAction(state2);
        console.log('-- state2-end', state2copy);


        function mutableAction(
            state: IState,
        ) {
            state.data = 'abc';
        }

        function immutableAction(
            state: Readonly<IState>,
        ) {
            //state.data = 'abc'; // error TS2540: Cannot assign to 'data' because it is a read-only property.
            const newState:Partial<IState> = structuredClone(state);
            newState.data = 'modified-any-type-value';
            return newState;
        }
    }
)();

(
    /**
     * Используем встроенный generic тип Partial, который делает все свойства 1-го уровня объекта "необязательными"
     */
    () => {
        console.log('-- demo2');

        interface IState {
            data: {
                name: string;
            };
            tag: string;
        }

        let
            state1: Partial<IState> = {
                data: {
                    name: 'default-value'
                },
                tag: 'state1'
            }
        ;
        console.log('-- state1-beg', state1);
        mutableAction(state1);
        console.log('-- state1-end', state1);

        function mutableAction(
            state: Partial<IState>,
        ) {
            if (state.data) {
                state.data.name = 'modified-value';
            }
        }

    }
)();
