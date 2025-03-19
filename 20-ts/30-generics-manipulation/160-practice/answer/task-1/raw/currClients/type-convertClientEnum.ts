import {currClients} from "../../data";

(() => {
    enum GenderEnum {
        Male = "male",
        Female = "female"
    }

    type TClientAge = number | '-';

    interface ICurrClientEnum {
        name: string;
        age: TClientAge;
        gender: GenderEnum;
        timeLeft: string;
    }

    function convertClientEnum<T extends {
        gender: string;
        age: TClientAge;
    }>(
        client: T
    ): ICurrClientEnum | null //
    {
        if (client.gender !== "male" && client.gender !== "female") {
            return null;
        }
        const res: ICurrClientEnum = {
            ...client,
            gender: client.gender === "male" ? GenderEnum.Male : GenderEnum.Female
        }
        return res;
    }

    let client: TCurrClient;
    client = currClients[0];
})();