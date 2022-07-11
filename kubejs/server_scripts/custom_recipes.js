onEvent('recipes', event => {
    // Add recipe for custom 'Rotten Leather' (x2 Rotten Flesh -> x1 Rotten Leather)
    event.shapeless('kubejs:rotten_leather', ['minecraft:rotten_flesh','minecraft:rotten_flesh'])

    // Add smoker recipe for turning 'Rotten Leather' into Leather
    event.smoking('minecraft:leather','kubejs:rotten_leather')
})