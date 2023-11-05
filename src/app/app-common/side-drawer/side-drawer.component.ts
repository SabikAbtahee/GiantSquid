import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DrawerPosition } from "./side-drawer.config";

@Component({
	selector: "app-side-drawer",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./side-drawer.component.html",
	styleUrls: ["./side-drawer.component.scss"]
})
export class SideDrawerComponent {
	@Input() position: DrawerPosition = "end";
	@Input() set opened(value: boolean) {
		this.isDrawerOpen = value;
	}
	@Input() hasBackdrop = true;
	@Input() disableClose = false;

	isDrawerOpen = false;

	close() {
		this.isDrawerOpen = false;
	}

	open() {
		this.isDrawerOpen = true;
	}

	toggle() {
		this.isDrawerOpen = !this.isDrawerOpen;
	}
}
