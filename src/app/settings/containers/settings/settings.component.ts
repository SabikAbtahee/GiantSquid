import { Component, ViewChild } from "@angular/core";
import { SideDrawerComponent } from "@common";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.component.html",
	styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent {
	@ViewChild("drawer") drawer!: SideDrawerComponent;

	toggleSettingsBar() {
		this.drawer?.toggle();
	}

	closeSettingsBar(event: boolean) {
		console.log(event);
		this.drawer?.close();
	}
}
