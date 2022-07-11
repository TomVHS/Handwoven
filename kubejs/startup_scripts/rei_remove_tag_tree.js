// priority: 0

console.info('[KubeJS : Startup] Removing \'Tags\' tab of certain recipes shown by REI (due to extreme frame drops)...')

onEvent('rei.remove.categories', event => {
	// console.log(event.getCategoryIds()) // DEBUG | Logs all category ids to: logs/kubejs/client.txt

	// Removes 'Tag' tab in REI (this tab seems to cause severe frame lag seemingly at random)
	event.yeet('minecraft:plugins/tag')
})

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})