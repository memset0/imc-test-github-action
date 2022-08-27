import path from 'path'

import { Context, MinecraftEnhancement, stringifyRawText } from '../../src/index'


const ctx = (new Context())
	.namespace('uhc.recipe')


// Apprentice Helmet
ctx.recipe({
	name: 'apprentice_helmet',
	recipe: [
		['iron_ingot', 'iron_ingot', 'iron_ingot'],
		['iron_ingot', 'redstone_torch', 'iron_ingot'],
	],
	result: ctx.item({
		id: 'minecraft:iron_helmet',
		data: {
			display: { Name: stringifyRawText({ text: 'Apprentice Helmet' }) },
			Enchantments: [
				{ id: 'minecraft:protection', lvl: 1 },
				{ id: 'minecraft:fire_protection', lvl: 1 },
				{ id: 'minecraft:blast_protection', lvl: 1 },
				{ id: 'minecraft:projectile_protection', lvl: 1 },
			],
		}
	}),
})
// Apprentice Sword
// Apprentice Bow
// Master's Compass

// Vorpal Sword
ctx.recipe({
	name: 'vorpal_sword',
	recipe: [
		['bone'],
		['iron_sword'],
		['rotten_flesh'],
	],
	result: ctx.item({
		id: 'minecraft:iron_sword',
		data: {
			display: { Name: stringifyRawText({ text: 'Vorpal Sword' }) },
			Enchantments: [
				{ id: 'minecraft:smite', lvl: 2 },
				{ id: 'minecraft:looting', lvl: 1 },
				{ id: 'minecraft:bane_of_arthropods', lvl: 2 },
			],
		}
	}),
})
// Enchanted Book (Sharpness I)
ctx.recipe({
	name: 'enchanted_book_sharpness',
	displayName: 'Enchanted Book (Sharpness I)',
	recipe: [
		['flint', null, null],
		[null, 'paper', 'paper'],
		[null, 'paper', 'iron_sword'],
	],
	result: ctx.item({
		id: 'minecraft:enchanted_book',
		data: { StoredEnchantments: [{ id: 'minecraft:sharpness', lvl: 1 }] }
	}),
})
// Enchanted Book (Power I)
ctx.recipe({
	name: 'enchanted_book_power',
	displayName: 'Enchanted Book (Power I)',
	recipe: [
		['flint', null, null],
		[null, 'paper', 'paper'],
		[null, 'paper', 'bone'],
	],
	result: ctx.item({
		id: 'minecraft:enchanted_book',
		data: { StoredEnchantments: [{ id: 'minecraft:power', lvl: 1 }] }
	}),
})
// Dragon Sword

// Leather
ctx.recipe({
	name: 'economy_leather',
	displayName: 'Economy Leather',
	recipe: [
		['stick', 'leather', 'stick'],
		['stick', 'leather', 'stick'],
		['stick', 'leather', 'stick'],
	],
	result: 'leather',
	resultCount: 8,
})
// Enchanted Book (Protection I)
ctx.recipe({
	name: 'enchanted_book_protection',
	displayName: 'Enchanted Book (Protection I)',
	recipe: [
		['paper', 'paper'],
		['paper', 'iron_ingot'],
	],
	result: ctx.item({
		id: 'minecraft:enchanted_book',
		data: { StoredEnchantments: [{ id: 'minecraft:protection', lvl: 1 }] }
	}),
})
// Enchanted Book (Projectile Protection I)
ctx.recipe({
	name: 'enchanted_book_projectile_protection',
	displayName: 'Enchanted Book (Projectile Protection I)',
	recipe: [
		['paper', 'paper'],
		['paper', 'arrow'],
	],
	result: ctx.item({
		id: 'minecraft:enchanted_book',
		data: { StoredEnchantments: [{ id: 'minecraft:projectile_protection', lvl: 1 }] }
	}),
})
// Dragon Armor

// Glowstone Dust
ctx.recipe({
	name: 'glowstone_dust',
	displayName: 'Glowstone Dust',
	recipe: [
		['redstone', 'redstone', 'redstone'],
		['redstone', 'flint_and_steel', 'redstone'],
		['redstone', 'redstone', 'redstone'],
	],
	result: 'glowstone_dust',
	resultCount: 8,
})
// Nether Wart
ctx.recipe({
	name: 'glowstone_dust',
	displayName: 'Nether Wart',
	recipe: [
		[null, 'wheat_seeds', null],
		['wheat_seeds', 'fermented_spider_eye', 'wheat_seeds'],
		[null, 'wheat_seeds', null],
	],
	result: 'nether_wart',
})
// Potion of Regeneration
// Blaze Rod

