import * as http from "http";

(
    () => {

        type TProtocolName = "http" | "https";
        type TProtocol = TProtocolName | number;

        const serverConfig: {
            protocol010: "http" | "https";
            protocol020: TProtocolName;
            protocol030: TProtocol;
        } = {
            protocol010: "http",
            protocol020: "https",
            protocol030: 80,
        };

        const startServer: () => void =
            (): void => {

            }
        ;

        type TServerStart = () => void;
        const
            startServer20: TServerStart = (): void => {

            }
        ;
    }
)();