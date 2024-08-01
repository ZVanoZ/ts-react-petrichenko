import * as http from "http";

(
    () => {

        type TProtocolName = "http" | "https";
        type TProtocol = TProtocolName | number;
        const httpName: TProtocolName = "http";
        const httpPort: TProtocol = 80;

    }
)();