// Steak
ctx.recipe({
	name: 'steak',
	displayName: 'Steak',
	recipe: [
		['beef', 'beef', 'beef'],
		['beef', 'coal', 'beef'],
		['beef', 'beef', 'beef'],
	],
	result: 'cooked_beef',
	resultCount: 10,
})
// Potion of Resistance
// Spiked Armor
ctx.recipe({
	name: 'spiked_armor',
	recipe: [
		['lily_pad'],
		['cactus'],
		['leather_chestplate'],
	],
	result: ctx.item({
		id: 'minecraft:leather_chestplate',
		data: {
			display: {
				Name: stringifyRawText({ text: 'Spiked Armor' }),
				color: 2129968   // Hex Color #208030
			},
			Enchantments: [
				{ id: 'minecraft:protection', lvl: 5 },
				{ id: 'minecraft:unbreaking', lvl: 10 },
				{ id: 'minecraft:thorns', lvl: 1 },
			],
		}
	}),
})
// Seven-league Boots
ctx.recipe({
	name: 'seven_league_boots',
	recipe: [
		['feather', 'ender_pearl', 'feather'],
		['feather', 'water_bucket', 'feather'],
		['feather', 'diamond_boots', 'feather'],
	],
	result: ctx.item({
		id: 'minecraft:diamond_boots',
		data: {
			display: { Name: stringifyRawText({ text: 'Seven-league Boots' }) },
			Enchantments: [
				{ id: 'minecraft:protection', lvl: 3 },
				{ id: 'minecraft:feather_falling', lvl: 3 },
				{ id: 'minecraft:depth_strider', lvl: 2 },   // temporary
			],
		}
	}),
})

// Iron Ingot
ctx.recipe({
	name: 'iron_ingot',
	displayName: 'Iron Ingot',
	recipe: [
		['raw_iron', 'raw_iron', 'raw_iron'],
		['raw_iron', 'coal', 'raw_iron'],
		['raw_iron', 'raw_iron', 'raw_iron'],
	],
	result: 'iron_ingot',
	resultCount: 10,
})
// Obsidian
ctx.recipe({
	name: 'obsidian',
	displayName: 'Obsidian',
	recipe: [
		['water_bucket'],
		['lava_bucket'],
	],
	result: 'obsidian',
})
// Tarnhelm
ctx.recipe({
	name: 'apprentice_helmet',
	recipe: [
		['diamond', 'iron_ingot', 'diamond'],
		['diamond', 'redstone_block', 'diamond'],
	],
	result: ctx.item({
		id: 'minecraft:diamond_helmet',
		data: {
			display: { Name: stringifyRawText({ text: 'Tarnhelm' }) },
			Enchantments: [
				{ id: 'minecraft:protection', lvl: 1 },
				{ id: 'minecraft:fire_protection', lvl: 1 },
				{ id: 'minecraft:aqua_affinity', lvl: 3 },
			],
		}
	}),
})
// Philosopher's Pickaxe
ctx.recipe({
	name: 'philosophers_pickaxe',
	recipe: [
		['raw_iron', 'raw_gold', 'raw_iron'],
		['lapis_block', 'stick', 'lapis_block'],
		[null, 'stick', null],
	],
	result: ctx.item({
		id: 'minecraft:diamond_pickaxe',
		data: {
			display: { Name: stringifyRawText({ text: 'Philosopher\'s Pickaxe' }) },
			Enchantments: [
				{ id: 'minecraft:fortune', lvl: 2 },
			],
			Damage: 1558,
		}
	}),
})

// Bottle o' Enchanting
ctx.recipe({
	name: 'experience_bottle',
	displayName: 'Bottle o\' Enchanting',
	recipe: [
		[null, 'redstone_block', null],
		['redstone_block', 'glass_bottle', 'redstone_block'],
		[null, 'redstone_block', null],
	],
	result: 'experience_bottle',
	resultCount: 8,
})
// Anvil
ctx.recipe({
	name: 'anvil',
	displayName: 'Anvil',
	recipe: [
		['iron_ingot', 'iron_ingot', 'iron_ingot'],
		[null, 'iron_block', null],
		['iron_ingot', 'iron_ingot', 'iron_ingot'],
	],
	result: 'anvil',
})
// Enchantment Table
ctx.recipe({
	name: 'enchantment_table',
	displayName: 'Enchantment Table',
	recipe: [
		[null, 'bookshelf', null],
		['obsidian', 'diamond', 'obsidian'],
		['obsidian', 'experience_bottle', 'obsidian'],
	],
	result: 'enchantment_table',
})
// Artemis' Book
ctx.recipe({
	name: 'artemis_book',
	displayName: 'Artemis\' Book',
	recipe: [
		['ender_eye', null, null],
		[null, 'paper', 'paper'],
		[null, 'paper', 'fire_charge'],
	],
	result: ctx.item({
		id: 'minecraft:enchanted_book',
		data: {
			StoredEnchantments: [
				{ id: 'minecraft:protection', lvl: 3 },
				{ id: 'minecraft:sharpness', lvl: 2 },
				{ id: 'minecraft:power', lvl: 2 },
				{ id: 'minecraft:punch', lvl: 1 },
				{ id: 'minecraft:fire_aspect', lvl: 1 },
			]
		}
	}),
})

