// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [
	{
		section: "Draft",
		column: 1,
	},
	{
		name: "[Gen 9] Crabidraft Season 5",

		mod: 'gen9',
		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Draft', 'Item Clause', 'VGC Timer', '!Sleep Clause Mod', '!OHKO Clause', '!Evasion Clause', 'Adjust Level = 50', 'Picked Team Size = 4', 'Min Source Gen = 3', '+Unobtainable', '+Past', '-Hidden Power', '-Revival Blessing', '-Ally Switch', '-Expanding Force', 'OHKO Clause', '-Commander', '-Power Construct'],
	},
];
