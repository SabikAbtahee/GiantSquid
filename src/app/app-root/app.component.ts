import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	private isDark = false;
	themes = ["dark-scheme", "light-scheme"];

	constructor(
		private renderer: Renderer2,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		console.log("AppComponent ngOninit");
	}

	swithc() {
		this.isDark = !this.isDark;
		this.removeBodyClass();
		this.addBodyClass();
	}
}
