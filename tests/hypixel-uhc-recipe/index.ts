import path from 'path'

import { Context, stringifyRawText } from '../../src/index'


const ctx = (new Context())
	.namespace('uhc.recipe')


// Apprentice Helmet
ctx.recipe({
	name: 'apprentice_helmet',
	recipe: [
		['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot'],
		['minecraft:iron_ingot', 'minecraft:redstone_torch', 'minecraft:iron_ingot'],
	],
	result: ctx.item({
		id: 'minecraft:iron_helmet',
		data: {
			display: {
				Name: stringifyRawText({ text: 'Apprentice Helmet' }),
			},
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
		['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot'],
		['minecraft:iron_ingot', 'minecraft:redstone_torch', 'minecraft:iron_ingot'],
	],
	result: ctx.item({
		id: 'minecraft:iron_sword',
		data: {
			display: {
				Name: stringifyRawText({ text: 'Vorpal Sword' }),
			},
			Enchantments: [
				{ id: 'minecraft:protection', lvl: 1 },
				{ id: 'minecraft:fire_protection', lvl: 1 },
				{ id: 'minecraft:blast_protection', lvl: 1 },
				{ id: 'minecraft:projectile_protection', lvl: 1 },
			],
		}
	}),
})
// Enchanted Book (Sharpness I)
// Enchanted Book (Power I)
// Dragon Sword

// Leather
// Enchanted Book (Protection I)
// Enchanted Book (Projectile Protection I)
// Dragon Armor

// Glowstone Dust
// Nether Wart
// Potion of Regeneration
// Blaze Rod

// Steak
// Potion of Resistance
// Spiked Armor
// Seven-league Boots

// Iron Ingot
ctx.recipe({
	name: 'iron_ingot',
	displayName: 'Iron Ingot',
	recipe: [
		['minecraft:raw_iron', 'minecraft:raw_iron', 'minecraft:raw_iron'],
		['minecraft:raw_iron', 'minecraft:coal', 'minecraft:raw_iron'],
		['minecraft:raw_iron', 'minecraft:raw_iron', 'minecraft:raw_iron'],
	],
	result: 'minecraft:iron_ingot',
	resultCount: 10,
})
// Obsidian
// Tarnhelm
// Philosopher's Pickaxe

// Golden Head
// Pandora's Box
// Panacea
// Cupid's Bow

// Arrow
// Saddle
// Potion of Velocity
// Fenrir

// Forge
// Iron Pickaxe
// Lumber jack's Axe
// Enhancement Book (30 Level)

// Gold Ingot
ctx.recipe({
	name: 'gold_ingot',
	displayName: 'Gold Ingot',
	recipe: [
		['minecraft:raw_gold', 'minecraft:raw_gold', 'minecraft:raw_gold'],
		['minecraft:raw_gold', 'minecraft:coal', 'minecraft:raw_gold'],
		['minecraft:raw_gold', 'minecraft:raw_gold', 'minecraft:raw_gold'],
	],
	result: 'minecraft:gold_ingot',
	resultCount: 10,
})
// Sugar Canes
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