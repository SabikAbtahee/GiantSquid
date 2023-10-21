import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../app-shared/material.module";
import { AppSharedModule } from "../../app-shared/app-shared.module";
import { environment } from "@environment";

@Component({
	selector: "app-language-picker",
	standalone: true,
	templateUrl: "./language-picker.component.html",
	styleUrls: ["./language-picker.component.scss"],
	imports: [CommonModule, MaterialModule, AppSharedModule]
})
export class LanguagePickerComponent {
	menuItems!: LanguageMenu[];
	selectedLanguageCode = environment.defaultLanguageCode;
	constructor() {
		this.setMenuItems();
	}

	setMenuItems() {
		this.menuItems = environment.languageList;
	}

	setLang(val: string) {
		this.selectedLanguageCode = val;
	}

	getFiPrefix(str: string) {
		return `fi-${str}`;
	}
}

interface LanguageMenu {
	Code: string;
	Lang: string;
}
