import * as http from "http";

(
    () => {
        type TProtocol = "http" | "https";
        type TPort = 80 | 443;
        type TProtocolOrPort = TProtocol | TPort;
        type TServerRole = {
            role: "prod" | "dev" | "test"
        };
        type TConfig = {
            port: TProtocolOrPort;
        } & TServerRole;

        const serverConfig: TConfig = {
            port: 443,
            role : "prod"
        };
        console.log("config", serverConfig);

        type TServerStartFunction = (
            config: TConfig
        ) => void;
        const
            startServer: TServerStartFunction = (
                config
            ): void => {
                let
                    protocol: TProtocol
                ;
                // @TODO: разобраться почему возникает ошибка
                // const portOrProtocol: TProtocolOrPort = config.port;
                // if (portOrProtocol instanceof Date) {}
                if (
                    // @TODO: разобраться почему возникает ошибка
                    // error TS2358: The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter.
                    // error TS2693: 'TProtocol' only refers to a type, but is being used as a value here.
                    //  config.port instanceof TProtocol
                    "string" == typeof config.port
                ) {
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