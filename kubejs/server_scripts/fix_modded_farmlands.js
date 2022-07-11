// Fixes modded farmland blocks that are affected by byg
// By adding the 'byg:farmland' tag to them

onEvent('tags.blocks', event => {
    event.add('byg:farmland', 'croptosis:fertilized_farmland')
    event.add('byg:farmland', 'biomemakeover:peat_farmland')
})