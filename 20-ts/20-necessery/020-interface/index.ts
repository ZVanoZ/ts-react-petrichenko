(
    () => {

        type TProtocolEnum = "http" | "https";
        type TPortEnum = 80 | 443;
        type TProtocolOrPortEnum = TProtocolEnum | TPortEnum;


        // Объявление интерфейсов
        interface IConfig {
            port: TProtocolOrPortEnum;
        }

        type RoleEnum = "prod" | "dev" | "test";
        interface IRole {
            role: RoleEnum;
        }

        // Наследование интерфейсов
        interface IServerConfig extends IConfig, IRole {
            nodeName: string;
        }

        // Расширение интерфейса. Не рекомендуется.
        interface IServerConfig {
            startedAt: Date;
        }

        const serverConfig: IServerConfig = {
            port: 443,
            role: "prod",
            nodeName: 'node-123',
            startedAt: new Date(),
        };
        console.log("config", serverConfig);

        type TServerStartFunction = (
            config: IServerConfig
        ) => void;
        const
            startServer: TServerStartFunction = (
                config
            ): void => {
                let
                    protocol: TProtocolEnum
                ;
                if ("string" == typeof config.port) {
                    protocol = config.port;
                } else {
                    protocol = config.port == 80 ? "http" : "https";
                }
                console.log(`Server started on url ${protocol}://my-site.com with role "${config.role}"`)
            }
        ;

        startServer(serverConfig);
    }
)();