import { Routes } from "@angular/router";
import { LayoutComponent } from "../layout/containers/layout/layout.component";
import { PageNotFoundComponent } from "../app-shared/components/page-not-found/page-not-found.component";

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
					import(
						"../app-shared/components/page-not-found/page-not-found.component"
					).then((res) => res.PageNotFoundComponent)
			}
		]
	}

	// { path: "**", component: PageNotFoundComponent }
];
