import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "@material";

@Component({
	selector: "app-page-not-found",
	standalone: true,
	imports: [CommonModule, RouterModule, MaterialModule],
	templateUrl: "./page-not-found.component.html",
	styleUrls: ["./page-not-found.component.scss"]
})
export class PageNotFoundComponent {}