// Apple
ctx.recipe({
	name: 'apple',
	displayName: 'Apple',
	recipe: [
		['bone_meal'],
		['apple'],
	],
	result: 'apple',
	resultCount: 2,
})
// Melon
ctx.recipe({
	name: 'melon',
	displayName: 'melon',
	recipe: [
		['bone_meal', 'wheat_seeds', 'bone_meal'],
		['wheat_seeds', 'apple', 'wheat_seeds'],
		['bone_meal', 'wheat_seeds', 'bone_meal'],
	],
	result: 'melon',
})
// Potion of Absorption
// Golden Apple
ctx.recipe({
	name: 'golden_apple',
	displayName: 'Golden Apple',
	recipe: [
		[null, 'gold_ingot', null],
		['gold_ingot', 'apple', 'gold_ingot'],
		[null, 'gold_ingot', null],
	],
	result: 'golden_apple',
})

// Golden Head
ctx.recipe({
	name: 'golden_head',
	recipe: [
		['gold_ingot', 'gold_ingot', 'gold_ingot'],
		['gold_ingot', 'player_head', 'gold_ingot'],
		['gold_ingot', 'gold_ingot', 'gold_ingot'],
	],
	result: ctx.item({
		id: 'minecraft:player_head',
		data: {
			display: { Name: stringifyRawText({ text: 'Golden Head' }) },
			SkullOwner: "PhantomTupac",
		}
	}),
})
// Pandora's Box
// Panacea
// Cupid's Bow

// Arrow
ctx.recipe({
	name: 'arrow',
	displayName: 'Arrow',
	recipe: [
		['flint', 'flint', 'flint'],
		['stick', 'stick', 'stick'],
		['feather', 'feather', 'feather'],
	],
	result: 'arrow',
	resultCount: 20,
})
// Saddle
ctx.recipe({
	name: 'saddle',
	displayName: 'Saddle',
	recipe: [
		['leather', 'leather', 'leather'],
		['string', 'leather', 'string'],
		['iron_ingot', null, 'iron_ingot'],
	],
	result: 'saddle',
})
// Potion of Velocity
// Fenrir

// Forge
// Efficiency Pickaxe
ctx.recipe({
	name: 'philosophers_pickaxe',
	recipe: [
		['raw_iron', 'raw_iron', 'raw_iron'],
		['coal', 'stick', 'coal'],
		[null, 'stick', null],
	],
	result: ctx.item({
		id: 'minecraft:iron_pickaxe',
		data: {
			display: { Name: stringifyRawText({ text: 'Efficiency Pickaxe' }) },
			Enchantments: [
				{ id: 'minecraft:efficiency', lvl: 1 },
			],
		}
	}),
})
// Lumber jack's Axe
// Enhancement Book (30 Level)

// Gold Ingot
ctx.recipe({
	name: 'gold_ingot',
	displayName: 'Gold Ingot',
	recipe: [
		['raw_gold', 'raw_gold', 'raw_gold'],
		['raw_gold', 'coal', 'raw_gold'],
		['raw_gold', 'raw_gold', 'raw_gold'],
	],
	result: 'gold_ingot',
	resultCount: 10,
})
// Sugar Canes
ctx.recipe({
	name: 'sugar_canes',
	displayName: 'Sugar Canes',
	recipe: [
		[null, 'oak_sapling', null],
		['raw_gold', 'coal', 'raw_gold'],
	],
	result: 'reeds',
	resultCount: 4,
})
// Backpack
// Fusion Armor


ctx.on('load', 'tellraw @p {"text":"hypixel-uhc-recipe loaded!"}')
export async function build(ctx: Context) {
	ctx.config('dist', path.join(__dirname, '../../dist/hypixel-uhc-recipe'))
	await ctx.build()

	ctx.config('dist', path.join('D:\\Game\\Minecraft\\.minecraft\\versions\\1.19 fabric\\saves\\imc-test\\datapacks', 'uhc-recipe'))
	await ctx.build()
}
build(ctx.root)