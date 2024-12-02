/**
 * @note: решение задачи без использования generic.
 * @see answer-1-classic.ts
 */
//-----------------------------------------------------------------------------
// Создать Generic-интерфейс PlayerData, который подходил бы для создания таких объектов:
//-----

const player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};

const player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};

const player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};

//-----------------------------------------------------------------------------

interface IHoursObject {
    total: number;
    inMenu: number;
}

type TGame = number|string;
type THoursObject = IHoursObject | number | string;

interface PlayerData {
    game: TGame;
    hours: THoursObject;
    server: string;
}

function displayPlayer(
    player: PlayerData
) {
    console.log('-- player:', player);
}

displayPlayer(player1);
displayPlayer(player2);
displayPlayer(player3);

/*
-- player: { game: 'CS:GO', hours: 300, server: 'basic' }
-- player: { game: 2048, hours: '300 h.', server: 'arcade' }
-- player: { game: 'Chess', hours: { total: 500, inMenu: 50 }, server: 'chess' }
*/