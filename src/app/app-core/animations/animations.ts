import {
	animate,
	style,
	transition,
	trigger,
	useAnimation
} from "@angular/animations";

export const fadeInAnimation = trigger("fadeInAnimation", [
	transition("void => *", [
		style({ opacity: 0 }),
		animate("3s ease-in", style({ opacity: 1 }))
	])
]);
