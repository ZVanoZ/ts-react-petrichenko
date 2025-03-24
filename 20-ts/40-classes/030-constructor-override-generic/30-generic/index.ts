(() => {
    class TConfigSide {
        side: number = 0;
    }

    class TConfigWH {
        height: number = 0;
        width: number = 0;
    }

    class TConfigInvalid {
        side: number = 13;
        height: number = 13;
        width: number = 14;
    }

    type TConfig = TConfigSide | TConfigWH;

    class Box<T> {
        height?: number;
        width?: number;

        constructor(
            config: T
        ) {
            console.log('Box.constructior', arguments);
            if (config instanceof TConfigSide) {
                this.createBySide(config.side);
            } else if (config instanceof TConfigWH) {
                this.createByWidthAndHeight(config.width, config.height);
            } else {
                throw new Error('Unexpected config type');
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

    let config: TConfig;

    config = new TConfigWH();
    config.height = 10
    config.width = 20
    console.log('-- TConfigWH', config);
    console.log(new Box(config));


    config = new TConfigSide();
    config.side = 10
    console.log('-- TConfigSide', config);
    console.log(new Box(config));

    (() => {
        try {
            const config: TConfigInvalid = new TConfigInvalid();
            console.log('-- TConfigInvalid', config);
            console.log(new Box(config));
        } catch (e) {
            if (e instanceof Error) {
                console.log('-> TConfigInvalid:ERROR', e.message);
            } else {
                console.log('-> TConfigInvalid:UNKNOWN-ERROR', typeof e, e);
            }

        }

    })();
})();