(() => {
    class TStyles1 {
    }

    class TStyles2 {
        [s: string]: string;
    }

    class TStyles3 {
        [s: string]: string | ((key: string, val: string | number) => boolean);

        setStyle(
            key: string,
            val: string | number
        ): boolean//
        {
            if (typeof val === 'number') {
                val = val.toString();
            }
            this[key] = val;
            return true;
        }
    }

    (() => {
        let styles1 = new TStyles1();
        // styles1.color = 'red'; //error TS2339: Property 'color' does not exist on type 'TStyles1'.
        console.log('styles1', styles1);

        let styles2 = new TStyles2();
        styles2.color = 'red'; // OK
        //styles2.size = 12; // error TS2322: Type 'number' is not assignable to type 'string'.
        console.log('styles2', styles2);

        let styles3 = new TStyles3();
        styles3.color = 'red';        // OK
        styles3.setStyle('size', 12); // OK
        console.log('styles3', styles3);

    })();
})();