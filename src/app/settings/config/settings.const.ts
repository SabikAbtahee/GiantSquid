import { SchemeTypes } from "./settings.enum";

export const SchemesView = [
	{
		Name: "Auto",
		Icon: "bolt",
		Type: SchemeTypes.prefered,
    Selected:false
	},
	{
		Name: "Dark",
		Icon: "dark_mode",
		Type: SchemeTypes.dark,
    Selected:false

	},
	{
		Name: "Light",
		Icon: "light_mode",
		Type: SchemeTypes.light,
    Selected:true

	}
];
