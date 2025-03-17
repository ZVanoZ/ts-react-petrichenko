
(()=>{
    console.log('-- Простой пример');
    interface TPlayerInfo {
        playerCountry : string;
        playerLogin : string;
        playerServerName: string;
    }
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
