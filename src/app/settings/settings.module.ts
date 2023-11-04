import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SchemeSwitchDirective } from "./directives/scheme-switch.directive";
import { SettingsComponent } from "./containers/settings/settings.component";
import { AppSharedModule } from "../app-shared/app-shared.module";
import { MaterialModule } from "@material";

@NgModule({
	declarations: [SchemeSwitchDirective, SettingsComponent],
	exports: [SchemeSwitchDirective, SettingsComponent],
	imports: [CommonModule, AppSharedModule, MaterialModule]
})
export class SettingsModule {}
