import {fitnessClubCenter} from "./data";

(() => {
    return;
    interface IClass {
        name: string;
        startsAt: string;
        duration: number;
    }
    (() => {
        const classes: IClass[] = fitnessClubCenter.classes;
    })();

    type TFutureClass = Omit<IClass, 'startsAt'> & { willStartsAt: string }
    (() => {
        /*
        interface IFutureClass {
            name: string;
            willStartsAt: string,
            duration: number,
        }
         */
        const tmp: TFutureClass = {
            duration: 50,
            name: "swimming",
            willStartsAt: "3:00 PM",
        };
        console.log('TFutureClass', tmp);

        const futureClasses: TFutureClass[] = fitnessClubCenter.futureClasses;
    })();
    type TClientAge = number | '-';

    type TGender = "male" | "female";
    interface ICurrClient {
        name: string,
        age: TClientAge,
        gender: TGender
        timeLeft: string,
    }
    // (() => {
    //     const tmp: ICurrClient[] = fitnessClubCenter.currClients;
    // })();
    // interface IExClient {
    //     name: string,
    //     age?: TClientAge,
    //     gender: TGender,
    //     makeCallFor: Date,
    // }
    type TExClient = Omit<ICurrClient, 'timeLeft'> & { makeCallFor: Date }
    (() => {
        const tmp: TExClient = {
            name: "Tom Smooth",
            age: 50,
            gender: "male",
            makeCallFor: new Date("2023-08-12")
        };
        console.log('TExClient', tmp);
    })();

    // interface IFutureClient {
    //     name: string;
    //     makeCallFor: Date;
    // }
    type TFutureClient = Omit<TExClient, 'age' | 'gender'>;
    (() => {
        const tmp: TFutureClient = {
            name: "Maria",
            makeCallFor: new Date("2023-07-10"),
        };
        console.log('TFutureClient', tmp);
    })();

    interface IFitnessClubCenter {
        clubName: string;
        location: string;
        classes: IClass[];
        futureClasses: TFutureClass[];
        currClients: ICurrClient[];
        exClients: TExClient[];
        futureClients: TFutureClient[];
    }

    // type PlayerTransformGeneric<T> = {
    //     [P in keyof T]: string;
    // };
    //type TFitnessClubCenter = PlayerTransformGeneric<IFitnessClubCenter>;


    //
    // const currClients: ICurrClient[] = fitnessClubCenter.currClients;
    const testData: IFitnessClubCenter = fitnessClubCenter;
    // test(testData);

    function test(data: IFitnessClubCenter): IFitnessClubCenter {
        console.log('clubName', data.clubName);
        console.log('location', data.location);
        return data;
    }
})();

