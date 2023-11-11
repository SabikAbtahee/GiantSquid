import { SchemeTypes, ThemeTypes } from "./settings.enum";

export const SchemesView = [
	{
		Name: "Auto",
		Icon: "bolt",
		Type: SchemeTypes.prefered,
		Selected: false
	},
	{
		Name: "Dark",
		Icon: "dark_mode",
		Type: SchemeTypes.dark,
		Selected: false
	},
	{
		Name: "Light",
		Icon: "light_mode",
		Type: SchemeTypes.light,
		Selected: true
	}
];

export const ThemesView = [
	{
		Name: "Default",
		Type: ThemeTypes.Default,
		Selected: true
	},
	{
		Name: "Brand",
		Type: ThemeTypes.Brand,
		Selected: false
	},
	{
		Name: "Teal",
		Type: ThemeTypes.Teal,
		Selected: false
	},
	{
		Name: "Rose",
		Type: ThemeTypes.Rose,
		Selected: false
	},
	{
		Name: "Purple",
		Type: ThemeTypes.Purple,
		Selected: false
	},
	{
		Name: "Amber",
		Type: ThemeTypes.Amber,
		Selected: false
	}
];
