import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { LayoutModule } from "../layout/layout.module";
import { SettingsModule } from "../settings/settings.module";
import { AppComponent } from "./app.component";
import { routes } from "./routes";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		LayoutModule,
    SettingsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
