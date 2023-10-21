import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppIconComponent } from "./components/app-icon/app-icon.component";
import { AppLogoComponent } from "./components/app-logo/app-logo.component";
import { MaterialModule } from "./material.module";

@NgModule({
	declarations: [AppIconComponent, AppLogoComponent],
	imports: [CommonModule, MaterialModule],
	exports: [AppIconComponent, AppLogoComponent]
})
export class AppSharedModule {}
