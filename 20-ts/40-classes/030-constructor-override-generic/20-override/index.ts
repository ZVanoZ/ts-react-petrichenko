(() => {
    class Box {
        width: number = 0;
        height: number = 0;

        constructor(side: number);
        constructor(width: number, height: number);
        constructor(config: string);

        constructor(
            widthOrConfig: number | string,
            height?: number
        ) {
            console.log('Box.constructior', arguments);
            if (typeof widthOrConfig === 'string') {
                this.createByConfig(widthOrConfig);                  // constructor(string)
            } else if (typeof height === 'number') {
                this.createByWidthAndHeight(widthOrConfig, height);  // constructor(number, number)
            } else {
                this.createBySide(widthOrConfig);                    // constructor(number)
            }
        }

        createByConfig(config: string): void {
            console.log('Box.createByConfig', arguments);
            let json = JSON.parse(config);
            if (typeof json.height === 'number' && typeof json.width === 'number') {
                this.createByWidthAndHeight(json.width, json.height);
            } else if (typeof json.side === 'number') {
                this.createBySide(json.side);
            } else {
                throw new Error('Box.createByConfig: invalid config');
            }
        }

        createBySide(side: number) {
            console.log('Box.createBySide', arguments);
            this.createByWidthAndHeight(side, side);
        }

        createByWidthAndHeight(
            width: number,
            height: number
        ): void {
            console.log('Box.createByWidthAndHeight', arguments);
            this.width = width;
            this.height = height;
        }
    }

    console.log('-- (1)');
    console.log(new Box(1));

    console.log('-- (1,2)');
    console.log(new Box(1));

    let config: string;

    console.log('-- (config)', config = JSON.stringify({
        height: 100,
        width: 200
    }));
    console.log(new Box(config));

    console.log('-- (config)', config = JSON.stringify({
        side: 13,
    }));
    console.log(new Box(config));
})();