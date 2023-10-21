import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { toggleFullScreen } from "@core";
import { AppSharedModule } from "@shared";
import { MaterialModule } from "@material";

@Component({
	selector: "app-full-screen",
	standalone: true,
	templateUrl: "./full-screen.component.html",
	styleUrls: ["./full-screen.component.scss"],
	imports: [CommonModule, AppSharedModule, MaterialModule]
})
export class FullScreenComponent {
	enterFullScreen() {
		toggleFullScreen();
	}
}
