(() => {
    console.log('-- Сложный пример с получением типа TPlayerInfo путем головоломного преобразования');
    interface IPlayerInfo {
        login: 'login';
        country: "country";
        serverName: "serverName";
    }

    type PlayerTransformGeneric<T> = {
        [P in keyof T as `player${Capitalize<string & P>}`]: string;
    };
    type TPlayerInfo = PlayerTransformGeneric<IPlayerInfo>;

    type PlayerNames = 'alex' | 'john';
    // Record<A, B>
    // Создать объектный тип.
    // Названия ключей взять из 'PlayerNames'. Получится {'alex' : ... , 'john' : ...}
    // Тип данных для каждого ключа взять из TPlayerInfo
    type TPlayers = Record<PlayerNames, TPlayerInfo>;

    const players: TPlayers = {
        alex: {
            playerCountry : 'Ukraine',
            playerLogin : 'alex81',
            playerServerName: 'server-123'
        },
        john: {
            playerCountry : 'USA',
            playerLogin : 'john71',
            playerServerName: 'server-123'
        }
    };
    console.log('gameData', players);
})();
