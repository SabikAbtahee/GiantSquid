import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppIconComponent } from "./components/app-icon/app-icon.component";
import { AppLogoComponent } from "./components/app-logo/app-logo.component";
import { MaterialModule } from "./material.module";
import { AppIconButtonComponent } from "./components/app-icon-button/app-icon-button.component";

@NgModule({
	declarations: [AppIconComponent, AppLogoComponent, AppIconButtonComponent],
	imports: [CommonModule, MaterialModule],
	exports: [AppIconComponent, AppLogoComponent, AppIconButtonComponent]
})
export class AppSharedModule {}
