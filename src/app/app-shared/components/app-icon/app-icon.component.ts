import { Component, Input } from "@angular/core";

@Component({
	selector: "app-icon",
	templateUrl: "./app-icon.component.html",
	styleUrls: ["./app-icon.component.scss"]
})
export class AppIconComponent {
	@Input() iconName!: string;
}
