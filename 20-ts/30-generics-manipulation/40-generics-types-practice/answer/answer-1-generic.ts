/**
 * @NOTE: решение задачи при помощи generic.
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

interface PlayerData <THours extends THoursObject> {
    game: TGame;
    hours: THours;
    server: string;
}

function displayPlayer<T extends PlayerData<THoursObject>>(
    player: T
) {
    console.log('-- player:', player);
    console.log('--       .game:', player.game)
    console.log('--       .hours:', player.hours);
}

displayPlayer(player1);
displayPlayer(player2);
displayPlayer(player3);

/*
-- player: { game: 'CS:GO', hours: 300, server: 'basic' }
--       .game: CS:GO
--       .hours: 300
-- player: { game: 2048, hours: '300 h.', server: 'arcade' }
--       .game: 2048
--       .hours: 300 h.
-- player: { game: 'Chess', hours: { total: 500, inMenu: 50 }, server: 'chess' }
--       .game: Chess
--       .hours: { total: 500, inMenu: 50 }
*/