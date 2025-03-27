(() => {
    console.log("-10-");

    class Player {
        #name: string = 'user1';

        getName(): string {
            return this.#name;
        }
    }

    const player = new Player();

    console.log('-- player.getName()');
    console.log(player.getName());

    try {
        const getNameRef = player.getName;
        console.log('-- getNameRef()');
        console.log(getNameRef());
    } catch (e) {
        console.log('ERROR:', 'Потеряли контекст this');
        if (e instanceof Error) {
            console.log(e.message);
        }
    }

    const getNameBindedRef = player.getName.bind(player);
    console.log('-- getNameBindedRef()');
    console.log(getNameBindedRef());
    console.log('OK:', 'привязали контекст через bind');

})();
(() => {
    console.log("-20-");

    class Player {
        #name: string = 'user1';

        /**
         * Указываем TSC ожидаемый контекст.
         * Метод не привязан к объекту, но TSC следит за правильностью использования.
         */
        getName(this: Player): string {
            return this.#name;
        }
    }

    const player = new Player();

    const getNameRef = player.getName;
    console.log('-- getNameRef()');

    // На этапе компиляции получим ошибку т.к. TSC проверяет контекст вызова.
    // error TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Player'.
    // console.log(getNameRef());

    console.log(getNameRef.call(player));

})();

(() => {
    console.log("-30-");

    class Player {
        #name: string = 'user1';

        /**
         * За счет стрелочной функции решаем проблему с потерей контекста.
         */
        getName = (): string => {
            return this.#name;
        }
    }

    class ChildPlayer extends Player {
        displayName() {
            console.log('ChildPlayer.displayName');
            let name: string = '';

            console.log('super.getName()', 'error TS2855 - Через super стрелочный метод не вызвать');
            // error TS2855: Class field 'getName' defined by the parent class is not accessible in the child class via super.
            //name = super.getName();

            console.log('this.getName()', 'Так работает');
            name = this.getName();
            console.log(name);
        }
    }

    const player = new Player();

    const getNameRef = player.getName;
    console.log('-- getNameRef()');

    // На этапе компиляции получим ошибку т.к. TSC проверяет контекст вызова.
    // error TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Player'.
    console.log(getNameRef());

    const childPlayer = new ChildPlayer();

    console.log('-- childPlayer.displayName()');
    childPlayer.displayName();
})();

(() => {
    console.log("-40-");

    class Player {
        #name: string = 'user1';

        getNamePlayer() {
            return 'Player.getNamePlayer: ' + this.#name;
        }

        getMeValid() {
            return this;
        }

        getMeInvalid(): Player {
            return this;
        }
    }

    class ChildPlayer extends Player {
        getNameChildPlayer() {
            return 'ChildPlayer.getNameChildPlayer >> ' + super.getNamePlayer();
        }
    }

    (() => {
        let player: Player = new Player();
        let name: string;

        player = player.getMeValid(); // OK. Type Player
        name = player.getNamePlayer();
        console.log('name (1)', name);

        player = player.getMeInvalid(); // WARN. Работает корректно, только если player строго соответствует типу Player
        name = player.getNamePlayer();
        // console.log('name (2)', name);
    })();

    (() => {
        let player: ChildPlayer = new ChildPlayer();
        // let name:string;

        player = player.getMeValid(); // OK.
        // Для наследников вызов getMeInvalid вернет тип Player несмотря на то, что экземпляр типа ChildPlayer
        // Это приведет к ошибке TS2741 при попытке присвоения.
        // player = player.getMeInvalid(); // error TS2741: Property 'getNameChildPlayer' is missing in type 'Player' but required in type 'ChildPlayer'.
    })();
})();

(() => {
    console.log("-50-", "Type Guard");
    console.log("Пример не реализован т.к. не могу придумать корректный пример.");
    console.log("Учитель воткнул а родительский класс проверку на соответствие дочернему классу.");
    console.log("Это неправильно и повторять не хочется");
})();

//(()=>{})();