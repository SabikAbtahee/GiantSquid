import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit, Renderer2 } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	private isDark = true;
	themes = ["dark-scheme", "light-scheme"];

	constructor(
		private renderer: Renderer2,
		@Inject(DOCUMENT) private document: Document
	) {}

	ngOnInit() {
		console.log("AppComponent ngOninit");
		this.removeBodyClass();
		this.addBodyClass();
	}

	addBodyClass() {
		this.renderer.addClass(
			this.document.body,
			this.isDark ? "dark-scheme" : "light-scheme"
		);
	}

	removeBodyClass() {
		this.renderer.removeClass(
			this.document.body,
			this.isDark ? "light-scheme" : "dark-scheme"
		);
	}

	swithc() {
		this.isDark = !this.isDark;
		this.removeBodyClass();
		this.addBodyClass();
	}
}
