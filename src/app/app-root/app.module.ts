import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { LayoutModule } from "../layout/layout.module";
import { routes } from "./routes";
import { RouterModule } from "@angular/router";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LayoutModule,
		RouterModule.forRoot(routes)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
