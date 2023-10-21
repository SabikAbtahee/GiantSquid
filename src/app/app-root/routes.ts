import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/containers/layout/layout.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "home",
				loadComponent: () =>
					import("@common").then((res) => res.PageNotFoundComponent)
			}
		]
	}

	// { path: "**", component: PageNotFoundComponent }
];
