import { Component } from "@angular/core";
import { toggleFullScreen } from "../../../app-core/utility/utility";

@Component({
	selector: "app-toolbar",
	templateUrl: "./toolbar.component.html",
	styleUrls: ["./toolbar.component.scss"]
})
export class ToolbarComponent {
	enterFullScreen() {
		toggleFullScreen();
	}
}
