(
    () => {
        let month: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" = "01";
        month = "02";

        // month = "2"; //  error TS2322: Type '"2"' is not assignable to type '"01" | "02" | ...

        function startServer(
            protocol: "http" | "https" = "http",
            port: 80 | 8080 | 443 | 8443 = 8080
        ): "SUCCESS" | "FAIL" {
            return "FAIL";
        }
    }
)();