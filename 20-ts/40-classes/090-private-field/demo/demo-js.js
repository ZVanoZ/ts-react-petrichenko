(() => {
    class Demo {
        myPublicProperty = 'aaa';
        #myPrivateProperty = 'bbb';

        getPrivateProperty() {
            return this.#myPrivateProperty;
        }

        getInfo() {
            return `Demo.getInfo: myPublicProperty="${this.myPublicProperty}"; myPrivateProperty="${this.#myPrivateProperty}"`;s
        }
    }

    class DemoChild extends Demo {
        getInfo() {

            let privateProperty;

            // Из потомков нельзя обращаться к приватным полям.
            // SyntaxError: Private field '#myPrivateProperty' must be declared in an enclosing class
            //privateProperty = this.#myPrivateProperty;

            privateProperty = this.getPrivateProperty();

            return `DemoChild.getInfo: myPublicProperty="${this.myPublicProperty}"; getPrivateProperty="${privateProperty}"`;
        }
    }

    (()=>{
        const demo = new Demo();
        console.log('-10-', demo);
        console.log('-20-', demo.getInfo());
    })();
    (()=>{
        const demo = new DemoChild();
        console.log('-30-', demo);
        console.log('-40-', demo.getInfo());

    })();

    /*
-10- Demo { myPublicProperty: 'aaa' }
-20- Demo.getInfo: myPublicProperty="aaa"; myPrivateProperty="bbb"
-30- DemoChild { myPublicProperty: 'aaa' }
-40- DemoChild.getInfo: myPublicProperty="aaa"; getPrivateProperty="bbb"
    */
})();