(() => {
    console.log('-10-');

    class Demo {
        static myStaticProperty: string = 'aaa';
        protected static myProtectedStaticProperty: string = 'bbb';
        private static myPrivateStaticProperty: string = 'ccc';

        static getProtectedStaticProperty(): string {
            return Demo.myProtectedStaticProperty;
        }

        static setProtectedStaticProperty(value: string): void {
            Demo.myProtectedStaticProperty = value;
        }

        static getPrivateStaticProperty(): string {
            return Demo.myPrivateStaticProperty;
        }

        static setPrivateStaticProperty(value: string): void {
            Demo.myPrivateStaticProperty = value;
        }

        private constructor() {
        }
    }

    console.log('Demo.myStaticProperty (1)', Demo.myStaticProperty);
    Demo.myStaticProperty += '-changed';
    console.log('Demo.myStaticProperty (2)', Demo.myStaticProperty);

    console.log('-- Demo.getPrivateStaticProperty()');
    console.log(Demo.getPrivateStaticProperty());
    console.log('-- Demo.getProtectedStaticProperty()');
    console.log(Demo.getProtectedStaticProperty());

    // new Demo(); // error TS2673: Constructor of class 'Demo' is private and only accessible within the class declaration.

    /*
Demo.myStaticProperty (1) aaa
Demo.myStaticProperty (2) aaa-changed
-- Demo.getPrivateStaticProperty()
ccc
-- Demo.getProtectedStaticProperty()
bbb
    */
})();

(() => {
    console.log('-20-', 'Статические классы отсутствуют');
    //  error TS1184: Modifiers cannot appear here.
    // static class Demo {};

})();

(() => {
    console.log('-30-');
    (() => {
        console.log('-30-10-');

        class Demo {
            static myStaticProperty: string = 'aaa';

            constructor() {
                console.log('Demo.constructor', `myStaticProperty="${Demo.myStaticProperty}"`);
            }
        }

        new Demo();
        /*
-30-10-
Demo.constructor myStaticProperty="aaa"
        */
    })();
    (() => {
        console.log('-30-20-');

        class Demo {
            static myStaticProperty: string = 'aaa';

            protected constructor() {
                console.log('Demo.constructor', `myStaticProperty="${Demo.myStaticProperty}"`);
            }
        }

        class DemoChild extends Demo {
            static myStaticProperty: string = 'aaa';

            constructor() {
                console.log('DemoChild.constructor', `Demo.myStaticProperty="${Demo.myStaticProperty}"`);
                console.log('DemoChild.constructor', `DemoChild.myStaticProperty="${DemoChild.myStaticProperty}"`);
                super();
            }
        }

        // new Demo(); // error TS2674: Constructor of class 'Demo' is protected and only accessible within the class declaration.
        new DemoChild();
        /*
-30-20-
DemoChild.constructor Demo.myStaticProperty="aaa"
DemoChild.constructor DemoChild.myStaticProperty="aaa"
Demo.constructor myStaticProperty="aaa"
        */
    })();
})();

(() => {
    console.log('-40-');

    class Demo {
        static myStaticProperty: string = 'aaa';
        // Статический блок выполнится один раз при загрузке скрипта
        static {
            console.log('Demo static-block', Demo);
            Demo.myStaticProperty = 'aaa-changed';
            console.log('Demo static-block after-change', Demo);
        }
    }

    /*
Demo static-block [class Demo] { myStaticProperty: 'aaa' }
Demo static-block after-change [class Demo] { myStaticProperty: 'aaa-changed' }
    */
})();

//(()=>{})();