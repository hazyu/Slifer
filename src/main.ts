import type {} from  "@txikijs/types"

async function loadUserGame(path: string) {
    try {
        const gameModule = await import(path)

        if (gameModule.load) var load = gameModule.load;
        if (gameModule.update) var update = gameModule.update;
        if (gameModule.draw) var draw = gameModule.draw;

        load();
    } catch (error) {
        console.error(error)
    }
}

loadUserGame("src/test.js")
