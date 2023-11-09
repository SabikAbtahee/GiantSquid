import { Component, EventEmitter, Output } from "@angular/core";
import { SchemesView } from "../../config/settings.const";

@Component({
	selector: "app-settings-view",
	templateUrl: "./settings-view.component.html",
	styleUrls: ["./settings-view.component.scss"]
})
export class SettingsViewComponent {
	@Output() closeDrawerOutput = new EventEmitter<boolean>();
	schemesView = SchemesView;
	closeDrawer() {
		this.closeDrawerOutput.emit(true);
	}
}
