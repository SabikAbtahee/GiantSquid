import {
	Directive,
	HostListener,
	Inject,
	Input,
	Renderer2
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { SchemeTypes } from "../config/settings.enum";

@Directive({
	selector: "[appSchemeSwitch]"
})
export class SchemeSwitchDirective {
	@Input() appSchemeSwitch!: SchemeTypes;

	constructor(
		private renderer: Renderer2,
		@Inject(DOCUMENT) private document: Document
	) {}

	@HostListener("click")
	onClick() {
		this.changeScheme(this.appSchemeSwitch);
	}

	private changeScheme(value: SchemeTypes) {
    const enumValues = Object.values(SchemeTypes);
		for (const i of enumValues) {
			this.removeClass(i);
		}
		this.addClass(value);
	}

	private removeClass(className: string) {
		this.renderer.removeClass(this.document.body, className);
	}

	private addClass(className: string) {
		this.renderer.addClass(this.document.body, className);
	}
}
