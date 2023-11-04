import { Component, OnInit } from "@angular/core";
import { SchemeTypes } from "../settings/config/settings.enum";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
	schemes = SchemeTypes;


	ngOnInit() {
		console.log("AppComponent ngOninit");
	}
}
