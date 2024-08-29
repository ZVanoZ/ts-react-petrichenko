/**
 *
 */
(
    () => {
        type AnimalUnion = 'cat' | 'dog' | 'bird';

        function isAnimalUnion(
            value: any
        ): value is AnimalUnion {
            const
                result: boolean = typeof value === 'string' //
                    && ['cat', 'dog', 'bird'].indexOf(value) >= 0
            ;
            return result;
        }

        interface AnimalRequestInterface {
            animal: AnimalUnion;
            breed: string,
            sterilized?: string
        }

        //type ResponceStatusUnion = 'available' | 'not available';
        enum ResponceStatusEnum {
            AVAILABLE = 'available',
            NOT_AVAILABLE = 'not available'
        }

        function isResponceStatusEnum(
            value: any
        ): value is ResponceStatusEnum {
            let
                result: boolean = false,
                allowValues: string[] = Object.values(ResponceStatusEnum)
            ;
            if (typeof value === 'string') {
                if (allowValues.includes(value)) {
                    result = true;
                }
            }
            return result;
        }

        interface ResponceInterface {
            status: ResponceStatusEnum;
            data: any;
        }

        function isResponceInterface(
            value: any
        ): value is ResponceInterface {
            const
                result: boolean = typeof value === 'object'
                    && isResponceStatusEnum(value.status)
            ;
            return result;
        }

        interface AnimalResponceDataInterface {
            animal: AnimalUnion;
            breed: string;
            sterilized?: string;
            location: string;
            age?: number;
        }

        function isAnimalResponceDataInterface(
            value: any
        ): value is AnimalResponceDataInterface {
            const result: boolean = typeof value === 'object' //
                && isAnimalUnion(value.animal)
                && typeof value.breed === "string"
                && typeof value.sterilized === "string"
                && typeof value.location === "string"
                && typeof value.location === "string"
            ;
            return result;
        }

        interface ErrorResponceDataInterface {
            message: string,
            nextUpdateIn: Date
        }

        function isErrorResponceDataInterface(
            value: any
        ): value is ErrorResponceDataInterface {
            const result: boolean = typeof value === 'object' //
                && typeof value.message === "string"
                && value.nextUpdateIn instanceof Date
            ;
            return result;
        }

        interface AnimalResponceInterface
            extends ResponceInterface //
        {
            status: ResponceStatusEnum.AVAILABLE;
            data: AnimalResponceDataInterface
        }

        function isAnimalResponceInterface(
            value: any
        ): value is AnimalResponceInterface {
            const
                result: boolean = isResponceInterface(value)
                    && value.status === ResponceStatusEnum.AVAILABLE
                    && isAnimalResponceDataInterface(value.data)
            ;
            return result;
        }

        interface ErrorResponceInterface
            extends ResponceInterface //
        {
            status: ResponceStatusEnum.NOT_AVAILABLE;
            data: ErrorResponceDataInterface
        }

        function isErrorResponceInterface(
            value: any
        ): value is ErrorResponceInterface {
            const
                result: boolean = isResponceInterface(value)
                    && value.status === ResponceStatusEnum.NOT_AVAILABLE
                    && isErrorResponceDataInterface(value.data)
            ;
            return result;
        }

        function checkAnimalData(
            animal: ResponceInterface
        ): AnimalResponceDataInterface | string {
            if (isAnimalResponceInterface(animal)) {
                // Заменить условие!
                return animal.data;
            } else if (isErrorResponceInterface(animal)) {
                return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
            } else {
                return 'Unknown response';
            }
        }

        const
            // Response #1
            response1: AnimalResponceInterface = {
                status: ResponceStatusEnum.AVAILABLE,
                data: {
                    animal: 'dog',
                    breed: 'Хаски',
                    sterilized: 'Нет',
                    location: 'Киев',
                    age: 10
                }
            },
            // Response #2
            response2: ErrorResponceInterface = {
                status: ResponceStatusEnum.NOT_AVAILABLE,
                data: {
                    message: 'Some message',
                    nextUpdateIn: new Date()
                }
            }

        console.log('checkAnimalData(response1)', checkAnimalData(response1));
        console.log('checkAnimalData(response2)', checkAnimalData(response2));
    }
)();
