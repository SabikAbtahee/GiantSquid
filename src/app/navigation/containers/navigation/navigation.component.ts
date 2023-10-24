import { Component, OnInit } from "@angular/core";
import { Business } from "../../configs/navigation.interface";
import { BusinessList } from "../../configs/navigation.const";

@Component({
	selector: "app-navigation",
	templateUrl: "./navigation.component.html",
	styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
	ngOnInit(): void {
		this.navigations = BusinessList;
	}

	navigations!: Array<Business>;
}
