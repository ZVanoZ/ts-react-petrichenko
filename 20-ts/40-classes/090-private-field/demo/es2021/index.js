"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
(() => {
    var _Demo_myPrivateProperty;
    class Demo {
        constructor() {
            this.myPublicProperty = 'aaa';
            _Demo_myPrivateProperty.set(this, 'bbb');
            this._tsPrivateProperty = 'ccc';
        }
        getPrivateProperty() {
            return __classPrivateFieldGet(this, _Demo_myPrivateProperty, "f");
        }
        getInfo() {
            return `Demo.getInfo: myPublicProperty="${this.myPublicProperty}"; myPrivateProperty="${__classPrivateFieldGet(this, _Demo_myPrivateProperty, "f")}"`;
        }
    }
    _Demo_myPrivateProperty = new WeakMap();
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
    (() => {
        const demo = new Demo();
        console.log('-10-', demo);
        console.log('-20-', demo.getInfo());
    })();
    (() => {
        const demo = new DemoChild();
        console.log('-30-', demo);
        console.log('-40-', demo.getInfo());
    })();
    /*
-10- Demo { myPublicProperty: 'aaa', _tsPrivateProperty: 'ccc' }
-20- Demo.getInfo: myPublicProperty="aaa"; myPrivateProperty="bbb"
-30- DemoChild { myPublicProperty: 'aaa', _tsPrivateProperty: 'ccc' }
-40- DemoChild.getInfo: myPublicProperty="aaa"; getPrivateProperty="bbb"
    */
})();
